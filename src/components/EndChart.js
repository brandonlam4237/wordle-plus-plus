import React from "react";
import "../scss/statChart.scss";
import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../App";

function EndChart({ guesses, isCorrect, turn }) {
  const settings = useContext(SettingsContext);
  const [winColor, setWinColor] = useState("#6aaa64");
  const max = Math.max(...guesses);
  const fracValues = guesses.map((guess) => {
    return guess / max;
  });

  useEffect(() => {
    if (settings.theme === "dark") {
      setWinColor("#538d4e");
    }
  }, [setWinColor, settings.theme]);

  return (
    <div className="statChart">
      {isCorrect && turn === 1 && (
        <div className="bar">
          <p>1</p>
          <div
            className="fill"
            style={{
              width: `${fracValues[0] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          ></div>
          <div
            className="num"
            style={{
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[0]}
          </div>
        </div>
      )}
      {turn !== 1 && (
        <div className="bar">
          <p>1</p>
          <div
            className="fill"
            style={{ width: `${fracValues[0] * 100}%` }}
          ></div>
          <div className="num">{guesses[0]}</div>
        </div>
      )}

      {isCorrect && turn === 2 && (
        <div className="bar">
          <p>2</p>
          <div
            className="fill"
            style={{
              width: `${fracValues[1] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          ></div>
          <div
            className="num"
            style={{
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[1]}
          </div>
        </div>
      )}
      {turn !== 2 && (
        <div className="bar">
          <p>2</p>
          <div
            className="fill"
            style={{ width: `${fracValues[1] * 100}%` }}
          ></div>
          <div className="num">{guesses[1]}</div>
        </div>
      )}
      {isCorrect && turn === 3 && (
        <div className="bar">
          <p>3</p>
          <div
            className="fill"
            style={{
              width: `${fracValues[2] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          ></div>
          <div
            className="num"
            style={{
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[2]}
          </div>
        </div>
      )}
      {turn !== 3 && (
        <div className="bar">
          <p>3</p>
          <div
            className="fill"
            style={{ width: `${fracValues[2] * 100}%` }}
          ></div>
          <div className="num">{guesses[2]}</div>
        </div>
      )}
      {isCorrect && turn === 4 && (
        <div className="bar">
          <p>4</p>
          <div
            className="fill"
            style={{
              width: `${fracValues[3] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          ></div>
          <div
            className="num"
            style={{
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[3]}
          </div>
        </div>
      )}
      {turn !== 4 && (
        <div className="bar">
          <p>4</p>
          <div
            className="fill"
            style={{ width: `${fracValues[3] * 100}%` }}
          ></div>
          <div className="num">{guesses[3]}</div>
        </div>
      )}
      {isCorrect && turn === 5 && (
        <div className="bar">
          <p>5</p>
          <div
            className="fill"
            style={{
              width: `${fracValues[4] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          ></div>
          <div
            className="num"
            style={{
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[4]}
          </div>
        </div>
      )}
      {turn !== 5 && (
        <div className="bar">
          <p>5</p>
          <div
            className="fill"
            style={{ width: `${fracValues[4] * 100}%` }}
          ></div>
          <div className="num">{guesses[4]}</div>
        </div>
      )}
      {isCorrect && turn === 6 && (
        <div className="bar">
          <p>6</p>
          <div
            className="fill"
            style={{
              width: `${fracValues[5] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          ></div>
          <div
            className="num"
            style={{
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[5]}
          </div>
        </div>
      )}
      {turn !== 6 && (
        <div className="bar">
          <p>6</p>
          <div
            className="fill"
            style={{ width: `${fracValues[5] * 100}%` }}
          ></div>
          <div className="num">{guesses[5]}</div>
        </div>
      )}
      {!isCorrect && turn === 6 && (
        <div className="bar">
          <p>6</p>
          <div
            className="fill"
            style={{ width: `${fracValues[5] * 100}%` }}
          ></div>
          <div className="num">{guesses[5]}</div>
        </div>
      )}
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        PLAY AGAIN
      </button>
    </div>
  );
}

export default EndChart;
