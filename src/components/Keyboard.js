import React, { useEffect, useState, useContext } from "react";
import backspace from "../assets/backspace-icon.png";
import { SettingsContext } from "../App";
import backspaceDark from "../assets/backspace-dark.png";

function Keyboard({ usedKeys, handleScreenKey }) {
  const [letters, setLetters] = useState(null);
  const settings = useContext(SettingsContext);

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
              <div
                key={letter.key}
                className={`${color} key`}
                onClick={() => handleScreenKey(letter.key)}
              >
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
              <div
                key={letter.key}
                className={`${color} key`}
                onClick={() => handleScreenKey(letter.key)}
              >
                {letter.key}
              </div>
            );
          })}
      </div>
      <div className="keys r3">
        {letters &&
          letters.slice(19, 28).map((letter) => {
            const color = usedKeys[letter.key];
            if (letter.key === "enter") {
              return (
                <div
                  key={letter.key}
                  className={`${color} key util`}
                  onClick={() => handleScreenKey(letter.key)}
                >
                  {letter.key}
                </div>
              );
            }
            if (letter.key === "del") {
              return (
                <div
                  key={letter.key}
                  className={`${color} key util`}
                  onClick={() => handleScreenKey(letter.key)}
                >
                  {settings.theme === "light" && (
                    <img
                      src={backspace}
                      className="backspace-icon"
                      alt="delete-icon"
                    />
                  )}
                  {settings.theme === "dark" && (
                    <img
                      src={backspaceDark}
                      className="backspace-icon"
                      alt="delete-icon"
                    />
                  )}
                </div>
              );
            }
            return (
              <div
                key={letter.key}
                className={`${color} key`}
                onClick={() => handleScreenKey(letter.key)}
              >
                {letter.key}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Keyboard;
