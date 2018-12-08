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

export const stillAlive = (game) => game.lives - 1 > 0;

export const die = (game) => {
  if (!stillAlive(game)) {
    throw new Error(`You can't continue anymore`);
  }

  const lives = game.lives - 1;

  return Object.assign({}, game, {
    lives
  });
};

export const haveTime = (game) => game.time <= 300;

export const tick = (game) => {
  if (!haveTime(game)) {
    throw new Error(`Time is over`);
  }

  const time = game.time + 1;

  return Object.assign({}, game, {
    time
  });
};

