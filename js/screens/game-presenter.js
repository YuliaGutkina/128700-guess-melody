import HeaderView from "./header-view";
import LevelView from "./level-view";
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
    if (!this.model.haveTime()) {
      this.stopGame();
      this.showResults();
    } else {
      this.model.tick();
      this.updateHeader();
      this._timer = setTimeout(() => this._tick(), 1000);
    }
  }

  startGame() {
    this.changeLevel();

    this._tick();
  }

  answer(answer) {
    this.stopGame();
    if (answer.isCorrect) {
      if (this.model.hasNextLevel()) {
        this.model.nextLevel();
        this.startGame();
      } else {
        this.showResults();
      }
    } else {
      this.model.die();
      this.updateHeader();
      if (!this.model.stillAlive()) {
        this.showResults();
      } else {
        this.model.nextLevel();
        this.startGame();
      }
    }
  }

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
    level.onAnswer = () => {
      this.answer({isCorrect: false, time: 20});
    };
    this.game.replaceChild(level.element, this.level.element);
    this.level = level;
  }

  showResults() {
    App.showResults();
  }
}
