import classes from "./ScoreItem.module.scss";

const ScoreItem = (props) => {
  return (
    <li className={classes["score-list"]}>
      <div className={classes["score-element"]}>
        <span>{props.name}</span>
        <span>{props.score}</span>
      </div>
    </li>
  );
};

export default ScoreItem;
