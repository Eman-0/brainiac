const reShuffleCards = (heroList) => {
  const positionInHeroArray = Math.floor(Math.random() * (500 - 12) + 12);

  return heroList.slice(positionInHeroArray, positionInHeroArray + 12);
};

export default reShuffleCards;
