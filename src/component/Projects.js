import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Project. Intersection",
      subtitle: "Traffic Management Simulation Game",
      thumnailImg: ""
    },
    {
      title: "PIXEL REVERSI",
      thumnailImg: ""
    },
    {
      title: "Project. Together",
      thumnailImg: ""
    },
    {
      title: "Engine.ts",
      thumnailImg: ""
    }
  ];

  return (
    <div>
      <div className="proj-page-title">Projects</div>
      <div className="proj-card-container">
        {projectList.map((proj) => <Card title={proj.title} subtitle={proj.subtitle} thumnailImg={proj.thumnailImg}/>)}
      </div>
    </div>
  );
}

function Card({ title, subtitle, thumnailImg }) {
  return (
    <div className="proj-card">
      <div className="proj-card-title">{title}</div>
      <div className="proj-card-subtitle">{subtitle}</div>
      {/* <img src={thumnailImg} className="proj-card-img"></img> */}
    </div>
  );
}

export default Projects;