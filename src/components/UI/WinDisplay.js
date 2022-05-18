import { Fragment, useState } from "react";
import Modal from "./Modal";
import NewGameButton from "../Layout/NewGameButton";
import classes from "./WinDisplay.module.scss";
import SendScoreButton from "./SendScoreButton";
import SendScore from "../Game/SendScore";

const WinDisplay = (props) => {
  const [showScoreSubmit, setScoreSubmit] = useState(false);

  const sendScoreHandler = async (userData) => {
    await fetch("https://di9jfw8rpd.execute-api.us-east-2.amazonaws.com/scores", {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    setScoreSubmit(false);
  }

  const sendScoreCancelHandler = () => {
    setScoreSubmit(false);
  }

  return (
    <Fragment>
      <Modal onClose={props.onClick}>
        <h3 className={classes["you-won"]}>You Won!</h3>
        <p className={classes["new-game"]}> Press New Game for a chance at a higher score</p>
        <div className={classes["game-buttons-container"]}>
          <NewGameButton onClick={props.onClick}></NewGameButton>
          <SendScoreButton onClick={() => {setScoreSubmit(true)}}/>
          {showScoreSubmit && <SendScore bestScore={props.bestScore} onCancel={sendScoreCancelHandler} onSubmit={sendScoreHandler} />}
        </div>
        
      </Modal>
    </Fragment>
  );
};

export default WinDisplay;
