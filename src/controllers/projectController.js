// controllers/projectController.js
const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { name, description, userId } = req.body;
  
  try {
    const newProject = await Project.create({
      name,
      description,
      user: userId
    });

    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create project' });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.query.userId });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
};
