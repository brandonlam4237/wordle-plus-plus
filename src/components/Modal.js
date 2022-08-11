import React, { useState } from "react";
import close from "../assets/close-icon.png";

function Modal({ isCorrect, turn, solution }) {
  const [hideModal, setHideModal] = useState(false);
  return (
    !hideModal && (
      <div className="modal-end">
        {isCorrect && (
          <div>
            <img
              src={close}
              alt="close-button"
              onClick={() => {
                setHideModal(true);
              }}
            />

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
            <img
              src={close}
              alt="close-button"
              onClick={() => {
                setHideModal(true);
              }}
            />
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
