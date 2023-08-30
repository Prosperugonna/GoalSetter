const Project = require('../controllers/projectController'); // Import your project model

// Controller for handling POST request to create a new project
exports.createProject = async (req, res) => {
  try {
    // ... (your existing createProject code)
  } catch (error) {
    // ... (your existing error handling)
  }
};

// Controller for handling PUT request to update an existing project
exports.updateProject = async (req, res) => {
  try {
    // ... (your existing updateProject code)
  } catch (error) {
    // ... (your existing error handling)
  }
};

// Controller for handling DELETE request to delete an existing project
exports.deleteProject = async (req, res) => {
  try {
    // ... (your existing deleteProject code)
  } catch (error) {
    // ... (your existing error handling)
  }
};

// Controller for handling GET request to get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller for handling GET request to get a specific project by ID
exports.getProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};