function restartGame (setClickedHeroes, setCurScore, setMaxScore, curScore) {
    setClickedHeroes([]);
    setCurScore(0);
    setMaxScore(curScore);
}

function PlayRound ( { curScore, setCurScore, maxScore, setMaxScore, clickedHeroes, setClickedHeroes, hero }) {
    if (clickedHeroes.includes(hero.name)) {
        restartGame(setClickedHeroes, setCurScore, setMaxScore, curScore);
    } else {
        setClickedHeroes((prevState) => [...prevState, hero.name]);
        setCurScore(curScore + 1);
    }  
}

export default PlayRound;