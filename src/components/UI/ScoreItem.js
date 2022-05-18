import classes from "./Score.module.scss";

const ScoreItem = (props) => {
  return (
    <li className={classes["score-list"]}>
      <div>
        <p>{props.name}</p>
        <p>{props.score}</p>
      </div>
    </li>
  );
};

export default ScoreItem;
