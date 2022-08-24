import { createContext, useEffect, useState } from "react";

export const ScoreContext = createContext();

export const ScoreContextProvider = ({ children }) => {
  const [games, setGames] = useState(0);
  const [currStreak, setCurrStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [wins, setWins] = useState(0);
  const [guesses, setGuesses] = useState([0, 0, 0, 0, 0, 0]);

  // fetch stored stats on refresh
  useEffect(() => {
    const stored_games = JSON.parse(localStorage.getItem("games"));
    if (stored_games !== null) {
      setGames(stored_games);
    }
    const stored_streak = JSON.parse(localStorage.getItem("streak"));
    if (stored_streak !== null) {
      setCurrStreak(stored_streak);
    }
    const stored_maxStreak = JSON.parse(localStorage.getItem("maxStreak"));
    if (stored_maxStreak !== null) {
      setMaxStreak(stored_maxStreak);
    }
    const stored_wins = JSON.parse(localStorage.getItem("wins"));
    if (stored_wins !== null) {
      setWins(stored_wins);
    }
    const stored_guesses = JSON.parse(localStorage.getItem("guesses"));
    if (stored_guesses !== null) {
      setGuesses(stored_guesses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
    localStorage.setItem("streak", JSON.stringify(currStreak));
    localStorage.setItem("maxStreak", JSON.stringify(maxStreak));
    localStorage.setItem("wins", JSON.stringify(wins));
    localStorage.setItem("guesses", JSON.stringify(guesses));
  }, [games, currStreak, maxStreak, wins, guesses]);

  const updateStats = (win, guess) => {
    if (win) {
      setGames((prevGames) => prevGames + 1);
      setWins((prevWins) => prevWins + 1);
      setCurrStreak((prevStreak) => prevStreak + 1);
      if (currStreak >= maxStreak) {
        setMaxStreak(currStreak + 1);
      }
      setGuesses((prevGuesses) => {
        const updatedGuesses = [...prevGuesses];
        updatedGuesses[guess] = updatedGuesses[guess] + 1;
        return updatedGuesses;
      });
    }
    if (!win) {
      setGames((prevGames) => prevGames + 1);
      setCurrStreak(0);
    }
  };

  return (
    <ScoreContext.Provider
      value={{
        games,
        currStreak,
        maxStreak,
        wins,
        guesses,
        updateStats,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
