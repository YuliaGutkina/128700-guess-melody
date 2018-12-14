import GameModel from "./screens/game-model";
import GamePresenter from "./screens/game-presenter";
import changeScreen from "./utils/change-screen";
import WelcomePresenter from "./screens/welcome-presenter";
import ResultsPresenter from "./screens/results-presenter";
import ErrorView from "./screens/error-view";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

let gameData;

export default class App {

  static showWelcome() {
    const welcome = new WelcomePresenter();
    changeScreen(welcome.element);
    window.fetch(`https://es.dump.academy/guess-melody/questions`)
      .then(checkStatus)
      .then((response) => response.json())
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

  static showResults(/* stats */) {
    const results = new ResultsPresenter();
    changeScreen(results.element);
  }

  static showError(err) {
    const error = new ErrorView(err);
    changeScreen(error.element);
  }
}
