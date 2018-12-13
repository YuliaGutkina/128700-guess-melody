import App from "../app";
import ResultsView from "./results-view";
import {GameResults} from "../data/game-data";

export default class ResultsPresenter {
  constructor() {
    //
  }

  get element() {
    const results = new ResultsView(GameResults.failTries);
    results.onReplay = App.showGame;
    return results.element;
  }
}
