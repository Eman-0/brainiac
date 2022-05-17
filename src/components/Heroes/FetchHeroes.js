import { useEffect, useState, useContext } from "react";
import GameContext from "../Game/game-context";
import classes from "./FetchHeroes.module.css";
import Hero from "./Hero";
import reShuffleCards from "../../utils/game-utils";

function FetchHeroes(props) {
  const gameCtx = useContext(GameContext);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroList, setHeroList] = useState([]);
  const [shortenedHeroList, setShortenedHeroList] = useState([]);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setHeroList(result);
          setShortenedHeroList(reShuffleCards(result));
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );   
  }, []);

  useEffect(() => {
   if (gameCtx.isReShuffleCards) {
     setShortenedHeroList(reShuffleCards(heroList));
     gameCtx.setNoReShuffle();
   }
  
  }, [gameCtx.isReShuffleCards]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading Heroes...</div>;
  }

  const heroDisplayList = shortenedHeroList
    .sort(() => Math.random() - 0.5)
    .map((hero) => (
      <Hero onClick={gameCtx.addClickedHero} id={hero.id} key={hero.id} name={hero.name} images={hero.images} />
    ));
  return (
    <section className={classes["hero-display"]}>
      {heroDisplayList}
    </section>
  );
}

export default FetchHeroes;
