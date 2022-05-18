import { Fragment } from "react";
import classes from "./NewGameButton.module.scss";

const NewGameButton = props => {
    return (
        <Fragment>
            <button className={classes["new-game"]} onClick={props.onClick} >New Game</button>
        </Fragment>
    );
}

export default NewGameButton;