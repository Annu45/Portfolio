const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  order: { type: Number, required: true },
  category: { type: String, required: true },
  icon: { type: String, default: '🛠️' },
  items: [{ type: String }]
});

module.exports = mongoose.model('Skill', skillSchema);
