import {LevelType} from "../data/game-data";

const getCorrectAnswer = (level) => {
  switch (level.type) {
    case LevelType.ARTIST: {
      return level.answers.map((item) => item.isCorrect);
    }
    case LevelType.GENRE: {
      return level.answers.map((item) => item.genre === level.genre);
    }
    default: {
      return new Error(`${level.type} level type is not exist`);
    }
  }
};

const checkAnswer = (answer, level) => {
  const correctAnswer = getCorrectAnswer(level);
  return answer.every((item, i) => item === correctAnswer[i]);
};

export default checkAnswer;
