import React, { useState } from "react";
import "./App.css";
import MainBody from "./MainBody.js";

function App() {
  const [viewHidden, setViewHidden] = useState({
    home: false,
    projects: true
  });

  return (
    <div className="App">
      <Header setViewHidden={setViewHidden} />
      <MainBody
        homeHidden={viewHidden.home}
        projectsHidden={viewHidden.projects}
      />
    </div>
  );
}

function Header({ setViewHidden }) {
  const menuList = [
    {
      id: 1,
      title: "Home",
      viewHidden: {
        home: false,
        projects: true
      }
    },
    {
      id: 2,
      title: "Projects",
      viewHidden: {
        home: true,
        projects: false
      }
    },
    {
      id: 3,
      title: "About Me",
      viewHidden: {
        home: true,
        projects: true
      }
    }
  ];

  function toggleHeaderOpen() {
    document.querySelector(".header-menu-container").classList.toggle("hidden");
    document.querySelector(".header").classList.toggle("opened");
    document.querySelector(".header-button").classList.toggle("active");
  }

  return (
    <div className="header">
      <div className="header-upper-container">
        <div className="header-title">ruka.dev</div>
        <div className="header-button" onClick={toggleHeaderOpen}>
          +
        </div>
      </div>
      <div className="header-menu-container hidden">
        {menuList.map((menu) => {
          return (
            <div
              key={menu.id}
              onClick={() => {
                setViewHidden({ ...menu.viewHidden });
                toggleHeaderOpen();
              }}>
              {menu.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
