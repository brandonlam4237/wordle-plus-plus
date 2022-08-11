import React, { useContext } from "react";
import "../scss/settingsModal.scss";
import { ThemeContext } from "../App";
import closeLight from "../assets/close-light.png";
import closeDark from "../assets/close-dark.png";

function SettingsModal({ closeSettings }) {
  const theme = useContext(ThemeContext);
  return (
    <div className="settings">
      <div className="modal">
        <div className="container">
          <div className="header">
            <div>SETTINGS</div>
            {theme.theme === "light" && (
              <img src={closeLight} onClick={closeSettings} />
            )}
            {theme.theme === "dark" && (
              <img src={closeDark} onClick={closeSettings} />
            )}
          </div>

          <div className="dark-theme">
            <div>Dark Theme</div>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => {
                  theme.toggleTheme();
                }}
              />
              <span className="slider" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
