import React, { Component, useEffect } from "react";
import "../scss/nav.scss";
import question from "../assets/question-icon.png";
import settings from "../assets/settings-icon.png";
import chart from "../assets/chart-icon.png";

function Navbar() {
  return (
    <nav>
      <div className="container nav">
        <h1>Wordle++</h1>
        <div className="menu">
          <a href="#">
            <img src={question} className="icon" alt="question-mark" />
          </a>
          <a href="#">
            <img src={chart} className="icon chart" alt="chart-icon" />
          </a>
          <a href="#">
            <img src={settings} className="icon settings" alt="settings-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
