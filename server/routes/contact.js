const express = require('express');
const nodemailer = require('nodemailer');
const Message = require('../models/Message');

const router = express.Router();

// very small in-memory rate limiter: max 5 messages / hour / IP
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const entry = hits.get(ip) || [];
  const recent = entry.filter(t => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

let transporter = null;
if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
}

router.post('/', async (req, res) => {
  try {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (rateLimited(ip)) {
      return res.status(429).json({ error: 'Too many messages sent. Please try again later.' });
    }

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are all required.' });
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const saved = await Message.create({ name, email, message });

    if (transporter) {
      transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `${message}\n\n— ${name} (${email})`,
        html: `<p>${message.replace(/\n/g, '<br>')}</p><p>— <b>${name}</b> (${email})</p>`
      }).catch(err => console.error('Email send failed:', err.message));
    }

    res.status(201).json({ ok: true, id: saved._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

module.exports = router;
