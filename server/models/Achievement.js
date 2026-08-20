const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  order: { type: Number, required: true },
  emoji: { type: String, default: '🏆' },
  color: { type: String, default: '#E0507A' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  linkLabel: { type: String },
  linkUrl: { type: String }
});

module.exports = mongoose.model('Achievement', achievementSchema);
