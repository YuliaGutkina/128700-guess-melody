import countScore from "./count-score";
import {GameResults} from "../data/game-data";
import convertTime from "./convert-time";

const getResults = (result, stats, data) => {
  switch (result) {
    case GameResults.SUCCESS: {
      const statistics = data.map((i) => countScore(i.answers));
      const score = countScore(stats.answers);
      statistics.push(score);
      statistics.sort((a, b) => a - b);
      const place = statistics.length - statistics.indexOf(score);
      const players = statistics.length;
      const success = Math.round((statistics.indexOf(score) / players));
      const time = convertTime(stats.time);
      const quickAnswers = stats.answers.filter((i) => (i < 30 && i !== -1)).length;
      const mistakes = stats.answers.filter((i) => i === -1).length;
      return {
        title: `Вы настоящий меломан!`,
        total: `За ${time.min} минуты и ${time.sec} секунд вы набрали ${score} баллов (${quickAnswers} быстрых), совершив ${mistakes} ошибки`,
        text: `Вы заняли ${place} место из ${players} игроков. Это лучше, чем у ${success}% игроков`,
        replayText: `Сыграть ещё раз`
      };
    }
    case GameResults.FAIL_TIME: {
      return {
        title: `Увы и ах!`,
        total: `Время вышло! Вы не успели отгадать все мелодии`,
        replayText: `Попробовать ещё раз`
      };
    }
    case GameResults.FAIL_TRIES: {
      return {
        title: `Какая жалость!`,
        total: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`,
        replayText: `Попробовать ещё раз`
      };
    }
    default: {
      return new Error(`something went wrong`);
    }
  }
};

export default getResults;
