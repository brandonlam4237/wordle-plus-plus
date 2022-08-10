import React from "react";

function Row({ guess, currentGuess }) {
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

  if (currentGuess) {
    let letters = currentGuess.split("");
    //console.log(letters);
    return (
      <div className="game-row current-row">
        {letters.map((letter, i) => (
          <div key={i} className="cell temp">
            {letter}
          </div>
        ))}
        {[...Array(6 - letters.length)].map((blank, i) => (
          <div key={i} className="cell"></div>
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
