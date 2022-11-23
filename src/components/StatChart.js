import React from "react";
import "../scss/statChart.scss";

function StatChart({ guesses }) {
  const max = Math.max(...guesses);
  const fracValues = guesses.map((guess) => {
    return guess / max;
  });

  return (
    <div className="statChart">
      <div className="bar">
        <p>1</p>
        <div
          className="fill"
          style={{ width: `${fracValues[0] * 100}%` }}
        ></div>
        <div className="num">{guesses[0]}</div>
      </div>
      <div className="bar">
        <p>2</p>
        <div className="fill" style={{ width: `${fracValues[1] * 100}%` }}>
          <div className="num">{guesses[1]}</div>
        </div>
      </div>
      <div className="bar">
        <p>3</p>
        <div
          className="fill"
          style={{ width: `${fracValues[2] * 100}%` }}
        ></div>
        <div className="num">{guesses[2]}</div>
      </div>
      <div className="bar">
        <p>4</p>
        <div
          className="fill"
          style={{ width: `${fracValues[3] * 100}%` }}
        ></div>
        <div className="num">{guesses[3]}</div>
      </div>
      <div className="bar">
        <p>5</p>
        <div
          className="fill"
          style={{ width: `${fracValues[4] * 100}%` }}
        ></div>
        <div className="num">{guesses[4]}</div>
      </div>
      <div className="bar">
        <p>6</p>
        <div
          className="fill"
          style={{ width: `${fracValues[5] * 100}%` }}
        ></div>
        <div className="num">{guesses[5]}</div>
      </div>
    </div>
  );
}

export default StatChart;
