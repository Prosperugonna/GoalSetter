const Task = require('../controllers/taskController.js'); // Import your task model

// Controller for handling POST request to create a new task
exports.createTask = async (req, res) => {
  try {
    const { project_id, user_id, name, status, description } = req.body;

    // Create a new task instance
    const newTask = new Task({
      project_id,
      user_id,
      name,
      status,
      description,
    });

    // Save the task to the database
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for handling PUT request to update an existing task
exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updates = req.body;

    // Update the task in the database
    const updatedTask = await Task.findByIdAndUpdate(taskId, updates, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for handling DELETE request to delete an existing task
exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    // Delete the task from the database
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
