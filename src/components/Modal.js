import React, { Component } from "react";

function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
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
  );
}

export default Modal;
