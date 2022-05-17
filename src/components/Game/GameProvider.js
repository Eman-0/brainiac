import { useReducer } from "react";
import GameContext from "./game-context";

const defaultGameState = {
  clickedHeroes: [],
  currScore: 0,
  isReShuffleCards: false,
};

const gameReducer = (state, action) => {
  if (action.type === "ADD_CLICKED_HERO") {
    const existingHero = state.clickedHeroes.findIndex(
      (id) => id === action.id
    );

    const isHeroClicked = state.clickedHeroes[existingHero];
    let updatedClickedHeroes;
    let updatedCurrScore;

    if (isHeroClicked) {
      state.hasLost = true;
      return defaultGameState;
    } else {
      updatedClickedHeroes = state.clickedHeroes.concat(action.id);
      updatedCurrScore = state.currScore + 1;
    }

    return {
      clickedHeroes: updatedClickedHeroes,
      currScore: updatedCurrScore,
    };
  }

  if (action.type === "SET_NO_RE_SHUFFLE") {
    return {
      ...state,
      isReShuffleCards: false,
    }
  }

  if (action.type === "RESET_GAME") {
    return defaultGameState;
  }

  if (action.type === "NEW_GAME") {
    return {
      ...state,
      isReShuffleCards: true,
    };
  }
};

const GameProvider = (props) => {
  const [gameState, dispatchGameAction] = useReducer(
    gameReducer,
    defaultGameState
  );

  const addClickedHero = (id) => {
    dispatchGameAction({ type: "ADD_CLICKED_HERO", id });
  };

  const setNoReShuffle = () => {
    dispatchGameAction({ type: "SET_NO_RE_SHUFFLE"});
  }

  const newGame = () => {
    dispatchGameAction({ type: "NEW_GAME" });
  };

  const resetGame = () => {
    dispatchGameAction({ type: "RESET_GAME" });
  };

  const gameContext = {
    clickedHeroes: gameState.clickedHeroes,
    currScore: gameState.currScore,
    isReShuffleCards: gameState.isReShuffleCards,
    addClickedHero,
    setNoReShuffle,
    newGame,
    resetGame,
  };

  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
