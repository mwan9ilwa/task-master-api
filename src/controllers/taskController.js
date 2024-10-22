// controllers/taskController.js
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { title, description, projectId, assignedTo } = req.body;

  try {
    const newTask = await Task.create({
      title,
      description,
      project: projectId,
      assignedTo
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.query.projectId });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};
