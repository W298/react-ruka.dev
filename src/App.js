import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header.js";
import MainBody from "./component/MainBody.js";
import SideBar from "./component/SideBar.js";

function App() {
  const [viewHidden, setViewHidden] = useState({
    home: false,
    projects: true
  });

  return (
    <div className="App">
      <SideBar setViewHidden={setViewHidden} />
      <Header setViewHidden={setViewHidden} />
      <MainBody viewHidden={viewHidden} />
    </div>
  );
}

export default App;
