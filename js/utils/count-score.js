const countScore = (array) => {
  let counter = 0;

  if (array.length < 10 || array.filter((item) => item === -1).length > 3) {
    return -1;
  }
  for (const item of array) {
    if (item !== -1 && item >= 30) {
      counter++;
    } else if (item !== -1 && item < 30) {
      counter += 2;
    } else if (item === -1) {
      counter -= 2;
    }
  }
  return counter;
};

export default countScore;
