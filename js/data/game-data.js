// export const QuestionType = {
//   GENRE: `genre`,
//   ARTIST: `artist`
// };
//
// export const Genre = {
//   COUNTRY: `country`,
//   BLUES: `blues`,
//   FOLK: `folk`,
//   CLASSICAL: `classical`,
//   ELECTRONIC: `electronic`,
//   HIP_HOP: `hip-hop`,
//   JAZZ: `jazz`,
//   POP: `pop`,
//   ROCK: `rock`
// };

export const statistics = [
  {score: 12, lives: 2, time: 250},
  {score: 5, lives: 1, time: 200},
  {score: 15, lives: 3, time: 100},
  {score: 4, lives: 1, time: 299}
];

export const GameResults = {
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


