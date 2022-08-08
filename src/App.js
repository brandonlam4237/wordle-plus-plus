import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import "./scss/game.scss";

function App() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomWord = json[Math.floor(Math.random() * json.length)].word;
        console.log("solution:", randomWord);
        setSolution(randomWord);
      });
  }, [setSolution]);

  return (
    <div className="app">
      <h1>Wordle++</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
