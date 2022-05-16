import { useEffect, useState, useContext } from "react";
import GameContext from "../Game/game-context";
import classes from "./FetchHeroes.module.css";
import Hero from "./Hero";


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
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    const positionInHeroArray = Math.floor(Math.random() * (500 - 12) + 12);
    setShortenedHeroList(
      heroList.slice(positionInHeroArray, positionInHeroArray + 12)
    );
  }, [heroList]);

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
