import { Fragment } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import GameContext from "../Game/game-context";
import classes from "./Header.module.css";
import NewGameButton from "./NewGameButton";

const Header = (props) => {
  const gameCtx = useContext(GameContext);
  const [bestScore, setBestScore] = useState(-1);
  let currScore = gameCtx.currScore;

  useEffect(() => {
    if (currScore > bestScore) {
      setBestScore(bestScore + 1);
    }

    if (currScore / 12 === 0) {
        console.log('YOuve won');
    } else {
        console.log('Keep going');
    }
  }, [currScore]);

  


  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Eman's Card Game</h1>
        <NewGameButton onClick={gameCtx.newGame}></NewGameButton>
      </header>
      <div className={classes.scoreBoard}>
        <p>Best Score: {bestScore}</p>
        <p>Current Score: {gameCtx.currScore}</p>
      </div>
    </Fragment>
  );
};

export default Header;
