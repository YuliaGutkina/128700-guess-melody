import App from "../app";
import ResultsView from "./results-view";
import getResults from "../utils/get-results";

export default class ResultsPresenter {
  constructor(userResult, userStats, statsData) {
    this.userResult = userResult;
    this.userStats = userStats;
    this.statsData = statsData;
  }

  get element() {
    const results = new ResultsView(this.results);
    results.onReplay = App.showGame;
    return results.element;
  }

  get results() {
    return getResults(this.userResult, this.userStats, this.statsData);
  }
}
