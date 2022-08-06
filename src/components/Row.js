import React, { Component } from "react";

function Row({ guess }) {
  if (guess) {
    return (
      <div className="game-row">
        {guess.map((letter, index) => (
          <div key={index} className={`${letter.color} cell`}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="game-row">
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
      <div className="cell"></div>
    </div>
  );
}

export default Row;
