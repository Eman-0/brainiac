import { useEffect, useState } from "react";
import Card from "./card";
import Winner from "./winner";

function FetchHeroes (props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [heroList, setHeroList] = useState([])
    const [clickedHeroes, setClickedHeroes] = useState([]);
    const [isPlayAgain, setIsPlayAgain] = useState(false);
    const [shortenedHeroList, setShortenedHeroList] = useState([]);
    const curScore = props.curScore;
    const setCurScore = props.setCurScore;
    const setMaxScore = props.setMaxScore;

    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
        .then(res => res.json())
        .then(
            (result) => {
                // const positionInHeroArray = Math.floor(Math.random() * (500 - 12) + 12 );
                setHeroList(result);
                setIsLoaded(true);
                // setHeroList(result.slice(positionInHeroArray, positionInHeroArray + 12));
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )     
    },[])

    useEffect(() => {
        const positionInHeroArray = Math.floor(Math.random() * (500 - 12) + 12 );
        setShortenedHeroList(heroList.slice(positionInHeroArray, positionInHeroArray + 12));  
    }, [heroList, isPlayAgain])

    useEffect(() => {
        if (curScore === 12){
              Winner(setIsPlayAgain);
              setMaxScore(curScore);
        }
         
    }, [curScore])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading Heroes</div>;
    } else {
        return (
            
            <div className="card-container">
                {shortenedHeroList.sort(() => Math.random() - 0.5).map(hero => (
                    <Card key={hero.id} {...props} hero={hero}
                        clickedHeroes={clickedHeroes} setClickedHeroes={setClickedHeroes}/>
                ))}
            </div>
        )  
    }
}

export default FetchHeroes;