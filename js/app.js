import GameModel from "./screens/game-model";
import GamePresenter from "./screens/game-presenter";
import changeScreen from "./utils/change-screen";
import WelcomePresenter from "./screens/welcome-presenter";
import ResultsPresenter from "./screens/results-presenter";
import ErrorView from "./screens/error-view";
import Loader from "./loader";

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
      // .then(() => console.log(`show button`))
      .catch((err) => App.showError(err));
    // .then(() => console.log(`remove loader`));
  }

  static showGame() {
    const model = new GameModel(gameData);
    const game = new GamePresenter(model);
    changeScreen(game.element);
    game.startGame();
  }

  static showResults(stats) {
    const results = new ResultsPresenter();
    changeScreen(results.element);
    Loader.saveResults(stats)
      .then(() => Loader.loadResults())
      // .then((data) => scoreBoard.showScores(data))
      // .then((data) => {
      //   console.log(data);
      // })
      .catch(App.showError);
  }

  static showError(err) {
    const error = new ErrorView(err);
    changeScreen(error.element);
  }
}
