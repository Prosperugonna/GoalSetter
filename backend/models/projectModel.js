const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the 'User' model
        required: true
    },
    name: {
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

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
