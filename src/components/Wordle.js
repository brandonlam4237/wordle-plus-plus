import React, { useEffect, useState, useContext } from "react";
import UseGameLogic from "../hooks/UseGameLogic";
import Grid from "./Grid";
import Keyboard from "./Keyboard";
import Modal from "./Modal";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SettingsContext } from "../App";

function Wordle({ solution, wordBank }) {
  const settings = useContext(SettingsContext);
  const {
    currentGuess,
    handleKeyUp,
    guesses,
    isCorrect,
    turn,
    usedKeys,
    handleScreenKey,
  } = UseGameLogic(solution, wordBank);
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

  return (
    <div className="content">
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard usedKeys={usedKeys} handleScreenKey={handleScreenKey} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
      {settings.theme === "light" && (
        <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={200}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Flip}
        />
      )}
      {settings.theme === "dark" && (
        <ToastContainer
          theme="light"
          position="bottom-right"
          autoClose={200}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Flip}
        />
      )}
    </div>
  );
}

export default Wordle;
