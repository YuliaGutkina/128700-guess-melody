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

  static showWelcome() {
    const welcome = new WelcomePresenter();
    changeScreen(welcome.element);
    Loader.loadData()
      .then((data) => {
        gameData = data;
        return gameData;
      })
      .then(() => welcome.showLoader())
      .catch((err) => App.showError(err))
      .then(() => welcome.showStart());
  }

  static showGame() {
    const model = new GameModel(gameData);
    const game = new GamePresenter(model);
    changeScreen(game.element);
    game.startGame();
  }

  static showResults(stats, result) {
    switch (result) {
      case GameResults.FAIL_TIME:
      case GameResults.FAIL_TRIES: {
        const results = new ResultsPresenter(result);
        changeScreen(results.element);
        break;
      }
      case GameResults.SUCCESS: {
        Loader.saveResults(stats)
          .then(() => Loader.loadResults())
          .then((data) => {
            const results = new ResultsPresenter(GameResults.SUCCESS, stats, data);
            changeScreen(results.element);
          })
          .catch(App.showError);
      }
    }
  }

  static showError(err) {
    const error = new ErrorView(err);
    changeScreen(error.element);
  }
}
