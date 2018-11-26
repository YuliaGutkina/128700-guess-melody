import getElementFromTemplate from "../utils/get-element-from-template";
import changeScreen from "../utils/change-screen";
import resultScreen from "./result-screen";
import {levels} from "../data/game-data";

const gameArtistTemplate = (level) => `<section class="game__screen">
      <h2 class="game__title">${level.title}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src="${level.correctAnswer.src}"></audio>
      </div>

      <form class="game__artist">
        ${(level.answers).map((answer) => `<div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
          <label class="artist__name" for="answer-1">
            <img class="artist__picture" src="${answer.image}" alt="${answer.artist}">
            ${answer.artist}
          </label>
        </div>`).join(``)}
        
      </form>
    </section>`;

const gameArtist = getElementFromTemplate(gameArtistTemplate(levels[1]));

const submitBtn = gameArtist.querySelector(`.game__artist`);

submitBtn.addEventListener(`click`, () => {
  changeScreen(resultScreen);
});

export default gameArtist;
