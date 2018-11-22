const TIME_LIMIT = 300;

const showResults = (results, playerResult) => {
  if (playerResult.time === TIME_LIMIT) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }
  if (playerResult.lives === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  const statistics = results.map((result) => result.score);
  statistics.push(playerResult.score);
  statistics.sort((a, b) => a - b);
  const place = statistics.length - statistics.indexOf(playerResult.score);
  const players = statistics.length;
  const success = Math.round((statistics.indexOf(playerResult.score) / players) * 100);
  return `Вы заняли ${place} место из ${players} игроков. Это лучше, чем у ${success}% игроков`;
};

export default showResults;
