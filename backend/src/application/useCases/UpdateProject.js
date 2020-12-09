const Project = require("../../domain/Project");

module.exports = (id, title, owner, repository) => {
  const project = new Project(id, title, owner);
  return repository.update(project);
};
