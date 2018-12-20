import {assert} from 'chai';
import countScore from "./count-score";

describe(`Score counter`, () => {
  it(`should return -1 if player didn't answer all questions`, () => {
    assert.equal(countScore([-1, -1, 40, 30, 20]), -1);
    assert.equal(countScore([34, 20, -1, 2, 4, 54, 33, 44, 33]), -1);
  });
  it(`should return -1 if player failed more then 3 times`, () => {
    assert.equal(countScore([34, 23, 40, 40, 40, 20, -1, -1, -1, -1]), -1);
  });
  it(`should count player's score correctly`, () => {
    assert.equal(countScore([29, 40, 40, 40, 40, 40, 40, 40, 40, 40]), 11);
    assert.equal(countScore([-1, 40, 40, 40, 40, 40, 40, 40, 40, 40]), 7);
  });
});
