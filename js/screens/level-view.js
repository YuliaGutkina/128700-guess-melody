import AbstractView from "../abstract-view";
import addPlayer from "../utils/add-player";

export default class LevelView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    let question;
    switch (this.level.type) {
      case `genre`: {
        question = `<form class="game__tracks">
      ${(this.level.answers).map((answer, i) => `<div class="track">
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
      </form>`;
        break;
      }
      case `artist`: {
        question = `<div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${this.level.src}"></audio>
      </div>

      <form class="game__artist">
        ${(this.level.answers).map((answer, i) => `<div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
          <label class="artist__name" for="answer-${i}">
            <img class="artist__picture" src="${answer.image.url}" alt="${answer.title}">
            ${answer.title}
          </label>
        </div>`).join(``)}

      </form>`;
        break;
      }
    }

    return `<section class="game__screen">
      <h2 class="game__title">${this.level.question}</h2>
      ${question}
    </section>`;
  }

  onAnswer() {}

  bind() {
    if (this.level.type === `genre`) {
      this._submitBtn = this.element.querySelector(`.game__submit`);
      this._submitBtn.disabled = true;
      this._checkboxes = Array.from(this.element.querySelectorAll(`.game__input`));
      this._tracks = Array.from(this.element.querySelectorAll(`.track`));

      for (const item of this._checkboxes) {
        item.addEventListener(`change`, () => {
          this._submitBtn.disabled = !this._checkboxes.some((i) => i.checked);
        });
      }

      for (const track of this._tracks) {
        addPlayer(track);
      }

      this._submitBtn.addEventListener(`click`, (e) => {
        e.preventDefault();
        this.onAnswer();
      });

    } else {
      this._submitBtn = this.element.querySelector(`.game__artist`);
      this._track = this.element.querySelector(`.game__track`);

      addPlayer(this._track);

      this._submitBtn.addEventListener(`click`, () => {
        this.onAnswer();
      });
    }
  }
}

