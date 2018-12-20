import AbstractView from "../utils/abstract-view";
import Player from "../utils/player";

const DEBUG = false;
const DEBUG_STYLE = `style="background:green;"`;

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
    this._submitBtn = this.element.querySelector(`.game__submit`);
    this._submitBtn.disabled = true;
    this._checkboxes = Array.from(this.element.querySelectorAll(`.game__input`));
    this._tracks = Array.from(this.element.querySelectorAll(`.track`));
    this._allPlayBtns = Array.from(this.element.querySelectorAll(`.track__button`));

    for (const item of this._checkboxes) {
      item.addEventListener(`change`, () => {
        this._submitBtn.disabled = !this._checkboxes.some((i) => i.checked);
      });
    }

    this._players = this._tracks.map((track) => new Player(track));

    this._allPlayBtns.forEach((btn, i) => {
      btn.addEventListener(`click`, () => {
        this._players.forEach((player, j) => {
          if (i !== j && player.isPlaying) {
            player.pause();
          }
        });
      });
    });

    this._players[0].play();

    this._submitBtn.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.answer = this._checkboxes.map((i) => i.checked);

      this.onAnswer();
    });
  }
}

