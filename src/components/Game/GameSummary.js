import classes from "./GameSummary.module.css";

const GameSummary = () => {
    return (
        <section className={classes.summary}>
            <p>
                Try to get all twelve cards without pressing one twice.
            </p>
        </section>
    );
}

export default GameSummary;