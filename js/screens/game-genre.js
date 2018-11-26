import getElementFromTemplate from "../utils/get-element-from-template";
import changeScreen from "../utils/change-screen";
import resultScreen from "./result-screen";
import {levels} from "../data/game-data";

const gameGenreTemplate = (level) => `<section class="game__screen">
      <h2 class="game__title">${level.title}</h2>
      <form class="game__tracks">
      ${(level.answers).map((answer) => `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio src="${answer.src}"></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
            <label class="game__check" for="answer-1">Отметить</label>
          </div>
        </div>`).join(``)}

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>`;

const gameGenre = getElementFromTemplate(gameGenreTemplate(levels[0]));

const submitBtn = gameGenre.querySelector(`.game__submit`);

submitBtn.disabled = true;

submitBtn.addEventListener(`click`, (e) => {
  e.preventDefault();
  changeScreen(resultScreen);
});

const checkboxes = Array.from(gameGenre.querySelectorAll(`.game__input`));

for (const item of checkboxes) {
  item.addEventListener(`change`, () => {
    submitBtn.disabled = !checkboxes.some((i) => i.checked);
  });
}

export default gameGenre;

