const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  order: { type: Number, required: true },
  tagline: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: [{ type: String }],
  icon: { type: String, default: '💻' },
  linkLabel: { type: String, default: 'View Code' },
  linkUrl: { type: String, required: true }
});

module.exports = mongoose.model('Project', projectSchema);
