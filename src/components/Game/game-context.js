import React from "react";

const GameContext = React.createContext({
    clickedHeroes: [],
    currScore: 0,
    isNewCards: true,
    addClickedHero: (id) => {},
    newGame: () => {},
    resetGame: () => {},
});

export default GameContext;