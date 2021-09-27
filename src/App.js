import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header.js";
import MainBody from "./component/MainBody.js";

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

export default App;
