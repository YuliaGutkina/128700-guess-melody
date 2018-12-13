import {LEVELS} from "../data/game-data";
import {changeLevel, die, INITIAL_GAME, tick} from "../utils/game-logic";

const getLevel = (state) => LEVELS[state.level];

export default class GameModel {
  constructor() {
    this.start();
  }

  get state() {
    return Object.freeze(this._state);
  }

  hasNextLevel() {
    return this._state.level + 1 < LEVELS.length;
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
    return this._state.lives > 0;
  }

  haveTime() {
    return this._state.time < 300;
  }

  getCurrentLevel() {
    return getLevel(this._state);
  }

  tick() {
    this._state = tick(this._state);
  }
}