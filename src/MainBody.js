import React, { useState } from "react";
import iconPath from "./IconPath.js";
import "./MainBody.css";

function MainBody({ homeHidden, projectsHidden }) {
  return (
    <div className="MainBody">
      {homeHidden ? null : <Home hidden={homeHidden} />}
      {projectsHidden ? null : <Projects hidden={projectsHidden} />}
    </div>
  );
}

function Home() {
  return (
    <div className="container">
      <div className="main-title">
        <div className="row-text">👋 Hi, I'm ruka,</div>
        <div className="row-text">Game Developer & Web Developer</div>
      </div>
      <div className="main-title">
        <div className="row-text">I mainly develop GAME,</div>
        <div className="row-text">but I'm studying WEB either.</div>
      </div>
      <hr />
      <div className="icon-container">
        <Icon iconName="react" fillColor="#61DAFB" />
        <Icon iconName="vuejs" fillColor="#4FC08D" />
      </div>
    </div>
  );
}

function Projects() {
  return <div>asd</div>;
}

function Icon({ iconName, fillColor }) {
  return (
    <svg
      role="img"
      viewBox={
        "viewbox" in iconPath[iconName]
          ? iconPath[iconName].viewbox
          : "0 0 24 24"
      }
      fill={fillColor}
      className="icon"
    >
      <path d={iconPath[iconName].path} />
    </svg>
  );
}

export default MainBody;
