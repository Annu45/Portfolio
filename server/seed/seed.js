require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');

const Project = require('../models/Project');
const Skill = require('../models/Skill');
const Achievement = require('../models/Achievement');
const Experience = require('../models/Experience');

const projects = [
  {
    order: 1,
    tagline: 'Full-stack · marketplace',
    title: 'WanderNest — Vacation Rental Platform',
    description: 'A full-stack rental marketplace with RESTful APIs for end-to-end listing management, image uploads via Cloudinary CDN, and real-time geocoding through the OpenStreetMap Nominatim API. Secure authentication and role-based authorization built with Passport.js, plus robust server-side validation with Joi.',
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Cloudinary', 'Passport.js', 'EJS'],
    icon: '🏡',
    linkLabel: 'View Code',
    linkUrl: 'https://github.com/Annu45/wandernest'
  },
  {
    order: 2,
    tagline: 'AI / RAG · research',
    title: 'Dr. B.R. Ambedkar 3D AI Avatar',
    description: 'A retrieval-based conversational pipeline built with FastAPI, LangChain, and LLM APIs over a curated knowledge base — developed as part of a 15-member government-supervised research team. Deployed backend on Render, frontend on Vercel, with CI/CD via GitHub and MongoDB Atlas for persistent query storage and analytics.',
    tech: ['FastAPI', 'MongoDB Atlas', 'React', 'Python', 'Render'],
    icon: '🤖',
    linkLabel: 'Live Demo',
    linkUrl: 'https://ambedkar-rag-backend.vercel.app/'
  },
  {
    order: 3,
    tagline: 'MERN · full-stack',
    title: 'This Portfolio — MERN Stack',
    description: 'The very site you\'re on: a React frontend fetching live data from an Express + MongoDB API, with a Node/Nodemailer-powered contact form. Content (projects, skills, achievements) is stored in MongoDB Atlas and editable without touching the frontend code.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'REST API'],
    icon: '💻',
    linkLabel: 'View Code',
    linkUrl: 'https://github.com/Annu45/Portfolio'
  },
  {
    order: 4,
    tagline: 'Java · Spring Boot',
    title: 'Random Image Generator',
    description: 'A Spring Boot web app using MVC architecture to fetch and display random images through REST API integration, with Swagger for automated API documentation and a responsive Bootstrap frontend.',
    tech: ['Java', 'Spring Boot', 'REST API', 'Swagger', 'Bootstrap'],
    icon: '🎲',
    linkLabel: 'View Code',
    linkUrl: 'https://github.com/Annu45/Random_Image_Generator.git'
  }
];

const skills = [
  { order: 1, category: 'Languages', icon: '{ }', items: ['Java', 'Python', 'C++', 'JavaScript', 'SQL'] },
  { order: 2, category: 'Backend', icon: '⚙️', items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', ] },
  { order: 3, category: 'Frontend', icon: '🖥️', items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'] },
  { order: 4, category: 'Databases & Cloud', icon: '🗄️', items: ['MongoDB Atlas', 'MySQL', 'Render', 'Vercel', 'GitHub Actions'] },
  { order: 5, category: 'Tools', icon: '🛠️', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'Cloudinary'] }
];

const achievements = [
  {
    order: 1,
    emoji: '💻',
    color: '#6E8F6E',
    title: 'LeetCode — Top 13.06%',
    description: '270+ problems solved · Contest Rating 1711 · 100-Day Badge · Max Streak: 41 days.',
    linkLabel: 'View Profile →',
    linkUrl: 'https://leetcode.com/u/annumathur003/'
  },
  {
    order: 2,
    emoji: '📜',
    color: '#4a90a4',
    title: 'DSA with Java — Apna College',
    description: 'Completed a comprehensive Data Structures & Algorithms course in Java.',
    linkLabel: 'Certificate →',
    linkUrl: 'https://drive.google.com/file/d/1XKpw9DGs5zahjQTT5VNUaCYtGMwWhYg9/view?usp=drivesdk'
  },
  {
    order: 3,
    emoji: '🌐',
    color: '#8b6bb0',
    title: 'Full-Stack Web Development — Apna College',
    description: 'Completed the Full-Stack Web Development certification track.',
    linkLabel: 'Certificate →',
    linkUrl: 'https://drive.google.com/file/d/1rQrZd5TaFLgtJKrbgLQgWFt1RXPftgiB/view?usp=drivesdk'
  },
  {
    order: 4,
    emoji: '☕',
    color: '#E0507A',
    title: 'Java (Basics) — HackerRank',
    description: 'Certified Java developer, HackerRank basics track.',
    linkLabel: 'Certificate →',
    linkUrl: 'https://www.hackerrank.com/certificates/iframe/18938f831440'
  }
];

const experience = [
  {
    type: 'work',
    order: 1,
    role: 'Winter Research Intern',
    organization: 'DIAT Pune · Govt. of India, Ministry of Defence',
    projectLine: 'Dr. B.R. Ambedkar 3D AI Avatar (RAG System) · Guided by Prof. C.R.S Kumar',
    period: '📅 Dec 2025 – Jan 2026',
    points: [
      'Developed production-ready backend services for an AI-powered Retrieval-Augmented Generation application using FastAPI, Google Gemini, Python, and REST APIs.',
      'Implemented the complete RAG pipeline — document ingestion, text chunking, embedding generation, semantic search, and vector database retrieval for context-aware AI responses.',
      'Designed API key failover, rate-limit handling, and error recovery mechanisms to keep AI service uninterrupted during live demonstrations.',
      'Deployed the backend on Render and frontend on Vercel, configured production environments, integrated MongoDB Atlas for query logging, and automated deployments with GitHub CI/CD.'
    ],
    links: [
      { label: '🔗 Live Demo', url: 'https://ambedkar-rag-backend.vercel.app/' },
      { label: '📜 Certificate', url: 'https://drive.google.com/file/d/19PXCLSK9FElpUFQH-RPDNb7ptYLdhnIg/view?usp=drivesdk' }
    ]
  },
  {
    type: 'leadership',
    order: 1,
    role: 'Core Team Member — Range-Chinar Fest, NIT Srinagar',
    organization: 'NIT Srinagar',
    period: 'Oct 2025',
    icon: '🎪',
    points: [
      'Managed registration & payment verification for 1,000+ participants, ensuring smooth check-in and accurate record-keeping.',
      'Coordinated closely with volunteers and organizing teams for seamless on-ground execution.'
    ],
    links: [
      { label: 'Certificate', url: 'https://drive.google.com/file/d/1Peks7EgX0gO0nXI1mbg-nX2EZgiLTFEJ/view' }
    ]
  }
];

async function seed() {
  await connectDB();

  await Promise.all([
    Project.deleteMany({}),
    Skill.deleteMany({}),
    Achievement.deleteMany({}),
    Experience.deleteMany({})
  ]);

  await Project.insertMany(projects);
  await Skill.insertMany(skills);
  await Achievement.insertMany(achievements);
  await Experience.insertMany(experience);

  console.log('🌱 Seed complete: projects, skills, achievements, experience inserted.');
  await mongoose.connection.close();
  process.exit(0);
}

seed().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
