import React, { useEffect, useState } from "react";

function Keyboard({ usedKeys }) {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);
  return (
    <div className="keyboard">
      {letters &&
        letters.map((letter) => {
          const color = usedKeys[letter.key];
          return (
            <div key={letter.key} className={`${color} key`}>
              {letter.key}
            </div>
          );
        })}
    </div>
  );
}

export default Keyboard;
