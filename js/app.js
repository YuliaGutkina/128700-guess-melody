import GameModel from "./screens/game-model";
import GamePresenter from "./screens/game-presenter";
import changeScreen from "./utils/change-screen";
import WelcomePresenter from "./screens/welcome-presenter";
import ResultsPresenter from "./screens/results-presenter";

export default class App {

  static showWelcome() {
    const welcome = new WelcomePresenter();
    changeScreen(welcome.element);
  }

  static showGame() {
    const model = new GameModel();
    const game = new GamePresenter(model);
    changeScreen(game.element);
    game.startGame();
  }

  static showResults(/* stats */) {
    const results = new ResultsPresenter();
    changeScreen(results.element);
  }
}
