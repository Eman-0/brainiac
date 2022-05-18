import { Fragment } from "react";
import classes from "./ShowBestScoresButton.module.scss";

const ShowBestScoresButton = props => {
    return (
        <Fragment>
            <button className={classes["show-scores"]} onClick={props.onClick} >Show Scores</button>
        </Fragment>
    );
}

export default ShowBestScoresButton;