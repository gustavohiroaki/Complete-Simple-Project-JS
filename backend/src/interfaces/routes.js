const { Router } = require("express");

// Middlewares
const logRequests = require("../infrastructure/middleware/logRequests");
const validateProjectId = require("../infrastructure/middleware/validateProjectId");

// Controllers
const ProjectController = require("./controller/ProjectController");

const routes = Router();

routes.use(logRequests);

routes.get("/project", ProjectController.list);
routes.post("/project", ProjectController.create);
routes.put("/project/:id", validateProjectId, ProjectController.update);
routes.delete("/project/:id", validateProjectId, ProjectController.delete);

module.exports = routes;
