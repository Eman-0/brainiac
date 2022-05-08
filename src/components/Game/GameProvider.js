import { useReducer } from "react";
import GameContext from "./game-context";

const defaultGameState = {
  clickedHeroes: [],
  currScore: 0,
  isWinner: false,
  hasLost: false,
};

const gameReducer = (state, action) => {
  if (action.type === "ADD_CLICKED_HERO") {
    const existingHero = state.clickedHeroes.findIndex(
      (hero) => hero.id === action.hero.id
    );

    const isHeroClicked = state.clickedHeroes[existingHero];

    let updatedClickedHeroes;

    if (isHeroClicked) {
      state.hasLost = true;
      return defaultGameState;
    } else {
      updatedClickedHeroes = state.clickedHeroes.concat(action.hero);
    }

    return {
      clickedHeroes: updatedClickedHeroes,
    };
  }

  if (action.type === "UPDATE_BEST_SCORE") {
    state.bestScore += 1;
  }

  if (action.type === "UPDATE_CURR_SCORE") {
    state.currScore += 1;
    if (state.currScore / 12 === 0) {
      state.isWinner = true;
    }
  }

  if (action.type === "RESET_GAME") {
    return defaultGameState;
  }
};

const GameProvider = (props) => {
  const [gameState, dispatchGameAction] = useReducer(
    gameReducer,
    defaultGameState
  );

  const addClickedHero = (hero) => {
    dispatchGameAction({ type: "ADD_CLICKED_HERO" }, hero);
  };

  const updateBestScore = (score) => {
    dispatchGameAction({ type: "UPDATE_BEST_SCORE" });
  };

  const updateCurrScore = () => {
    dispatchGameAction({ type: "UPDATE_CURR_SCORE" });
  };

  const resetGame = () => {
    dispatchGameAction({ type: "RESET_GAME" });
  };

  const gameContext = {
    clickedHeroes: gameState.clickedHeroes,
    bestScore: 0,
    currScore: gameState.currScore,
    hasLost: gameState.hasLost,
    isWinner: gameState.isWinner,
    addClickedHero,
    updateBestScore,
    updateCurrScore,
    resetGame,
  };

  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
