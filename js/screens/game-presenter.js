import HeaderView from "./header-view";
import LevelGenreView from "./level-genre-view";
import App from "../app";
import {GameResults, LevelType} from "../data/game-data";
import LevelArtistView from "./level-artist-view";
import checkAnswer from "../utils/check-answer";

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.level = new LevelGenreView(this.model.getCurrentLevel());
    this.game = document.createElement(`section`);
    this.game.classList.add(`game`);
    this.game.appendChild(this.header.element);
    this.game.appendChild(this.level.element);

    this._timer = 0;
    this._statistics = [];
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
      this.showResults(GameResults.FAIL_TIME);
    } else {
      this.model.tick();
      this.updateHeader();
      if (this.model.timeIsFinishing()) {
        this.header.timer.classList.add(`timer__value--finished`);
      }
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
      this._statistics.push(answer.time);
      if (this.model.hasNextLevel()) {
        this.model.nextLevel();
        this.startGame();
      } else {
        this.showResults(GameResults.SUCCESS);
      }
    } else {
      this.model.die();
      this._statistics.push(-1);
      this.updateHeader();
      if (!this.model.stillAlive()) {
        this.showResults(GameResults.FAIL_TRIES);
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

    const levelType = this.model.getCurrentLevel().type;

    let level;

    switch (levelType) {
      case LevelType.GENRE: {
        level = new LevelGenreView(this.model.getCurrentLevel());
        break;
      }
      case LevelType.ARTIST: {
        level = new LevelArtistView(this.model.getCurrentLevel());
      }
    }

    const startTime = this.model.state.time;

    level.onAnswer = () => {
      const stopTime = this.model.state.time;
      const answerTime = stopTime - startTime;
      const isAnswerCorrect = checkAnswer(level.answer, this.model.getCurrentLevel());

      this.answer({isCorrect: isAnswerCorrect, time: answerTime});
    };
    this.game.replaceChild(level.element, this.level.element);
    this.level = level;
  }

  showResults(result) {
    const time = this.model.state.time;
    const answers = this._statistics;
    App.showResults({time, answers}, result);
  }
}
