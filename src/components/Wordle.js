import React, { useEffect, useState, useContext } from "react";
import UseGameLogic from "../hooks/UseGameLogic";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import Modal from "./Modal";
import { SettingsContext } from "../App";
import "../scss/game-toast.scss";
import { useScoreContext } from "../hooks/useScoreContext";

function Wordle({ solution, wordBank }) {
  const settings = useContext(SettingsContext);
  const hardMode = settings.hardMode;
  const {
    currentGuess,
    handleKeyUp,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    handleScreenKey,
    toastFlag,
    setToastFlag,
    toastMessage,
  } = UseGameLogic(solution, wordBank, hardMode);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 3000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true);
      }, 3000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    //prevent multiple keyup event listeners
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  useEffect(() => {
    setTimeout(() => {
      setToastFlag(false);
    }, 2000);
  }, [toastFlag, setToastFlag]);

  return (
    <div className="content">
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} handleScreenKey={handleScreenKey} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
      {toastFlag && <div className="game-toast">{toastMessage}</div>}
    </div>
  );
}

export default Wordle;
