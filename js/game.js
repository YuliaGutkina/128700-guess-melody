export const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 0,
});

export const GAME_TIME = 300;
export const FINISH_TIME = 30;

export const ONE_SECOND = 1000;

export const SLOW_ANSWER = 30;
export const FAIL_ANSWER = -1;

export const DEBUG = false;
export const DEBUG_STYLE = `style="background:green;"`;

export const ESC_KEY = 27;

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


