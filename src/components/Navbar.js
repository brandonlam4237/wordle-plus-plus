import React, { useState, useContext } from "react";
import "../scss/nav.scss";
import question from "../assets/question-icon.png";
import settings from "../assets/settings-icon.png";
import chart from "../assets/chart-icon.png";
import HelpModal from "./HelpModal";
import SettingsModal from "./SettingsModal";
import { ThemeContext } from "../App";
import chartDark from "../assets/chart-dark.png";
import questionDark from "../assets/question-dark.png";
import settingsDark from "../assets/settings-dark.png";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const theme = useContext(ThemeContext);
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
            {theme.theme === "light" && <img src={question} className="icon" />}
            {theme.theme === "dark" && (
              <img src={questionDark} className="icon" />
            )}
          </div>
          <a href="#">
            {theme.theme === "light" && <img src={chart} className="chart" />}
            {theme.theme === "dark" && (
              <img src={chartDark} className="chart" />
            )}
          </a>
          <div
            onClick={() => {
              setSettingsOpen(true);
            }}
          >
            {theme.theme === "light" && (
              <img src={settings} className="icon settings" />
            )}
            {theme.theme === "dark" && (
              <img src={settingsDark} className="icon settings" />
            )}
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
