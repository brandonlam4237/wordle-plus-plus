import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import "./scss/game.scss";

function App() {
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
    <div className="app">
      <h1>Wordle++</h1>
      {solution && <Wordle solution={solution} wordBank={wordBank} />}
    </div>
  );
}

export default App;
