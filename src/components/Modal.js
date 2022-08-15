import React, { useState, useContext } from "react";
import { SettingsContext } from "../App";
import closeLight from "../assets/close-light.png";
import closeDark from "../assets/close-dark.png";

function Modal({ isCorrect, turn, solution }) {
  const settings = useContext(SettingsContext);
  const [hideModal, setHideModal] = useState(false);
  return (
    !hideModal && (
      <div className="modal-end">
        {isCorrect && (
          <div>
            {settings.theme === "light" && (
              <img src={closeLight} onClick={setHideModal} alt="close-button" />
            )}
            {settings.theme === "dark" && (
              <img src={closeDark} onClick={setHideModal} alt="close-button" />
            )}

            <h1>You Win!</h1>
            {settings.contrastMode === "normal" && (
              <p style={{ color: "#6aaa64" }} className="solution-word">
                The word was: {solution}
              </p>
            )}

            {settings.contrastMode === "high" && (
              <p style={{ color: "#85c0f9" }} className="solution-word">
                The word was: {solution}
              </p>
            )}

            <p>Number of guesses: {turn}</p>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Play Again
            </button>
          </div>
        )}
        {!isCorrect && (
          <div>
            {settings.theme === "light" && (
              <img src={closeLight} onClick={setHideModal} alt="close-button" />
            )}
            {settings.theme === "dark" && (
              <img src={closeDark} onClick={setHideModal} alt="close-button" />
            )}
            <h1>You Lose!</h1>
            {settings.contrastMode === "normal" && (
              <p style={{ color: "#c9b458" }} className="solution-word">
                The word was: {solution}
              </p>
            )}

            {settings.contrastMode === "high" && (
              <p style={{ color: "#f5793a" }} className="solution-word">
                The word was: {solution}
              </p>
            )}
            <p>Too bad :(</p>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    )
  );
}

export default Modal;
