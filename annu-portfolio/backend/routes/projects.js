const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Fallback data if no DB
const fallbackProjects = [
  {
    _id: '1',
    title: 'WanderNest – Vacation Rental Platform',
    description: 'Engineered a full-stack rental marketplace with RESTful APIs supporting end-to-end listing management, image uploads via Cloudinary CDN, and real-time geocoding using OpenStreetMap Nominatim API.',
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Cloudinary', 'Passport.js'],
    github: 'https://github.com/Annu45/wandernest',
    live: ''
  },
  {
    _id: '2',
    title: 'Dr. B.R. Ambedkar 3D AI Avatar',
    description: 'Built a retrieval-based response pipeline using FastAPI, LangChain, and LLM APIs on a curated knowledge base as part of a government-supervised 15-member team.',
    tech: ['FastAPI', 'LangChain', 'MongoDB Atlas', 'React', 'Python'],
    github: '',
    live: 'https://ambedkar-rag-backend.vercel.app/'
  },
  {
    _id: '3',
    title: 'Random Image Generator',
    description: 'Built a Spring Boot web application using MVC architecture to fetch and display random images via REST API integration with Swagger documentation.',
    tech: ['Java', 'Spring Boot', 'REST API', 'Swagger', 'Bootstrap'],
    github: 'https://github.com/Annu45/Random_Image_Generator.git',
    live: ''
  }
];

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    if (projects.length === 0) return res.json(fallbackProjects);
    res.json(projects);
  } catch (err) {
    res.json(fallbackProjects);
  }
});

router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
