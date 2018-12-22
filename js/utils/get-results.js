import countScore from "./count-score";
import {GameResults} from "../data/game-data";
import convertTime from "./convert-time";
import {FAIL_ANSWER, SLOW_ANSWER} from "../game";
import showCorrectWord from "./show-correct-word";

const getResults = (result, stats, data) => {
  switch (result) {
    case GameResults.SUCCESS: {
      const statistics = data.map((item) => countScore(item.answers));
      const score = countScore(stats.answers);
      statistics.sort((a, b) => b - a);
      const place = statistics.indexOf(score) + 1;
      const players = statistics.length;
      const success = Math.floor((players - place) / players * 100);
      const time = convertTime(stats.time);
      const quickAnswers = stats.answers.filter((item) => (item < SLOW_ANSWER && item !== FAIL_ANSWER)).length;
      const mistakes = stats.answers.filter((item) => item === FAIL_ANSWER).length;

      const wordMin = showCorrectWord(time.min).min;
      const wordSec = showCorrectWord(time.sec).sec;
      const wordScore = showCorrectWord(score).score;
      const wordQuickAnswers = showCorrectWord(quickAnswers).quickAnswers;
      const wordMistakes = showCorrectWord(mistakes).mistakes;

      return {
        title: `Вы настоящий меломан!`,
        total: `За ${time.min} ${wordMin} и ${time.sec} ${wordSec} вы набрали ${score} ${wordScore} (${quickAnswers} ${wordQuickAnswers}), совершив ${mistakes} ${wordMistakes}`,
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
