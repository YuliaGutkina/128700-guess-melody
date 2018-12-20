import {assert} from 'chai';
import showTime from "./show-time";

describe(`Timer`, () => {
  it(`should convert time to minutes and seconds correctly`, () => {
    assert.deepEqual(showTime(125), {min: 2, sec: 5});
    assert.deepEqual(showTime(3), {min: 0, sec: 3});
    assert.deepEqual(showTime(300), {min: 5, sec: 0});
  });
  it(`should show electronic timer correctly`, () => {
    assert.deepEqual(showTime(0, true), {min: `00`, sec: `00`});
    assert.deepEqual(showTime(5, true), {min: `00`, sec: `05`});
    assert.deepEqual(showTime(15, true), {min: `00`, sec: `15`});
    assert.deepEqual(showTime(75, true), {min: `01`, sec: `15`});
    assert.deepEqual(showTime(125, true), {min: `02`, sec: `05`});
    assert.deepEqual(showTime(300, true), {min: `05`, sec: `00`});
    assert.deepEqual(showTime(606, true), {min: `10`, sec: `06`});
  });
});
