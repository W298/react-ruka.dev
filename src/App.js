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
      <MainBody viewHidden={viewHidden} />
    </div>
  );
}

export default App;
