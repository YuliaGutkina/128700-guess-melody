import AbstractView from "../utils/abstract-view";
import Player from "../utils/player";
import {DEBUG, DEBUG_STYLE} from "../game";

export default class LevelGenreView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<section class="game__screen">
      <h2 class="game__title">${this.level.question}</h2>
      <form class="game__tracks">
      ${(this.level.answers).map((answer, i) => `<div class="track" ${DEBUG && (answer.genre === this.level.genre) ? DEBUG_STYLE : ``}>
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio src="${answer.src}"></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${i}" id="answer-${i}">
            <label class="game__check" for="answer-${i}">Отметить</label>
          </div>
        </div>`).join(``)}

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>`;
  }

  onAnswer() {}

  bind() {
    this._submitButton = this.element.querySelector(`.game__submit`);
    this._submitButton.disabled = true;
    this._checkboxes = Array.from(this.element.querySelectorAll(`.game__input`));
    this._tracks = Array.from(this.element.querySelectorAll(`.track`));
    this._players = this._tracks.map((track) => new Player(track));

    for (const checkbox of this._checkboxes) {
      checkbox.addEventListener(`change`, () => {
        this._submitButton.disabled = !this._checkboxes.some((item) => item.checked);
      });
    }

    for (const player of this._players) {
      player.playButton.addEventListener(`click`, () => {
        const isPlaying = player.isPlaying;
        for (const item of this._players) {
          item.pause();
        }
        if (!isPlaying) {
          player.isPlaying = isPlaying;
          player.play();
        }
      });
    }

    this._players[0].play();

    this._submitButton.addEventListener(`click`, (event) => {
      event.preventDefault();
      this.answer = this._checkboxes.map((item) => item.checked);

      this.onAnswer();
    });
  }
}

