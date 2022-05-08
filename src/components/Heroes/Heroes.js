import { Fragment } from "react";
import FetchHeroes from "./FetchHeroes";
import GameSummary from "../Game/GameSummary";

const Heroes = () => {
    return (
        <Fragment>
            <GameSummary />
            <FetchHeroes />
        </Fragment>
    );
};

export default Heroes;