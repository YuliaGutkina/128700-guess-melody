import AbstractView from "../utils/abstract-view";
import {ESC_KEY} from "../game";

export default class ConfirmationView extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `<section class="modal">
    <button class="modal__close" type="button"><span class="visually-hidden">Закрыть</span></button>
    <h2 class="modal__title">Подтверждение</h2>
    <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
    <div class="modal__buttons">
      <button class="modal__button button">Ок</button>
      <button class="modal__button button">Отмена</button>
    </div>
  </section>`;
  }

  onConfirm() {}

  onCancel() {}

  bind() {
    this.closeButton = this.element.querySelector(`.modal__close`);
    this._okButton = this.element.querySelectorAll(`.modal__button`)[0];
    this._cancelButton = this.element.querySelectorAll(`.modal__button`)[1];
    this.closeButton.addEventListener(`click`, this.onCancel);
    this._okButton.addEventListener(`click`, this.onConfirm);
    this._cancelButton.addEventListener(`click`, this.onCancel);
    this.closeButton.addEventListener(`keydown`, (event) => {
      if (event.keyCode === ESC_KEY) {
        this.onCancel();
      }
    });
  }
}
