const countScore = (arr, lives) => {
  let counter = 0;

  if (arr.length < 10 || lives === 0) {
    return -1;
  }
  for (const item of arr) {
    if (item.isCorrect && item.time >= 30) {
      counter++;
    } else if (item.isCorrect && item.time < 30) {
      counter += 2;
    } else if (!item.isCorrect) {
      counter -= 2;
    }
  }
  return counter;
};

export default countScore;
