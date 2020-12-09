const ProjectInMemory = require("./Project_InMemory");

class ProjectInMemoryAccess {
  list() {
    return ProjectInMemory.list();
  }
  create(data) {
    const returnedData = ProjectInMemory.create(data);

    return returnedData;
  }
  update(data) {
    const returnedData = ProjectInMemory.update(data.id, data);

    return returnedData;
  }
  delete(id) {
    const returnedData = ProjectInMemory.update(id);

    return returnedData;
  }
}

module.exports = new ProjectInMemoryAccess();
