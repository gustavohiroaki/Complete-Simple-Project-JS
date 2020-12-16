import api from "../../services/api";

async function getProjects() {
  const response = await api.get("project");
  return response.data;
}
async function postProject(data) {
  const response = await api.post("project", data);
  return response.data;
}
async function deleteProject(id) {
  const response = await api.delete(`project/${id}`);
  return response.data;
}

export { getProjects, postProject, deleteProject };
