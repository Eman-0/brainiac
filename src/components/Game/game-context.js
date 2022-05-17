import React from "react";

const GameContext = React.createContext({
    clickedHeroes: [],
    currScore: 0,
    isReShuffleCards: false,
    addClickedHero: (id) => {},
    setNoReShuffle: () => {},
    newGame: () => {},
    resetGame: () => {},
});

export default GameContext;