import classes from "./GameSummary.module.scss";

const GameSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>
                Objective: get all twelve cards without pressing one twice.
            </h2>
        </section>
    );
}

export default GameSummary;