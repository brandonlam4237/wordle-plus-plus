import { useState } from "react";
import { useScoreContext } from "./useScoreContext";

const UseGameLogic = (solution, wordBank, hardMode) => {
  const { updateStats } = useScoreContext();

  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});
  const [hintKeys, setHintKeys] = useState([]);
  const [toastFlag, setToastFlag] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const arraysEqual = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "grey" };
    });
    formattedGuess.forEach((i, j) => {
      if (solutionArray[j] === i.key) {
        formattedGuess[j].color = "green";
        solutionArray[j] = null;
      }
    });
    formattedGuess.forEach((i, j) => {
      if (solutionArray.includes(i.key) && i.color !== "green") {
        formattedGuess[j].color = "yellow";
        solutionArray[solutionArray.indexOf(i.key)] = null;
      }
    });
    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
      updateStats(true, turn);
    }
    if (turn === 5 && !isCorrect) {
      updateStats(false, turn);
    }
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });

    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };
      formattedGuess.forEach((letter, index) => {
        const currentColor = newKeys[letter.key];
        if (letter.color === "green") {
          newKeys[letter.key] = "green";
          if (hardMode) {
            setHintKeys((prevHintKeys) => {
              let newHintKeys = [...prevHintKeys];
              let foundFlag = false;
              for (let i = 0; i < newHintKeys.length; i++) {
                let currentHint = [letter.key, index, letter.color];
                if (arraysEqual(newHintKeys[i], currentHint)) {
                  foundFlag = true;
                }
              }
              if (!foundFlag) {
                newHintKeys.push([letter.key, index, letter.color]);
              }

              return newHintKeys;
            });
          }
          return;
        }
        if (letter.color === "yellow" && currentColor !== "green") {
          newKeys[letter.key] = "yellow";
          if (hardMode) {
            setHintKeys((prevHintKeys) => {
              let newHintKeys = [...prevHintKeys];
              let foundFlag = false;
              for (let i = 0; i < newHintKeys.length; i++) {
                let currentHint = [letter.key, index, letter.color];
                if (arraysEqual(newHintKeys[i], currentHint)) {
                  foundFlag = true;
                }
              }
              if (!foundFlag) {
                newHintKeys.push([letter.key, index, letter.color]);
              }

              return newHintKeys;
            });
          }
          return;
        }

        if (
          letter.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          newKeys[letter.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      if (turn > 6) {
        console.log("no more guesses");
        return;
      }
      if (history.includes(currentGuess)) {
        setToastFlag(true);
        setToastMessage("Word already guessed");
        return;
      }
      if (currentGuess.length !== 6) {
        setToastFlag(true);
        setToastMessage("Not enough letters");
        return;
      }

      if (!wordBank.includes(currentGuess)) {
        setToastFlag(true);
        setToastMessage("Not in word list");
        return;
      }

      if (hardMode) {
        const guessArray = [...currentGuess];
        let flag = false;
        hintKeys.forEach((value) => {
          // value[0] = letter
          // value[1] = index
          // value[2] = color
          // the checks will differ by the color
          // green => the guess word must have that letter at that index
          // yellow => the guess word must include the letter index doesnt matter

          // checks for yellow hint requirement
          if (!guessArray.includes(value[0])) {
            flag = true;
            setToastFlag(true);
            setToastMessage(`Guess must contain ${value[0].toUpperCase()}`);
          }
        });
        // check for green hints requirement
        const filteredHints = hintKeys.filter((value) => {
          return value[2] === "green";
        });

        // array of [letter, index, "green"] - now check that this pairing is found in the guess
        filteredHints.forEach((value) => {
          if (guessArray[value[1]] !== value[0]) {
            flag = true;
            setToastFlag(true);
            if (value[1] + 1 === 1) {
              setToastMessage(`1st letter must be ${value[0].toUpperCase()}`);
            } else if (value[1] + 1 === 2) {
              setToastMessage(`2nd letter must be ${value[0].toUpperCase()}`);
            } else if (value[1] + 1 === 3) {
              setToastMessage(`3rd letter must be ${value[0].toUpperCase()}`);
            } else if (value[1] + 1 === 4) {
              setToastMessage(`4th letter must be ${value[0].toUpperCase()}`);
            } else if (value[1] + 1 === 5) {
              setToastMessage(`5th letter must be ${value[0].toUpperCase()}`);
            } else if (value[1] + 1 === 6) {
              setToastMessage(`6th letter must be ${value[0].toUpperCase()}`);
            }
          }
        });

        if (flag) {
          return;
        }
      }

      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 6) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  const handleScreenKey = (key) => {
    //console.log("key pressed:", key);
    if (key === "enter") {
      if (turn > 6) {
        console.log("no more guesses");
        return;
      }
      if (history.includes(currentGuess)) {
        setToastFlag(true);
        setToastMessage("Word already guessed");
        return;
      }
      if (currentGuess.length !== 6) {
        setToastFlag(true);
        setToastMessage("Not enough letters");
        return;
      }

      if (!wordBank.includes(currentGuess)) {
        setToastFlag(true);
        setToastMessage("Not in word list");
        return;
      }

      if (hardMode) {
        const guessArray = [...currentGuess];
        let flag = false;
        hintKeys.forEach((value) => {
          // value[0] = letter
          // value[1] = index
          // value[2] = color
          // the checks will differ by the color
          // green => the guess word must have that letter at that index
          // yellow => the guess word must include the letter index doesnt matter

          // checks for yellow hint requirement
          if (!guessArray.includes(value[0])) {
            flag = true;
            setToastFlag(true);
            setToastMessage(`Guess must contain ${value[0].toUpperCase()}`);
          }
        });
        // check for green hints requirement
        const filteredHints = hintKeys.filter((value) => {
          return value[2] === "green";
        });

        // array of [letter, index] - now check that this pairing is found in the guess
        filteredHints.forEach((value) => {
          if (guessArray[value[1]] !== value[0]) {
            flag = true;
            setToastFlag(true);
            if (value[1] + 1 === 1) {
              setToastMessage(`1st letter must be ${value[0].toUpperCase()}`);
            } else if (value[1] + 1 === 2) {
              setToastMessage(`2nd letter must be ${value[0].toUpperCase()}`);
            } else if (value[1] + 1 === 3) {
              setToastMessage(`3rd letter must be ${value[0].toUpperCase()}`);
            } else if (value[1] + 1 === 4) {
              setToastMessage(`4th letter must be ${value[0].toUpperCase()}`);
            } else if (value[1] + 1 === 5) {
              setToastMessage(`5th letter must be ${value[0].toUpperCase()}`);
            } else if (value[1] + 1 === 6) {
              setToastMessage(`6th letter must be ${value[0].toUpperCase()}`);
            }
          }
        });

        if (flag) {
          return;
        }
      }

      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }
    if (key === "del") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 6) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyUp,
    usedKeys,
    handleScreenKey,
    toastFlag,
    setToastFlag,
    toastMessage,
  };
};

export default UseGameLogic;
