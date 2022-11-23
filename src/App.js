import React from "react";
import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import "./scss/game.scss";
import "./scss/hc-game.scss";
import Navbar from "./components/Navbar";
import { createContext } from "react";
import JSONwordBank from "./json/wordBank.json";
import JSONsolutions from "./json/solutions.json";

export const SettingsContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [hardMode, setHardMode] = useState(false);
  const [contrastMode, setContrastMode] = useState("normal");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const toggleHardMode = () => {
    setHardMode((curr) => !curr);
  };
  const toggleContrastMode = () => {
    setContrastMode((curr) => (curr === "normal" ? "high" : "normal"));
  };
  useEffect(() => {
    const theme_mode = window.localStorage.getItem("THEME_MODE");
    if (theme_mode !== null) {
      setTheme(JSON.parse(theme_mode));
    }
    const contrast_mode = window.localStorage.getItem("CONTRAST_MODE");
    if (contrast_mode !== null) {
      setContrastMode(JSON.parse(contrast_mode));
    }
    const hard_mode = window.localStorage.getItem("HARD_MODE");
    if (hard_mode !== null) {
      setHardMode(JSON.parse(hard_mode));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("THEME_MODE", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("CONTRAST_MODE", JSON.stringify(contrastMode));
  }, [contrastMode]);

  useEffect(() => {
    window.localStorage.setItem("HARD_MODE", JSON.stringify(hardMode));
  }, [hardMode]);

  const [solution, setSolution] = useState(null);
  const [wordBank, setWordBank] = useState([]);

  const [words] = useState(JSONwordBank);
  const [solutions] = useState(JSONsolutions);

  useEffect(() => {
    /*fetch("https://wordle-data-db.herokuapp.com/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomWord = json[Math.floor(Math.random() * json.length)].word;
        setSolution(randomWord);
      }); */
    const randomWord = solutions[Math.floor(Math.random() * solutions.length)];
    setSolution(randomWord.word);
  }, [setSolution, solutions]);

  useEffect(() => {
    /*
    fetch("https://wordle-data-db.herokuapp.com/wordBank")
      .then((res) => res.json())
      .then((json) => {
        let array = [];
        for (var i in json) {
          array.push(json[i].word);
        }
        setWordBank(array);
      }); */
    let array = [];
    for (let i in words) {
      array.push(words[i].word);
    }
    setWordBank(array);
  }, [setWordBank, words]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        toggleTheme,
        hardMode,
        toggleHardMode,
        contrastMode,
        toggleContrastMode,
      }}
    >
      <div id={contrastMode}>
        <div id={theme}>
          <div className="app">
            <Navbar />
            {solution && <Wordle solution={solution} wordBank={wordBank} />}
          </div>
        </div>
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
