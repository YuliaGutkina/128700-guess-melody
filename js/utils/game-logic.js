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

export const die = (game) => {
  const lives = game.lives - 1;

  return Object.assign({}, game, {
    lives
  });
};

export const tick = (game) => {
  const time = game.time + 1;

  return Object.assign({}, game, {
    time
  });
};


