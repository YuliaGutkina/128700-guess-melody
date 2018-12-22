import GameModel from "./screens/game-model";
import GamePresenter from "./screens/game-presenter";
import changeScreen from "./utils/change-screen";
import WelcomePresenter from "./screens/welcome-presenter";
import ResultsPresenter from "./screens/results-presenter";
import ErrorView from "./screens/error-view";
import Loader from "./loader";
import {GameResults} from "./data/game-data";

let gameData;

export default class App {

  static async load() {
    const welcome = new WelcomePresenter();
    changeScreen(welcome.element);
    welcome.showLoader();
    try {
      gameData = await Loader.loadData();
      welcome.showStart();
    } catch (error) {
      App.showError(error);
    }
  }

  static showWelcome() {
    App.load();
  }

  static showGame() {
    const model = new GameModel(gameData);
    const game = new GamePresenter(model);
    changeScreen(game.element);
    game.startGame();
  }

  static async showResults(stats, result) {
    switch (result) {
      case GameResults.FAIL_TIME:
      case GameResults.FAIL_TRIES: {
        const results = new ResultsPresenter(result);
        changeScreen(results.element);
        break;
      }
      case GameResults.SUCCESS: {
        try {
          await Loader.saveResults(stats);
          const results = new ResultsPresenter(result, stats, await Loader.loadResults());
          changeScreen(results.element);

        } catch (error) {
          App.showError(error);
        }
      }
    }
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeScreen(errorView.element);
  }
}
