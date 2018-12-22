import {FAIL_ANSWER, SLOW_ANSWER} from "../game";

const countScore = (answers) => {
  let counter = 0;

  for (const item of answers) {
    if (item !== FAIL_ANSWER && item >= SLOW_ANSWER) {
      counter++;
    } else if (item !== FAIL_ANSWER && item < SLOW_ANSWER) {
      counter += 2;
    } else if (item === FAIL_ANSWER) {
      counter -= 2;
    }
  }
  return counter;
};

export default countScore;
