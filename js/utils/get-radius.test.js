import {assert} from 'chai';
import getRadius from './get-radius';

describe(`Function should correctly calculate circle length`, () => {
  describe(`Normal cases`, () => {
    it(`Should return full length and 0 in initial state`, () => {
      assert.equal(getRadius(1, 100).stroke, 628);
      assert.equal(getRadius(1, 100).offset, 0);
    });

    it(`Should return 0 and full length in the final state`, () => {
      assert.equal(getRadius(0, 100).stroke, 628);
      assert.equal(getRadius(0, 100).offset, 628);
    });

    it(`Offset and length should be equal on a half`, () => {
      assert.equal(getRadius(0.5, 100).stroke, 628);
      assert.equal(getRadius(0.5, 100).offset, 314);
    });
  });
});
