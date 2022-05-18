import { Fragment } from "react";
import classes from "./SendScoreButton.module.scss";

const SendScoreButton = props => {
    return (
        <Fragment>
            <button className={classes["send-score"]} onClick={props.onClick} >Send Score</button>
        </Fragment>
    );
}

export default SendScoreButton;