import AbstractView from "../utils/abstract-view";
import convertTime from "../utils/convert-time";
import {GAME_TIME, INITIAL_GAME} from "../game";
import getRadius from "../utils/get-radius";

const TIMER_RADIUS = 370;

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const time = convertTime(this.state.time, true, true);
    const timerOffset = getRadius(1 - (this.state.time / GAME_TIME), TIMER_RADIUS);
    const mistakes = INITIAL_GAME.lives - this.state.lives;
    return `<header class="game__header">
        <a class="game__back" href="#">
          <span class="visually-hidden">Сыграть ещё раз</span>
          <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
        </a>
  
        <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
          <circle class="timer__line" cx="390" cy="390" r="${TIMER_RADIUS}"
                  style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center; stroke-dasharray: ${timerOffset.stroke}; stroke-dashoffset: ${timerOffset.offset}"/>
        </svg>
  
        <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer__mins">${time.min}</span>
          <span class="timer__dots">:</span>
          <span class="timer__secs">${time.sec}</span>
        </div>
  
        <div class="game__mistakes">
          ${new Array(mistakes).fill(`<div class="wrong"></div>`).join(``)}
        </div>
      </header>`;
  }

  onReplay() {}

  bind() {
    this.replayButton = this.element.querySelector(`.game__back`);
    this.replayButton.addEventListener(`click`, this.onReplay);
    this.timer = this.element.querySelector(`.timer__value`);
  }
}
