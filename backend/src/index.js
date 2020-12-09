const { response } = require("express");
const express = require("express");
const { uuid, isUuid } = require("uuidv4");

const app = express();
app.use(express.json());

const projects = [];

// Middleware
function logRequests(req, res, next) {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);
  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}
function validateProjectId(req, res, next) {
  const { id } = req.params;

  if (!isUuid(id)) return res.status(400).json({ error: "Invalid project ID" });

  next();
}

app.use(logRequests);

app.get("/projects", (req, res) => {
  const { title } = req.query;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return res.json(results);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return res.json(project);
});

app.put("/projects/:id", validateProjectId, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id === id);
  if (projectIndex < 0)
    return res.status(400).json({ error: "Project not found" });

  const { title, owner } = req.body;
  const projectForUpdate = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = projectForUpdate;

  return res.json(projectForUpdate);
});

app.delete("/projects/:id", validateProjectId, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id === id);
  if (projectIndex < 0)
    return res.status(400).json({ error: "Project not found" });

  projects.splice(projectIndex, 1);

  return res.json();
});

app.listen(3333, () => {
  console.log("backend started");
});
