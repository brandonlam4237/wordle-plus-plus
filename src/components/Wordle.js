import React, { Component, useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

function Wordle({ solution }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn } =
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
      <div>Solution - {solution}</div>
      <div>Current guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
}

export default Wordle;
