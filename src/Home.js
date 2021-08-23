import React from "react";
import "./Home.css";
import Icon from "./Icon.js";

function Home() {
  const textList = {
    "main-title": [
      ["👋 Hi, I'm ruka,", "Game Developer & Web Developer"],
      ["I mainly develop GAME,", "but I'm studying WEB either."]
    ],
    "sub-title": [
      ["This website is built with `react.js`,", "which I'm currently learning."]
    ]
  };

  const cardShelfList = {
    "WEB DEV": ["react", "vuejs", "bootstrap"],
    "GAME DEV": ["unity", "unreal"],
    "MAIN LANGUAGES": ["cpp", "javascript", "typescript"]
  }

  return (
    <div className="container">
      {Object.keys(textList).map((key) => {
        return textList[key].map((text) => {
          return <Text textCls={key} textList={text} />
        });
      })}
      <hr />
      <div className="card-container">
        {Object.keys(cardShelfList).map((key) => {
          return <CardShelf title={key} iconNameList={cardShelfList[key]} />
        })}
      </div>
    </div>
  );
}

function Text({ textCls, textList }) {
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
      <div className="icon-title">
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

export default Home;