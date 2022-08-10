import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UseGameLogic = (solution, wordBank) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

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
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };
      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key];
        if (letter.color === "green") {
          newKeys[letter.key] = "green";
          return;
        }
        if (letter.color === "yellow" && currentColor !== "green") {
          newKeys[letter.key] = "yellow";
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
        console.log("repeat guess");
        return;
      }
      if (currentGuess.length !== 6) {
        console.log("word too short");
        return;
      }

      if (!wordBank.includes(currentGuess)) {
        toast.warn("Not in word list", {
          position: "bottom-right",
          autoClose: 200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
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
        console.log("repeat guess");
        return;
      }
      if (currentGuess.length !== 6) {
        console.log("word too short");
        return;
      }

      if (!wordBank.includes(currentGuess)) {
        toast.warn("Not in word list", {
          position: "bottom-right",
          autoClose: 200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
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
  };
};

export default UseGameLogic;
