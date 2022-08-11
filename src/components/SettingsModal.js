import React from "react";
import close from "../assets/close-icon.png";
import "../scss/settingsModal.scss";

function SettingsModal({ closeSettings }) {
  return (
    <div className="settings">
      <div className="modal">
        <div className="container">
          <div className="header">
            <div>SETTINGS</div>
            <img src={close} onClick={closeSettings} />
          </div>
          <div className="msg">Coming soon...?</div>
        </div>
      </div>
    </div>
  );
}

export default SettingsModal;
