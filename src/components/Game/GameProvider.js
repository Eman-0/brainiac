import { useReducer } from "react";
import GameContext from "./game-context";

const defaultGameState = {
  clickedHeroes: [],
  currScore: 0,
  isNewCards: false,
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

  if (action.type === "RESET_GAME") {
    return defaultGameState;
  }

  if (action.type === "NEW_GAME") {
    return {
      ...state,
      isNewCards: true,
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

  const newGame = () => {
    dispatchGameAction({ type: "NEW_GAME" });
  };

  const resetGame = () => {
    dispatchGameAction({ type: "RESET_GAME" });
  };

  const gameContext = {
    clickedHeroes: gameState.clickedHeroes,
    currScore: gameState.currScore,
    isNewCards: gameState.isNewCards,
    addClickedHero,
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
