import React, { useContext, useState } from "react";
import closeLight from "../../assets/close-light.png";
import closeDark from "../../assets/close-dark.png";
import { SettingsContext } from "../../App";
import "../../scss/statsModal.scss";
import { useScoreContext } from "../../hooks/useScoreContext";
import EndChart from "../EndChart";

function EndModal({ setShowModal, isCorrect, turn }) {
  const settings = useContext(SettingsContext);
  const { games, currStreak, maxStreak, wins, guesses } = useScoreContext();
  const [hideModal, setHideModal] = useState(false);

  return (
    !hideModal && (
      <div className="stats">
        <div className="modal">
          <div className="container">
            <div className="header">
              <div>STATISTICS</div>
              {settings.theme === "light" && (
                <img
                  src={closeLight}
                  onClick={() => {
                    setHideModal(true);
                  }}
                  alt="close-button"
                />
              )}
              {settings.theme === "dark" && (
                <img
                  src={closeDark}
                  onClick={() => {
                    setHideModal(true);
                  }}
                  alt="close-button"
                />
              )}
            </div>
            <div className="content">
              <div>
                <b>{games}</b>
                <div>Played</div>
              </div>
              <div>
                {games !== 0 && <b>{Math.trunc((wins / games) * 100)}</b>}
                {games === 0 && <b>0</b>}
                <div>Win %</div>
              </div>
              <div>
                <b>{currStreak}</b>
                <div>
                  Current <br />
                  Streak
                </div>
              </div>
              <div>
                <b>{maxStreak}</b>
                <div>
                  Max <br />
                  Streak
                </div>
              </div>
            </div>
            <div className="guesses">
              <h1>GUESS DISTRIBUTION</h1>
              <EndChart guesses={guesses} isCorrect={isCorrect} turn={turn} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default EndModal;
