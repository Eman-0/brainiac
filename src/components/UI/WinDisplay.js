import { Fragment } from "react";
import Modal from "./Modal";
import NewGameButton from "../Layout/NewGameButton";
import { useContext } from "react";
import GameContext from "../Game/game-context";

const WinDisplay = (props) => {
    const gameCtx = useContext(GameContext);

    return (
        <Fragment>
          <Modal onClose={props.onClick}>
              <h3>You Won!</h3>
            <NewGameButton onClick={gameCtx.newGame}></NewGameButton>
          </Modal>
        </Fragment>
      );
}

export default WinDisplay;