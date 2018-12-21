import {assert} from 'chai';
import countScore from "./count-score";

describe(`Score counter`, () => {
  it(`should count player's score correctly`, () => {
    assert.equal(countScore([29, 40, 40, 40, 40, 40, 40, 40, 40, 40]), 11);
    assert.equal(countScore([-1, 40, 40, 40, 40, 40, 40, 40, 40, 40]), 7);
  });
});
