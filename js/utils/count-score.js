const countScore = (arr) => {
  let counter = 0;

  if (arr.length < 10 || arr.filter((i) => i === -1).length > 3) {
    return -1;
  }
  for (const item of arr) {
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
