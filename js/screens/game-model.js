import {changeLevel, die, FINISH_TIME, GAME_TIME, INITIAL_GAME, tick} from "../game";

export default class GameModel {
  constructor(data) {
    this.data = data;
    this.start();
  }

  get state() {
    return Object.freeze(this._state);
  }

  hasNextLevel() {
    return this._state.level + 1 < this.data.length;
  }

  nextLevel() {
    this._state = changeLevel(this._state, this._state.level + 1);
  }

  die() {
    this._state = die(this._state);
  }

  start() {
    this._state = INITIAL_GAME;
  }

  stillAlive() {
    return this._state.lives >= 0;
  }

  haveTime() {
    return this._state.time < GAME_TIME;
  }

  timeIsFinishing() {
    return this._state.time > (GAME_TIME - FINISH_TIME);
  }

  getCurrentLevel() {
    return this.data[this._state.level];
  }

  tick() {
    this._state = tick(this._state);
  }
}
