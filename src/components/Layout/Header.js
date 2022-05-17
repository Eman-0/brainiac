import { Fragment } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import GameContext from "../Game/game-context";
import WinDisplay from "../UI/WinDisplay";
import classes from "./Header.module.css";

const Header = (props) => {
  const gameCtx = useContext(GameContext);
  const [bestScore, setBestScore] = useState(-1);
  const [displayWinner, setDisplayWinner] = useState(false);

  let currScore = gameCtx.currScore;

  useEffect(() => {
    if (currScore > bestScore) {
      setBestScore(bestScore + 1);
    }

    if (currScore > 0 && currScore % 6 === 0) {
      setDisplayWinner(true);
    }
  }, [currScore]);

  const displayWinnerCloseHandler = () => {
    setDisplayWinner(false);
    gameCtx.newGame();
  };

  return (
    <Fragment>
      {displayWinner && <WinDisplay onClick={displayWinnerCloseHandler} />}
      <header className={classes.header}>
        <h1>Eman's Card Game</h1>
      </header>
      <div className={classes.scoreBoard}>
        <p>Best Score: {bestScore}</p>
        <p>Current Score: {gameCtx.currScore}</p>
      </div>
    </Fragment>
  );
};

export default Header;
