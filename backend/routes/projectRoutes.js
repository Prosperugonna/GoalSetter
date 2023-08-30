const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectControllers');

// POST: Create a new project
router.post('/', protect, createProject);

// PUT: Update an existing project
router.put('/:id', protect, updateProject);

// DELETE: Delete an existing project
router.delete('/:id', protect, deleteProject);

module.exports = router;
