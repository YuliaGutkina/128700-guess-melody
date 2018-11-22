import {assert} from 'chai';
import showResults from "./show-results";

describe(`Results`, () => {
  it(`should show fall-time results if time is over`, () => {
    assert.equal(showResults([
      {
        score: 12,
        lives: 2,
        time: 250
      },
      {
        score: 5,
        lives: 1,
        time: 200
      },
      {
        score: 15,
        lives: 3,
        time: 100
      },
      {
        score: 4,
        lives: 1,
        time: 299
      }
    ], {
      score: -1,
      lives: 3,
      time: 300
    }), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`should show fall-time results if time is over`, () => {
    assert.equal(showResults([
      {
        score: 12,
        lives: 2,
        time: 250
      },
      {
        score: 5,
        lives: 1,
        time: 200
      },
      {
        score: 15,
        lives: 3,
        time: 100
      },
      {
        score: 4,
        lives: 1,
        time: 299
      }
    ], {
      score: -1,
      lives: 0,
      time: 200
    }), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
  it(`should show success message`, () => {
    assert.equal(showResults([
      {
        score: 12,
        lives: 2,
        time: 250
      },
      {
        score: 5,
        lives: 1,
        time: 200
      },
      {
        score: 15,
        lives: 3,
        time: 100
      },
      {
        score: 4,
        lives: 1,
        time: 299
      }
    ], {
      score: 13,
      lives: 2,
      time: 200
    }), `Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков`);
    assert.equal(showResults([
      {
        score: 12,
        lives: 2,
        time: 250
      },
      {
        score: 5,
        lives: 1,
        time: 200
      },
      {
        score: 15,
        lives: 3,
        time: 100
      },
      {
        score: 4,
        lives: 1,
        time: 299
      }
    ], {
      score: 23,
      lives: 1,
      time: 200
    }), `Вы заняли 1 место из 5 игроков. Это лучше, чем у 80% игроков`);
    assert.equal(showResults([
      {
        score: 12,
        lives: 2,
        time: 250
      },
      {
        score: 5,
        lives: 1,
        time: 200
      },
      {
        score: 15,
        lives: 3,
        time: 100
      },
      {
        score: 4,
        lives: 1,
        time: 299
      }
    ], {
      score: 1,
      lives: 1,
      time: 290
    }), `Вы заняли 5 место из 5 игроков. Это лучше, чем у 0% игроков`);
  });
});
