import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import "./scss/game.scss";
import Navbar from "./components/Navbar";
import { createContext } from "react";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const [solution, setSolution] = useState(null);
  const [wordBank, setWordBank] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomWord = json[Math.floor(Math.random() * json.length)].word;
        console.log("solution:", randomWord);
        setSolution(randomWord);
      });
  }, [setSolution]);

  useEffect(() => {
    fetch("http://localhost:3001/wordBank")
      .then((res) => res.json())
      .then((json) => {
        let array = [];
        for (var i in json) {
          array.push(json[i].word);
        }
        setWordBank(array);
      });
  }, [setWordBank]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="app">
          <Navbar />
          {solution && <Wordle solution={solution} wordBank={wordBank} />}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
