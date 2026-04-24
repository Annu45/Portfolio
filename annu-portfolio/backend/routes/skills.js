const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

const fallbackSkills = [
  { _id: '1', category: 'Languages', items: ['Java', 'C++', 'JavaScript', 'Python', 'SQL'] },
  { _id: '2', category: 'Backend', items: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'LangChain', 'REST APIs'] },
  { _id: '3', category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'] },
  { _id: '4', category: 'Databases & Cloud', items: ['MongoDB Atlas', 'MySQL'] },
  { _id: '5', category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ', 'Cloudinary'] }
];

router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    if (skills.length === 0) return res.json(fallbackSkills);
    res.json(skills);
  } catch (err) {
    res.json(fallbackSkills);
  }
});

module.exports = router;
