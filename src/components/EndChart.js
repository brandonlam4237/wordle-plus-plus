import "../scss/statChart.scss";
import { useContext, useEffect } from "react";
import { SettingsContext } from "../App";

function EndChart({ guesses, isCorrect, turn }) {
  const settings = useContext(SettingsContext);
  let winColor = "#6aaa64";
  const max = Math.max(...guesses);
  const fracValues = guesses.map((guess) => {
    if (guess === 0) {
      return 0.065;
    }
    return guess / max;
  });

  useEffect(() => {
    if (settings.theme === "dark") {
      winColor = "#538d4e";
    }
  });

  return (
    <div className="statChart">
      <div className="bar">
        <p>1</p>
        {isCorrect && turn === 1 && (
          <div
            style={{
              width: `${fracValues[0] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[0]}
          </div>
        )}
        {turn !== 1 && (
          <div
            style={{
              width: `${fracValues[0] * 100}%`,
            }}
          >
            {guesses[0]}
          </div>
        )}
      </div>
      <div className="bar">
        <p>2</p>
        {isCorrect && turn === 2 && (
          <div
            style={{
              width: `${fracValues[1] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[1]}
          </div>
        )}
        {turn !== 2 && (
          <div
            style={{
              width: `${fracValues[1] * 100}%`,
            }}
          >
            {guesses[1]}
          </div>
        )}
      </div>
      <div className="bar">
        <p>3</p>
        {isCorrect && turn === 3 && (
          <div
            style={{
              width: `${fracValues[2] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[2]}
          </div>
        )}
        {turn !== 3 && (
          <div
            style={{
              width: `${fracValues[2] * 100}%`,
            }}
          >
            {guesses[2]}
          </div>
        )}
      </div>
      <div className="bar">
        <p>4</p>
        {isCorrect && turn === 4 && (
          <div
            style={{
              width: `${fracValues[3] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[3]}
          </div>
        )}
        {turn !== 4 && (
          <div
            style={{
              width: `${fracValues[3] * 100}%`,
            }}
          >
            {guesses[3]}
          </div>
        )}
      </div>
      <div className="bar">
        <p>5</p>
        {isCorrect && turn === 5 && (
          <div
            style={{
              width: `${fracValues[4] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[4]}
          </div>
        )}
        {turn !== 5 && (
          <div
            style={{
              width: `${fracValues[4] * 100}%`,
            }}
          >
            {guesses[4]}
          </div>
        )}
      </div>
      <div className="bar">
        <p>6</p>
        {isCorrect && turn === 6 && (
          <div
            style={{
              width: `${fracValues[5] * 100}%`,
              backgroundColor: `${winColor}`,
            }}
          >
            {guesses[5]}
          </div>
        )}
        {turn !== 6 && (
          <div
            style={{
              width: `${fracValues[5] * 100}%`,
            }}
          >
            {guesses[5]}
          </div>
        )}
        {!isCorrect && turn === 6 && (
          <div
            style={{
              width: `${fracValues[5] * 100}%`,
            }}
          >
            {guesses[5]}
          </div>
        )}
      </div>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        PLAY
      </button>
    </div>
  );
}

export default EndChart;
