import React, { Component } from "react";

function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && turn === 1 && (
        <div>
          <h1>You Win!</h1>
          <p className="solution-word">The word was: {solution}</p>
          <p>You found the solution in 1 guess</p>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Play Again
          </button>
        </div>
      )}
      {isCorrect && turn !== 1 && (
        <div>
          <h1>You Win!</h1>
          <p className="solution-word">The word was: {solution}</p>
          <p>You found the solution in {turn} guesses</p>
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
