import AbstractView from "../abstract-view";
import addPlayer from "../utils/add-player";
import {QuestionType} from "../data/game-data";

const DEBUG = true;
const DEBUG_STYLE = `style="background:green;"`;

export default class LevelView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    let question;
    switch (this.level.type) {
      case QuestionType.GENRE: {
        question = `<form class="game__tracks">
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
      </form>`;
        break;
      }
      case QuestionType.ARTIST: {
        question = `<div class="game__track">
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
    switch (this.level.type) {
      case QuestionType.GENRE: {
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
          this.answer = this._checkboxes.map((i) => i.checked);

          this.onAnswer();
        });
        break;
      }
      case QuestionType.ARTIST: {
        this._radioBtns = Array.from(this.element.querySelectorAll(`.artist__input`));
        this._track = this.element.querySelector(`.game__track`);

        addPlayer(this._track);

        for (const radio of this._radioBtns) {
          radio.addEventListener(`change`, () => {
            this.answer = this._radioBtns.map((i) => i.checked);
            this.onAnswer();
          });
        }
      }
    }
  }
}

