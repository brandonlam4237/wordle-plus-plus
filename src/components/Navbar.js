import React, { useState, useContext, useRef } from "react";
import "../scss/nav.scss";
import question from "../assets/question-icon.png";
import cog from "../assets/settings-icon.png";
import chart from "../assets/chart-icon.png";
import HelpModal from "./HelpModal";
import SettingsModal from "./SettingsModal";
import { SettingsContext } from "../App";
import chartDark from "../assets/chart-dark.png";
import questionDark from "../assets/question-dark.png";
import cogDark from "../assets/settings-dark.png";
import Toast from "./Toast";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settings = useContext(SettingsContext);
  const toastRef = useRef(null);
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
              <img src={question} className="icon" />
            )}
            {settings.theme === "dark" && (
              <img src={questionDark} className="icon" />
            )}
          </div>
          <div
            onClick={() => {
              toastRef.current.showToast();
            }}
          >
            {settings.theme === "light" && (
              <img src={chart} className="icon chart" />
            )}
            {settings.theme === "dark" && (
              <img src={chartDark} className="icon chart" />
            )}
          </div>
          <div
            onClick={() => {
              setSettingsOpen(true);
            }}
          >
            {settings.theme === "light" && (
              <img src={cog} className="icon settings" />
            )}
            {settings.theme === "dark" && (
              <img src={cogDark} className="icon settings" />
            )}
          </div>
        </div>
      </div>
      {modalOpen && <HelpModal closeModal={() => setModalOpen(false)} />}
      {settingsOpen && (
        <SettingsModal closeSettings={() => setSettingsOpen(false)} />
      )}
      <Toast ref={toastRef} message="Not implemented yet" type="error" />
    </nav>
  );
}

export default Navbar;
