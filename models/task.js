const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project', // Reference to the 'Project' model
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the 'User' model
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  description: String,
  sent: {
    type: Boolean,
    default: false
  },
  expiry_date: {
    type: Date,
    default: Date.now() + 3 * 24 * 60 * 60 * 1000 // 3 days from now
  },
  is_priority: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
