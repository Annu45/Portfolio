const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [String]
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
