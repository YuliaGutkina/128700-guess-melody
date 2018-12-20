import App from "../app";
import ResultsView from "./results-view";
import {GameResults} from "../data/game-data";
import showTime from "../utils/show-time";
import countScore from "../utils/count-score";

export default class ResultsPresenter {
  constructor(result, stats, statsData) {
    this.result = result;
    this.stats = stats;
    this.statsData = statsData;
  }

  get element() {
    if (this.result === GameResults.SUCCESS) {
      const statistics = this.statsData.map((i) => countScore(i.answers));
      const score = countScore(this.stats.answers);
      statistics.push(score);
      statistics.sort((a, b) => a - b);
      const place = statistics.length - statistics.indexOf(score);
      const players = statistics.length;
      const success = Math.round((statistics.indexOf(score) / players) * 100);

      this.result = Object.assign(this.result, {
        total: `За ${showTime(this.stats.time).min} минуты и ${showTime(this.stats.time).sec} секунд вы набрали ${score} баллов (${this.stats.answers.filter((i) => (i < 30 && i !== -1)).length} быстрых), совершив ${this.stats.answers.filter((i) => i === -1).length} ошибки`,
        text: `Вы заняли ${place} место из ${players} игроков. Это лучше, чем у ${success}% игроков`
      });
    }
    const results = new ResultsView(this.result);
    results.onReplay = App.showGame;
    return results.element;
  }
}
