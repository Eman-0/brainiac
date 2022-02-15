function restartGame (setClickedHeroes, setScore) {
    setClickedHeroes([]);
    setScore(0);
}

function PlayRound ( { score, setScore, clickedHeroes, setClickedHeroes, hero }) {
    if (clickedHeroes.includes(hero.name)){
        restartGame(setClickedHeroes, setScore);
    } else {
        setClickedHeroes((prevState) => [...prevState, hero.name]);
        setScore(score + 1);
    }  
}

export default PlayRound;