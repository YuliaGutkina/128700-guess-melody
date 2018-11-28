import AbstractView from "../abstract-view";

export default class ResultsView extends AbstractView {
  constructor(results) {
    super();
    this.results = results;
  }

  get template() {
    const text = `<p class="result__text">${this.results.text}</p>`;
    return `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${this.results.title}</h2>
    <p class="result__total">${this.results.total}</p>
    ${this.results.text ? text : ``}
    <button class="result__replay" type="button">${this.results.replayText}</button>
  </section>`;
  }

  onReplay() {}

  bind() {
    this._replayBtn = this.element.querySelector(`.result__replay`);
    this._replayBtn.addEventListener(`click`, this.onReplay);
  }
}
