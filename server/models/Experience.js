const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  type: { type: String, enum: ['work', 'leadership'], required: true },
  order: { type: Number, required: true },
  role: { type: String, required: true },
  organization: { type: String, required: true },
  projectLine: { type: String },
  period: { type: String, required: true },
  points: [{ type: String }],
  links: [{
    label: String,
    url: String
  }],
  icon: { type: String, default: '💼' }
});

module.exports = mongoose.model('Experience', experienceSchema);
