const env = require("./constants");
const ProjectInMemoryAccess = require("../repository/Project_InMemoryAccess");

function serviceLocator() {
  var repositories = {};

  if (env.repository == "Memory") {
    repositories.repository = new ProjectInMemoryAccess();
  }

  return repositories;
}

module.exports = serviceLocator().repository;
