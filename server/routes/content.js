const express = require('express');
const router = express.Router();

const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Achievement = require('../models/Achievement');
const Experience = require('../models/Experience');

router.get('/projects', async (req, res) => {
  const projects = await Project.find().sort('order');
  res.json(projects);
});

router.get('/skills', async (req, res) => {
  const skills = await Skill.find().sort('order');
  res.json(skills);
});

router.get('/achievements', async (req, res) => {
  const achievements = await Achievement.find().sort('order');
  res.json(achievements);
});

router.get('/experience', async (req, res) => {
  const experience = await Experience.find({ type: 'work' }).sort('order');
  res.json(experience);
});

router.get('/leadership', async (req, res) => {
  const leadership = await Experience.find({ type: 'leadership' }).sort('order');
  res.json(leadership);
});

module.exports = router;
