import getElementFromTemplate from "../utils/get-element-from-template";
import header from "../header";
import gameGenre from "./game-genre";
import gameArtist from "./game-artist";
// import {INITIAL_GAME} from "../game-logic";

const gameScreenTemplate = `<section class="game">
    <!-- header -->
    <!-- screen -->
  </section>`;

// let game;
//
// const startGame = () => {
//   game = Object.assign({}, INITIAL_GAME);
//
//   const updateGame = (state) => {
//     console.log(state);
//   };
//
//   updateGame(game);
//
// };
//
// startGame();

const gameScreen = getElementFromTemplate(gameScreenTemplate);

// const gameSection = document.querySelector(`section.gameScreen`)

// gameScreen.classList.add(`game--genre` || `game--artist`);

gameScreen.appendChild(header);
gameScreen.appendChild(gameGenre && gameArtist);

export default gameScreen;
