import React, { useContext } from "react";
import "../../scss/helpmodal.scss";
import "../../scss/hc-helpmodal.scss";
import { SettingsContext } from "../../App";
import closeLight from "../../assets/close-light.png";
import closeDark from "../../assets/close-dark.png";

function HelpModal({ closeModal }) {
  const settings = useContext(SettingsContext);
  return (
    <div className="help">
      <div className="modal">
        <div className="container">
          <div className="header">
            <div>HOW TO PLAY</div>
            {settings.theme === "light" && (
              <img src={closeLight} onClick={closeModal} alt="close-button" />
            )}
            {settings.theme === "dark" && (
              <img src={closeDark} onClick={closeModal} alt="close-button" />
            )}
          </div>
          <div className="description">
            <p>
              Guess the <b>WORDLE</b> in 6 tries.
            </p>
            <p>
              Each guess must be a valid 6-letter word. Hit the enter button to
              submit.
            </p>
            <p>
              After each guess, the color of the tiles will change to show how
              close your guess was to the word.
            </p>
          </div>
          <div className="examples">
            <b>Examples</b>
            <div>
              <div className="style-word">
                <div id="green-letter">D</div>
                <div>R</div>
                <div>E</div>
                <div>A</div>
                <div>R</div>
                <div>Y</div>
              </div>
              <div>
                The letter <b>D</b> is in the word and in the correct spot.
              </div>
            </div>
            <div>
              <div className="style-word">
                <div>P</div>
                <div id="yellow-letter">I</div>
                <div>L</div>
                <div>L</div>
                <div>O</div>
                <div>W</div>
              </div>
              <div>
                The letter <b>I</b> is in the word but in the wrong spot.
              </div>
            </div>
            <div>
              <div className="style-word">
                <div>P</div>
                <div>L</div>
                <div>A</div>
                <div>G</div>
                <div id="grey-letter">U</div>
                <div>E</div>
              </div>
              <div className="last">
                The letter <b>U</b> is not in the word in any spot.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpModal;
