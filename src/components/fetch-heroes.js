import { useEffect, useState } from "react";
import Card from "./card";

function FetchHeroes (props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [heroList, setHeroList] = useState([])
    const [clickedHeroes, setClickedHeroes] = useState([]);

    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setHeroList(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )     
    },[])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading Heroes</div>;
    } else {
        return (
            <div className="card-container">
                {heroList.slice(0,12).map(hero => (
                    <Card key={hero.id} score={props.score} setScore={props.setScore} hero={hero}
                        clickedHeroes={clickedHeroes} setClickedHeroes={setClickedHeroes}/>
                ))}
            </div>
        )  
    }
}

export default FetchHeroes;