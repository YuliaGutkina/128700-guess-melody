import {assert} from 'chai';
import countScore from "./count-score";

describe(`Score counter`, () => {
  it(`should return -1 if player didn't answer all questions`, () => {
    assert.equal(countScore([
      {
        isCorrect: false,
        time: 20
      },
      {
        isCorrect: false,
        time: 40
      },
      {
        isCorrect: false,
        time: 20
      },
    ], 0), -1);
    assert.equal(countScore([
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: false,
        time: 40
      },
      {
        isCorrect: false,
        time: 20
      },
      {
        isCorrect: false,
        time: 40
      },
    ], 0), -1);
    assert.equal(countScore([
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: true,
        time: 20
      },
      {
        isCorrect: false,
        time: 40
      },
      {
        isCorrect: false,
        time: 20
      },
      {
        isCorrect: false,
        time: 40
      },
    ], 0), -1);
    assert.equal(countScore([
      {
        isCorrect: true,
        time: 300
      },
    ], 3), -1);
    assert.equal(countScore([
      {
        isCorrect: false,
        time: 300
      },
    ], 2), -1);
  });
  it(`should count player's score correctly`, () => {
    assert.equal(countScore([
      {
        isCorrect: true,
        time: 30
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
    ], 3), 10);
    assert.equal(countScore([
      {
        isCorrect: true,
        time: 29
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
    ], 3), 11);
    assert.equal(countScore([
      {
        isCorrect: false,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
      {
        isCorrect: true,
        time: 40
      },
    ], 2), 7);
  });
});
