import React, { useContext } from "react";
import "../../scss/settingsModal.scss";
import "../../scss/hc-settingsModal.scss";
import { SettingsContext } from "../../App";
import closeLight from "../../assets/close-light.png";
import closeDark from "../../assets/close-dark.png";

function SettingsModal({ closeSettings }) {
  const settings = useContext(SettingsContext);

  return (
    <div className="settings">
      <div className="modal">
        <div className="container">
          <div className="header">
            <div>SETTINGS</div>
            {settings.theme === "light" && (
              <img
                src={closeLight}
                onClick={closeSettings}
                alt="close button"
              />
            )}
            {settings.theme === "dark" && (
              <img src={closeDark} onClick={closeSettings} alt="close button" />
            )}
          </div>
          <div className="hard-mode">
            <div>
              <div>Hard Mode</div>
              <p>Any revealed hints must be used in subsequent guesses</p>
            </div>
            <label className="switch">
              {settings.hardMode && (
                <input
                  type="checkbox"
                  onChange={() => {
                    settings.toggleHardMode();
                  }}
                  checked
                />
              )}
              {!settings.hardMode && (
                <input
                  type="checkbox"
                  onChange={() => {
                    settings.toggleHardMode();
                  }}
                />
              )}

              <span className="slider" />
            </label>
          </div>
          <div className="dark-theme">
            <div>Dark Theme</div>
            <label className="switch">
              {settings.theme === "dark" && (
                <input
                  type="checkbox"
                  onChange={() => {
                    settings.toggleTheme();
                  }}
                  checked
                />
              )}
              {settings.theme === "light" && (
                <input
                  type="checkbox"
                  onChange={() => {
                    settings.toggleTheme();
                  }}
                />
              )}

              <span className="slider" />
            </label>
          </div>
          <div className="hard-mode">
            <div>
              <div>High Contrast Mode</div>
              <p>For improved color vision</p>
            </div>
            <label className="switch">
              {settings.contrastMode === "high" && (
                <input
                  type="checkbox"
                  onChange={() => {
                    settings.toggleContrastMode();
                  }}
                  checked
                />
              )}
              {settings.contrastMode === "normal" && (
                <input
                  type="checkbox"
                  onChange={() => {
                    settings.toggleContrastMode();
                  }}
                />
              )}

              <span className="slider" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
