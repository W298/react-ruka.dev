import React from "react";
import "./MainBody.css";
import Projects from "./Projects.js";
import Home from "./Home.js";

function MainBody({ homeHidden, projectsHidden }) {
  return (
    <div className="MainBody">
      {homeHidden ? null : <Home />}
      {projectsHidden ? null : <Projects />}
    </div>
  );
}

export default MainBody;