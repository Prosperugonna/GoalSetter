const Task = require('../controllers/taskController.js'); // Import your task model


// Controller for handling GET request to retrieve all tasks for a project
exports.getProjects = async (req, res) => {
  try {
    const { project_id } = req.params;

    // Find all tasks for the specified project
    const tasks = await Task.find({ project_id });

    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for handling GET request to retrieve a single task
exports.getProject = async (req, res) => {
  try {
    const { project_id, task_id } = req.params;

    // Find the specific task for the specified project
    const task = await Task.findOne({ _id: task_id, project_id });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for handling POST request to create a new task
exports.createTask = async (req, res) => {
  try {
    // ... existing createTask logic ...

    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for handling PUT request to update an existing task
exports.updateTask = async (req, res) => {
  try {
    // ... existing updateTask logic ...

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for handling DELETE request to delete an existing task
exports.deleteTask = async (req, res) => {
  try {
    // ... existing deleteTask logic ...

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getProjects,
  getProject,
  createTask,
  updateTask,
  deleteTask,
};