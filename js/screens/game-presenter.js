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
    this.game = document.createElement(`section`);
    this.game.classList.add(`game`);
    this.game.appendChild(this.header.element);

    this._timer = 0;
    this._statistics = [];
  }

  get element() {
    return this.game;
  }

  _stopGame() {
    clearInterval(this._timer);
  }

  _tick() {
    if (!this.model.haveTime()) {
      this._stopGame();
      this._showResults(GameResults.FAIL_TIME);
    } else {
      this.model.tick();
      this._updateHeader();
      if (this.model.timeIsFinishing()) {
        this.header.timer.classList.add(`timer__value--finished`);
      }
      this._timer = setTimeout(() => this._tick(), 1000);
    }
  }

  startGame() {
    this._showLevel();

    this._tick();
  }

  _answer(answer) {
    this._stopGame();
    if (answer.isCorrect) {
      this._statistics.push(answer.time);
      if (this.model.hasNextLevel()) {
        this.model.nextLevel();
        this.startGame();
      } else {
        this._showResults(GameResults.SUCCESS);
      }
    } else {
      this.model.die();
      this._statistics.push(-1);
      this._updateHeader();
      if (!this.model.stillAlive()) {
        this._showResults(GameResults.FAIL_TRIES);
      } else {
        this.model.nextLevel();
        this.startGame();
      }
    }
  }

  _updateHeader() {
    const header = new HeaderView(this.model.state);
    header.onReplay = App.showWelcome;
    this.game.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  _showLevel() {
    this._updateHeader();

    const levelType = this.model.currentLevel.type;

    let level;

    switch (levelType) {
      case LevelType.GENRE: {
        level = new LevelGenreView(this.model.currentLevel);
        break;
      }
      case LevelType.ARTIST: {
        level = new LevelArtistView(this.model.currentLevel);
      }
    }

    const startTime = this.model.currentTime;

    level.onAnswer = () => {
      const stopTime = this.model.currentTime;
      const answerTime = stopTime - startTime;
      const isAnswerCorrect = checkAnswer(level.answer, this.model.currentLevel);

      this._answer({isCorrect: isAnswerCorrect, time: answerTime});
    };

    if (this.level) {
      this.game.replaceChild(level.element, this.level.element);
    } else {
      this.game.appendChild(level.element);
    }
    this.level = level;
  }

  _showResults(result) {
    const time = this.model.currentTime;
    const answers = this._statistics;
    App.showResults({time, answers}, result);
  }
}
