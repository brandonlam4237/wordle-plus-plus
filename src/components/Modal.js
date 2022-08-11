import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";
import closeLight from "../assets/close-light.png";
import closeDark from "../assets/close-dark.png";

function Modal({ isCorrect, turn, solution }) {
  const theme = useContext(ThemeContext);
  const [hideModal, setHideModal] = useState(false);
  return (
    !hideModal && (
      <div className="modal-end">
        {isCorrect && (
          <div>
            {theme.theme === "light" && (
              <img src={closeLight} onClick={setHideModal} />
            )}
            {theme.theme === "dark" && (
              <img src={closeDark} onClick={setHideModal} />
            )}

            <h1>You Win!</h1>
            <p className="solution-word">The word was: {solution}</p>
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
            {theme.theme === "light" && (
              <img src={closeLight} onClick={setHideModal} />
            )}
            {theme.theme === "dark" && (
              <img src={closeDark} onClick={setHideModal} />
            )}
            <h1>You Lose!</h1>
            <p className="solution-word">The word was: {solution}</p>
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
