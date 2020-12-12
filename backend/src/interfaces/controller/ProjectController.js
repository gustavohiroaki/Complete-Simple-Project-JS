const ProjectInMemoryAccess = require("../../infrastructure/config/serviceLocator");

const CreateProject = require("../../application/useCases/CreateProject");
const ListProject = require("../../application/useCases/ListProject");
const UpdateProject = require("../../application/useCases/UpdateProject");
const DeleteProject = require("../../application/useCases/DeleteProject");

class ProjectController {
  list(req, res) {
    const project = ListProject(ProjectInMemoryAccess);

    return res.status(200).json(project);
  }
  create(req, res) {
    const { title, owner } = req.body;
    const project = CreateProject(title, owner, ProjectInMemoryAccess);

    return res.status(200).json(project);
  }
  delete(req, res) {
    const { id } = req.params;
    const project = DeleteProject(id, ProjectInMemoryAccess);

    if (project.error) return res.status(400).json(project);

    return res.status(200).json(project);
  }
  update(req, res) {
    const { id } = req.params;
    const { title, owner } = req.body;
    const project = UpdateProject(id, title, owner, ProjectInMemoryAccess);

    if (project.error) return res.status(400).json(project);

    return res.status(200).json(project);
  }
}

module.exports = new ProjectController();
