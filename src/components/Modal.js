import React, { Component } from "react";

function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution-word">The word was: {solution}</p>
          <p>You found the solution in {turn} guesses</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You Lose!</h1>
          <p className="solution-word">The word was: {solution}</p>
          <p>Too bad :(</p>
        </div>
      )}
    </div>
  );
}

export default Modal;
