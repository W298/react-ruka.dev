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
  const maintextList = [
    ["👋 Hi, I'm ruka,", "Game Developer & Web Developer"],
    ["I mainly develop GAME,", "but I'm studying WEB either."]
  ];

  return (
    <div className="container">
      {maintextList.map((textList) => {
        return <MainText textCls="main-title" textList={textList} />;
      })}
      <hr />
      <div className="card-container">
        <CardShelf
          title="WEB DEV"
          iconNameList={["react", "vuejs", "bootstrap"]}
        />
        <CardShelf title="GAME DEV" iconNameList={["unity", "unreal"]} />
      </div>
      <div className="card-container">
        <CardShelf
          title="MAIN LANGUAGES"
          iconNameList={["cpp", "javascript", "typescript"]}
        />
      </div>
    </div>
  );
}

function MainText({ textCls, textList }) {
  return (
    <div className={textCls}>
      {textList.map((text) => {
        return <div className="row-text">{text}</div>;
      })}
    </div>
  );
}

function CardShelf({ title, iconNameList }) {
  return (
    <div className="card">
      <div className="sub-title">
        <div className="row-text">{title}</div>
      </div>
      <div className="icon-container">
        {iconNameList.map((iconName) => {
          return <Icon iconName={iconName} />;
        })}
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
      fill={fillColor ? fillColor : iconPath[iconName].fillColor}
      className="icon"
    >
      <path d={iconPath[iconName].path} />
    </svg>
  );
}

export default MainBody;
