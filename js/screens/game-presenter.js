import HeaderView from "./header-view";
import LevelView from "./level-view";
import App from "../app";
import {QuestionType} from "../data/game-data";

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
      this._statistics.push(answer.time);
      if (this.model.hasNextLevel()) {
        this.model.nextLevel();
        this.startGame();
      } else {
        this.showResults();
      }
    } else {
      this.model.die();
      this._statistics.push(-1);
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
    const startTime = this.model.state.time;

    level.onAnswer = () => {
      const stopTime = this.model.state.time;
      const answerTime = stopTime - startTime;

      const compareAnswers = (answer, correctAnswer) => {
        return answer.every((item, i) => item === correctAnswer[i]);
      };

      const getCorrectAnswer = (levelQuestion) => {
        switch (levelQuestion.type) {
          case QuestionType.ARTIST: {
            return levelQuestion.answers.map((i) => i.isCorrect);
          }
          case QuestionType.GENRE: {
            const correctGenre = levelQuestion.genre;
            return levelQuestion.answers.map((i) => i.genre === correctGenre);
          }
          default: {
            return null;
          }
        }
      };

      const correctAnswer = getCorrectAnswer(this.model.getCurrentLevel());
      const isAnswerCorrect = compareAnswers(level.answer, correctAnswer);

      this.answer({isCorrect: isAnswerCorrect, time: answerTime});
    };
    this.game.replaceChild(level.element, this.level.element);
    this.level = level;
  }

  showResults() {
    App.showResults(this._statistics);
  }
}
