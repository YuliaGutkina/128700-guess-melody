const changeLevelScreen = (newLevel) => {
  const gameScreen = document.querySelector(`section.game`);
  const gameLevel = gameScreen.querySelector(`.game__screen`);
  gameScreen.replaceChild(newLevel, gameLevel);
};

export default changeLevelScreen;
