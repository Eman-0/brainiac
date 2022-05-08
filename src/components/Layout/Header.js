import { Fragment } from "react";
import { useContext } from "react";
import GameContext from "../Game/game-context";
import classes from "./Header.module.css";
import NewGameButton from "./NewGameButton";

const Header = (props) => {
    const gameCtx = useContext(GameContext);
    
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Eman's Card Game</h1>
                <NewGameButton onClick={props.playAgain}></NewGameButton>
            </header>
            <div className={classes.scoreBoard}>
                <p>Best Score: {gameCtx.bestScore}</p>
                <p>Current Score: {gameCtx.currScore}</p>
            </div>
        </Fragment>
    );
}

export default Header;