import React, { Component, useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keyboard from "./Keyboard";

function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    //prevent multiple keyup event listeners
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);
  return (
    <div className="content">
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} />
      <div>Solution - {solution}</div>
      <div>Current guess - {currentGuess}</div>
    </div>
  );
}

export default Wordle;
