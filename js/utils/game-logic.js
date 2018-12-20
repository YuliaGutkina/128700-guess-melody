import showTime from "./show-time";

export const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 0,
  electronicTime: {
    min: ``,
    sec: ``
  }
});

export const GAME_TIME = 30;
export const FINISH_TIME = 15;

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
  const electronicTime = showTime((GAME_TIME - time), true);

  return Object.assign({}, game, {
    time, electronicTime
  });
};


