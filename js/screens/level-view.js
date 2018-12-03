import AbstractView from "../abstract-view";

export default class LevelView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    const levelGenre = `<form class="game__tracks">
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
    const levelArtist = `<div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${this.level.correctAnswer.src}"></audio>
      </div>

      <form class="game__artist">
        ${(this.level.answers).map((answer, i) => `<div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${i}" id="answer-${i}">
          <label class="artist__name" for="answer-${i}">
            <img class="artist__picture" src="${answer.image}" alt="${answer.artist}">
            ${answer.artist}
          </label>
        </div>`).join(``)}
        
      </form>`;

    return `<section class="game__screen">
      <h2 class="game__title">${this.level.title}</h2>
      ${(this.level.type === `genre`) ? levelGenre : levelArtist}
    </section>`;
  }

  onSubmit() {}

  bind() {
    if (this.level.type === `genre`) {
      this._submitBtn = this.element.querySelector(`.game__submit`);
      this._submitBtn.disabled = true;
      this._checkboxes = Array.from(this.element.querySelectorAll(`.game__input`));

      for (const item of this._checkboxes) {
        item.addEventListener(`change`, () => {
          this._submitBtn.disabled = !this._checkboxes.some((i) => i.checked);
        });
      }
    } else {
      this._submitBtn = this.element.querySelector(`.game__artist`);
    }

    this._submitBtn.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onSubmit();
    });
  }
}

