import AbstractView from "../utils/abstract-view";
import Player from "../utils/player";
import {DEBUG, DEBUG_STYLE} from "../game";

export default class LevelArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<section class="game__screen">
      <h2 class="game__title">${this.level.question}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${this.level.src}"></audio>
      </div>

      <form class="game__artist">
        ${(this.level.answers).map((answer, i) => `<div class="artist" ${DEBUG && (answer.isCorrect) ? DEBUG_STYLE : ``}>
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
          <label class="artist__name" for="answer-${i}">
            <img class="artist__picture" src="${answer.image.url}" alt="${answer.title}">
            ${answer.title}
          </label>
        </div>`).join(``)}

      </form>
    </section>`;
  }

  onAnswer() {}

  bind() {
    this._radioButtons = Array.from(this.element.querySelectorAll(`.artist__input`));
    this._track = this.element.querySelector(`.game__track`);

    this._player = new Player(this._track);

    this._player.playButton.addEventListener(`click`, () => {
      if (!this._player.isPlaying) {
        this._player.play();
      } else {
        this._player.pause();
      }
    });

    this._player.play();

    for (const radio of this._radioButtons) {
      radio.addEventListener(`change`, () => {
        this.answer = this._radioButtons.map((item) => item.checked);
        this.onAnswer();
      });
    }
  }
}

