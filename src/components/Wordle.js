import React, { useEffect, useState, useContext, useRef } from "react";
import UseGameLogic from "../hooks/UseGameLogic";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import { SettingsContext } from "../App";
import "../scss/game-toast.scss";
import EndModal from "../components/modals/EndModal";
import SolutionToast from "./SolutionToast";

function Wordle({ solution, wordBank }) {
  const settings = useContext(SettingsContext);
  const hardMode = settings.hardMode;
  const toastRef = useRef(null);
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
        toastRef.current.showToast();
      }, 2000);

      setTimeout(() => {
        setShowModal(true);
      }, 3000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    if (turn > 5) {
      setTimeout(() => {
        toastRef.current.showToast();
      }, 2000);
      setTimeout(() => {
        setShowModal(true);
      }, 3000);
      window.removeEventListener("keyup", handleKeyUp);
    }

    //prevent multiple keyup event listeners
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, turn, isCorrect]);

  useEffect(() => {
    setTimeout(() => {
      setToastFlag(false);
    }, 2000);
  }, [toastFlag, setToastFlag]);

  return (
    <div className="content">
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} handleScreenKey={handleScreenKey} />
      {showModal && <EndModal isCorrect={isCorrect} turn={turn} />}
      <SolutionToast ref={toastRef} message={solution} />
      {toastFlag && <div className="game-toast">{toastMessage}</div>}
    </div>
  );
}

export default Wordle;
