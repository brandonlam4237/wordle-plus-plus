import React, { useState } from "react";
import "../scss/nav.scss";
import question from "../assets/question-icon.png";
import settings from "../assets/settings-icon.png";
import chart from "../assets/chart-icon.png";
import HelpModal from "./HelpModal";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <nav>
      <div className="container nav">
        <h1>Wordle++</h1>
        <div className="menu">
          <div
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <img src={question} className="icon" alt="question-mark" />
          </div>
          <a href="#">
            <img src={chart} className="icon chart" alt="chart-icon" />
          </a>
          <a href="#">
            <img src={settings} className="icon settings" alt="settings-icon" />
          </a>
        </div>
      </div>
      {modalOpen && <HelpModal closeModal={() => setModalOpen(false)} />}
    </nav>
  );
}

export default Navbar;
