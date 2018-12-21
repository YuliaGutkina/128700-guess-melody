import AbstractView from "../utils/abstract-view";

export default class WelcomeView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="welcome">
    <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
    <h2 class="welcome__rules-title">Правила игры</h2>
    <p class="welcome__text">Правила просты:</p>
    <ul class="welcome__rules-list">
      <li>За 5 минут нужно ответить на все вопросы.</li>
      <li>Можно допустить 3 ошибки.</li>
    </ul>
    <p class="welcome__text">Удачи!</p>
  </section>`;
  }

  onPlay() {}

  bind() {
    this.playButton = this.element.querySelector(`.welcome__button`);
    this.playButton.addEventListener(`click`, this.onPlay);
    this.loader = document.createElement(`div`);
    this.loader.classList.add(`welcome__loader`);
  }
}
