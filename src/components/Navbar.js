import React, { useState, useContext } from "react";
import "../scss/nav.scss";
import question from "../assets/question-icon.png";
import cog from "../assets/settings-icon.png";
import chart from "../assets/chart-icon.png";
import HelpModal from "./modals/HelpModal";
import SettingsModal from "./modals/SettingsModal";
import { SettingsContext } from "../App";
import chartDark from "../assets/chart-dark.png";
import questionDark from "../assets/question-dark.png";
import cogDark from "../assets/settings-dark.png";
import StatsModal from "./modals/StatsModal";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  const settings = useContext(SettingsContext);

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
            {settings.theme === "light" && (
              <img src={question} className="icon" alt="question-icon" />
            )}
            {settings.theme === "dark" && (
              <img src={questionDark} className="icon" alt="question-icon" />
            )}
          </div>
          <div
            onClick={() => {
              setStatsOpen(true);
            }}
          >
            {settings.theme === "light" && (
              <img src={chart} className="icon chart" alt="statistic-icon" />
            )}
            {settings.theme === "dark" && (
              <img
                src={chartDark}
                className="icon chart"
                alt="statistic-icon"
              />
            )}
          </div>
          <div
            onClick={() => {
              setSettingsOpen(true);
            }}
          >
            {settings.theme === "light" && (
              <img src={cog} className="icon settings" alt="settings-icon" />
            )}
            {settings.theme === "dark" && (
              <img
                src={cogDark}
                className="icon settings"
                alt="settings-icon"
              />
            )}
          </div>
        </div>
      </div>
      {modalOpen && <HelpModal closeModal={() => setModalOpen(false)} />}
      {settingsOpen && (
        <SettingsModal closeSettings={() => setSettingsOpen(false)} />
      )}
      {statsOpen && <StatsModal closeStats={() => setStatsOpen(false)} />}
    </nav>
  );
}

export default Navbar;
