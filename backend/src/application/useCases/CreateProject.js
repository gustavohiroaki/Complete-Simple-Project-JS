const { uuid } = require("uuidv4");
const Project = require("../../domain/Project");

module.exports = (title, owner, repository) => {
  const id = uuid();
  const project = new Project(id, title, owner);

  return repository.create(project);
};
