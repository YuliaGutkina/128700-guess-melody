import data from "./test-data";

export const LEVELS = [
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    correctAnswer: data[1],
    answers: [data[0], data[1], data[2]]
  },
  {
    type: `genre`,
    title: `Выберите инди-рок треки`,
    correctAnswer: [data[1]],
    answers: [data[0], data[1], data[2], data[3]]
  },
  {
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    correctAnswer: data[5],
    answers: [data[5], data[2], data[4]]
  },
  // {
  //   type: `artist`,
  //   title: `Кто исполняет эту песню?`,
  //   correctAnswer: data[3],
  //   answers: [data[1], data[2], data[3]]
  // },
  // {
  //   type: `genre`,
  //   title: `Выберите джаз треки`,
  //   correctAnswer: data[0],
  //   answers: [data[0], data[5], data[2], data[4]]
  // },
  // {
  //   type: `artist`,
  //   title: `Кто исполняет эту песню?`,
  //   correctAnswer: data[2],
  //   answers: [data[5], data[2], data[0]]
  // },
  // {
  //   type: `genre`,
  //   title: `Выберите R&B треки`,
  //   correctAnswer: data[3],
  //   answers: [data[5], data[2], data[1], data[3]]
  // },
  // {
  //   type: `genre`,
  //   title: `Выберите поп треки`,
  //   correctAnswer: data[4],
  //   answers: [data[4], data[1], data[5], data[0]]
  // },
  // {
  //   type: `artist`,
  //   title: `Кто исполняет эту песню?`,
  //   correctAnswer: data[0],
  //   answers: [data[5], data[4], data[0]]
  // },
  // {
  //   type: `artist`,
  //   title: `Кто исполняет эту песню?`,
  //   correctAnswer: data[4],
  //   answers: [data[4], data[0], data[5]]
  // },
];

export const statistics = [
  {score: 12, lives: 2, time: 250},
  {score: 5, lives: 1, time: 200},
  {score: 15, lives: 3, time: 100},
  {score: 4, lives: 1, time: 299}
];

// export const Result = {
//   DIE: 0,
//   WIN: 1,
//   NEXT_LEVEL: 2
// };

export const gameResults = {
  failTime: {
    title: `Увы и ах!`,
    total: `Время вышло! Вы не успели отгадать все мелодии`,
    replayText: `Попробовать ещё раз`
  },
  failTries: {
    title: `Какая жалость!`,
    total: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
    replayText: `Попробовать ещё раз`
  },
  success: {
    title: `Вы настоящий меломан!`,
    total: `За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки`,
    text: `Вы заняли 2 место из 10. Это лучше чем у 80% игроков`,
    replayText: `Сыграть ещё раз`
  }
};


