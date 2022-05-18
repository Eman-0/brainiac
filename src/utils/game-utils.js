const reShuffleCards = (heroList) => {
  const positionInHeroArray = Math.floor(Math.random() * (500 - 12) + 12);

  return heroList.slice(positionInHeroArray, positionInHeroArray + 12);
};

const isEmpty = (value) => {
  return value.trim().length === 0;
};

export { reShuffleCards, isEmpty };
