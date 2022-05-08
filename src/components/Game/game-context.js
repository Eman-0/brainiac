import React from "react";

const GameContext = React.createContext({
    clickedHeroes: [],
    bestScore: 0,
    currScore: 0,
    hasLost: false,
    isWinner: false,
    addClickedHero: hero => {},
    updateBestScore: () => {},
    updateCurrScore: () => {},
    resetGame: () => {},
});

export default GameContext;