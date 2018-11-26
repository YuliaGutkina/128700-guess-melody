export const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

export const changeLevel = (game, level) => {
  return Object.assign({}, game, {
    level
  });
};

export const canContinue = (game) => game.lives - 1 > 0;

export const die = (game) => {
  if (!canContinue(game)) {
    throw new Error(`You can't continue anymore`);
  }

  const lives = game.lives - 1;

  return Object.assign({}, game, {
    lives
  });
};
