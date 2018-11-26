import getElementFromTemplate from "../utils/get-element-from-template";
import {gameResults} from "../data/game-data";
import changeScreen from "../utils/change-screen";
import welcomeScreen from "./welcome-screen";

const resultScreenTemplate = (results) => `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${results.title}</h2>
    <p class="result__total">${results.total}</p>
    <p class="result__text">${results.text}</p>
    <button class="result__replay" type="button">${results.replayText}</button>
  </section>`;

const resultScreen = getElementFromTemplate(resultScreenTemplate(gameResults.success));

const replayButton = resultScreen.querySelector(`.result__replay`);

replayButton.addEventListener(`click`, () => {
  changeScreen(welcomeScreen);
});

export default resultScreen;
