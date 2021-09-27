import React from "react";
import "./MainBody.css";
import Projects from "./Projects.js";
import Home from "./Home.js";

function MainBody({ viewHidden }) {
  return (
    <div className="MainBody">
      {!viewHidden.home && <Home />}
      {!viewHidden.projects && <Projects />}
    </div>
  );
}

export default MainBody;
