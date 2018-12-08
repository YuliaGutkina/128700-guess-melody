import App from "../app";
import ResultsView from "./results-view";
import {gameResults} from "../data/game-data";

export default class ResultsPresenter {
  constructor() {
    //
  }

  get element() {
    const results = new ResultsView(gameResults.failTries);
    results.onReplay = App.showWelcome;
    return results.element;
  }
}
