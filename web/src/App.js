import React, { useEffect, useState } from "react";
import api from "./services/api";

import Header from "./components/Header";
import Card from "./components/Card";

import "./App.css";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    api.get("project").then((apiProjects) => {
      setProjects(apiProjects.data);
    });
  }, []);

  useEffect(() => {
    console.log("Title:", title);
    console.log("Owner:", owner);
  }, [title, owner]);

  async function handleSubmit(e) {
    e.preventDefault();
    const postProject = await api.post("project", {
      title,
      owner,
    });

    function removeThisCard(id) {
      console.log(id);
    }

    const apiPostProject = postProject.data;

    setProjects([...projects, apiPostProject]);
    setTitle("");
    setOwner("");
  }

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit} id="form-projects">
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
            />
          ))}
        </div>
      </main>
    </>
  );
}
