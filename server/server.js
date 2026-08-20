require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const contentRoutes = require('./routes/content');
const contactRoutes = require('./routes/contact');

const app = express();

connectDB();

const allowedOrigins = (process.env.CLIENT_ORIGIN || '')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

app.use(cors({
  origin: allowedOrigins.length ? allowedOrigins : '*'
}));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api', contentRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 API running on http://localhost:${PORT}`));
