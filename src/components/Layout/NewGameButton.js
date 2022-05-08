import { Fragment } from "react";
import classes from "./NewGameButton.module.css";

const NewGameButton = props => {
    return (
        <Fragment>
            <button className={classes.newGameButton}>New Game</button>
        </Fragment>
    );
}

export default NewGameButton;