import React, { useState } from "react";
import "../scss/nav.scss";
import question from "../assets/question-icon.png";
import settings from "../assets/settings-icon.png";
import chart from "../assets/chart-icon.png";
import HelpModal from "./HelpModal";
import SettingsModal from "./SettingsModal";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
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
          <div
            onClick={() => {
              setSettingsOpen(true);
            }}
          >
            <img src={settings} className="icon settings" alt="settings-icon" />
          </div>
        </div>
      </div>
      {modalOpen && <HelpModal closeModal={() => setModalOpen(false)} />}
      {settingsOpen && (
        <SettingsModal closeSettings={() => setSettingsOpen(false)} />
      )}
    </nav>
  );
}

export default Navbar;
