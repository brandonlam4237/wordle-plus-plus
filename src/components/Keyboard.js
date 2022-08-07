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
      <div className="keys r1">
        {letters &&
          letters.slice(0, 10).map((letter) => {
            const color = usedKeys[letter.key];
            return (
              <div key={letter.key} className={`${color} key`}>
                {letter.key}
              </div>
            );
          })}
      </div>
      <div className="keys r2">
        {letters &&
          letters.slice(10, 19).map((letter) => {
            const color = usedKeys[letter.key];
            return (
              <div key={letter.key} className={`${color} key`}>
                {letter.key}
              </div>
            );
          })}
      </div>
      <div className="keys r3">
        {letters &&
          letters.slice(19, 28).map((letter) => {
            const color = usedKeys[letter.key];
            if (letter.key === "enter" || letter.key === "del") {
              console.log("enter or del");
              return (
                <div key={letter.key} className={`${color} key util`}>
                  {letter.key}
                </div>
              );
            }
            return (
              <div key={letter.key} className={`${color} key`}>
                {letter.key}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Keyboard;
