const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskControllers');

// POST: Create a new task
router.post('/', protect, createTask);

// PUT: Update an existing task
router.put('/:id', protect, updateTask);

// DELETE: Delete an existing task
router.delete('/:id', protect, deleteTask);

module.exports = router;
