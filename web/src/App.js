import React, { useEffect, useState } from "react";
import { getProjects, postProject, deleteProject } from "./domain/Projects";

import Header from "./components/Header";
import Card from "./components/Card";

import "./App.css";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const response = await getProjects();
    setProjects(response);
  }

  async function handleSubmitProject(e) {
    e.preventDefault();
    const postReturnProject = await postProject({ title, owner });

    setProjects([...projects, postReturnProject]);
    setTitle("");
    setOwner("");
  }

  async function handleDeleteProject(id) {
    await deleteProject(id);
    loadProjects();
  }

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmitProject} id="form-projects">
          <h1>New Projects</h1>
          <input
            type="text"
            placeholder="Título do Projeto"
            onChange={(data) => setTitle(data.currentTarget.value)}
            value={title}
          />
          <input
            type="text"
            placeholder="Criador"
            onChange={(data) => setOwner(data.currentTarget.value)}
            value={owner}
          />
          <button>Novo Projeto</button>
        </form>

        <div id="list-projects">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              owner={project.owner}
              remove={() => handleDeleteProject(project.id)}
            />
          ))}
        </div>
      </main>
    </>
  );
}
