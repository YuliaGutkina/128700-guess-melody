import AbstractView from "../utils/abstract-view";
import convertTime from "../utils/convert-time";
import {INITIAL_GAME} from "../game";

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const time = convertTime(this.state.time, true, true);
    return `<header class="game__header">
        <a class="game__back" href="#">
          <span class="visually-hidden">Сыграть ещё раз</span>
          <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
        </a>
  
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle class="timer__line" cx="390" cy="390" r="370"
                  style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
        </svg>
  
        <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer__mins">${time.min}</span>
          <span class="timer__dots">:</span>
          <span class="timer__secs">${time.sec}</span>
        </div>
  
        <div class="game__mistakes">
          ${new Array(INITIAL_GAME.lives - this.state.lives).fill(`<div class="wrong"></div>`).join(``)}
        </div>
      </header>`;
  }

  onReplay() {}

  bind() {
    this._replayButton = this.element.querySelector(`.game__back`);
    this._replayButton.addEventListener(`click`, this.onReplay);
    this.timer = this.element.querySelector(`.timer__value`);
  }
}
