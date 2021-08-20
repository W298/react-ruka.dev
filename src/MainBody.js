import React, { useState } from "react";
import './MainBody.css';

function MainBody({homeHidden, projectsHidden}) {
  return (
    <div className="MainBody">
      <Home hidden={homeHidden}/>
      <Projects hidden={projectsHidden} />
    </div>
  );
}

function Home({hidden}) {
  return (
    <div className={"container " + (hidden ? "hidden" : "")}>
      <div className="main-title">
        <div className="row-text">
          Hello. I'm ruka.
        </div>
        <div className="row-text">
          I mainly develop <b>GAME</b>,
        </div>
        <div className="row-text">
          but I'm studying <b>WEB</b> either.
        </div>
        <hr />
      </div>
    </div>
  );
}

function Projects({hidden}) {
  return (
    <div className={hidden ? "hidden" : ""}>
      asd
    </div>
  );
}

export default MainBody;