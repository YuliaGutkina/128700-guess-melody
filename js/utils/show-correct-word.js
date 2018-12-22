const showCorrectWord = (number) => {
  if (number % 10 >= 5 || (number % 10 === 0) || (number > 10 && number < 20)) {
    return {
      min: `минут`,
      sec: `секунд`,
      score: `баллов`,
      quickAnswers: `быстрых`,
      mistakes: `ошибок`,
    };
  }
  if (number % 10 === 1 && number !== 11) {
    return {
      min: `минуту`,
      sec: `секунду`,
      score: `балл`,
      quickAnswers: `быстрый`,
      mistakes: `ошибку`,
    };
  }
  return {
    min: `минуты`,
    sec: `секунды`,
    score: `балла`,
    quickAnswers: `быстрых`,
    mistakes: `ошибки`,
  };
};

export default showCorrectWord;
