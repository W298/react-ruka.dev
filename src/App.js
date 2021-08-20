import React, { useState } from "react";
import "./App.css";
import "./MainBody.js";
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
  const [header, setHeader] = useState({
    opened: false,
    styCls: "header"
  });
  const [menuCls, setMenuCls] = useState("hidden");

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
    if (header.opened) {
      setHeader({
        opened: false,
        styCls: "header"
      });
      setMenuCls("hidden");
    } else {
      setHeader({
        opened: true,
        styCls: "header header-open"
      });
      setTimeout(() => {
        setMenuCls("");
      }, 120);
    }

    document.querySelector(".header-button").classList.toggle("active");
  }

  return (
    <div className={header.styCls}>
      <div className="header-upper-container">
        <div className="header-title">ruka.dev</div>
        <button className="header-button" onClick={toggleHeaderOpen}>
          +
        </button>
      </div>
      <div className={"header-menu-container " + menuCls}>
        {menuList.map((menu) => {
          return (
            <div
              key={menu.id}
              onClick={() => {
                setViewHidden({ ...menu.viewHidden });
                toggleHeaderOpen();
              }}
            >
              {menu.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
