import React, { useContext } from "react";
import backspace from "../assets/backspace-icon.png";
import { SettingsContext } from "../App";
import backspaceDark from "../assets/backspace-dark.png";

function Keyboard({ usedKeys, handleScreenKey }) {
  const letters = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "enter",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "del",
  ];
  const settings = useContext(SettingsContext);

  return (
    <div className="keyboard">
      <div className="keys r1">
        {letters &&
          letters.slice(0, 10).map((i) => {
            const color = usedKeys[i];
            return (
              <div
                key={i}
                className={`${color} key`}
                onClick={() => handleScreenKey(i)}
              >
                {i}
              </div>
            );
          })}
      </div>
      <div className="keys r2">
        {letters &&
          letters.slice(10, 19).map((i) => {
            const color = usedKeys[i];
            return (
              <div
                key={i}
                className={`${color} key`}
                onClick={() => handleScreenKey(i)}
              >
                {i}
              </div>
            );
          })}
      </div>
      <div className="keys r3">
        {letters &&
          letters.slice(19, 28).map((i) => {
            const color = usedKeys[i];
            if (i === "enter") {
              return (
                <div
                  key={i}
                  className={`${color} key util`}
                  onClick={() => handleScreenKey(i)}
                >
                  {i}
                </div>
              );
            }
            if (i === "del") {
              return (
                <div
                  key={i}
                  className={`${color} key util`}
                  onClick={() => handleScreenKey(i)}
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
                key={i}
                className={`${color} key`}
                onClick={() => handleScreenKey(i)}
              >
                {i}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Keyboard;
