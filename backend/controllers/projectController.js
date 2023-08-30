const Project = require('../controllers/projectControllers'); // Import your project model

// Controller for handling POST request to create a new project
exports.createProject = async (req, res) => {
  try {
    const { user_id, name, description } = req.body;
    
    // Create a new project instance
    const newProject = new Project({
      user_id,
      name,
      description,
    });
    
    // Save the project to the database
    const savedProject = await newProject.save();
    
    res.status(201).json(savedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for handling PUT request to update an existing project
exports.updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const updates = req.body;
    
    // Update the project in the database
    const updatedProject = await Project.findByIdAndUpdate(projectId, updates, { new: true });
    
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(200).json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for handling DELETE request to delete an existing project
exports.deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    
    // Delete the project from the database
    const deletedProject = await Project.findByIdAndDelete(projectId);
    
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};