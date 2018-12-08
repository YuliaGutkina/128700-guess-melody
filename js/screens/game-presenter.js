import HeaderView from "./header-view";
import LevelView from "./level-view";
import ResultsView from "./results-view";
import {gameResults} from "../data/game-data";
import changeScreen from "../utils/change-screen";
import App from "../app";

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.level = new LevelView(this.model.getCurrentLevel());
    this.game = document.createElement(`section`);
    this.game.classList.add(`game`);
    this.game.appendChild(this.header.element);
    this.game.appendChild(this.level.element);

    this._timer = 0;
  }

  get element() {
    return this.game;
  }

  stopGame() {
    clearInterval(this._timer);
  }

  _tick() {
    this.model.tick();
    this.updateHeader();
    this._timer = setTimeout(() => this._tick(), 1000);
  }

  startGame() {
    this.changeLevel();

    this._tick();
  }

  // answer(answer) {
  //   this.stopGame();
  //   switch (answer.result) {
  //     case Result.NEXT_LEVEL:
  //       this.model.nextLevel();
  //       this.startGame();
  //       break;
  //     case Result.DIE:
  //       this.model.die();
  //       this.endGame(false, !(this.model.isDead()));
  //       break;
  //     case Result.WIN:
  //       this.endGame(true, false);
  //       break;
  //     default:
  //       throw new Error(`Unknown result: ${answer.result}`);
  //   }
  // }

  // replay() {}

  updateHeader() {
    const header = new HeaderView(this.model.state);
    header.onReplay = App.showWelcome;
    this.game.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeLevel() {
    this.updateHeader();

    const level = new LevelView(this.model.getCurrentLevel());
    // level.onAnswer = this.answer.bind(this);
    level.onAnswer = App.showResults;
    this.game.replaceChild(level.element, this.level.element);
    this.level = level;
  }

  showResults() {
    const results = new ResultsView(gameResults.success);
    // results.onReplay = this.replay.bind(this);
    changeScreen(results.element);
  }
}
