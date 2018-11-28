import changeScreen from "./utils/change-screen";
import WelcomeView from "./screens/welcome-view";
import GameView from "./screens/game-view";
import {INITIAL_GAME} from "./game-logic";
import LevelView from "./screens/level-view";
import {gameResults, levels} from "./data/game-data";
import changeLevelScreen from "./change-level-screen";
import ResultsView from "./screens/results-view";

const welcomeView = new WelcomeView();
const gameView = new GameView(INITIAL_GAME);

const showResults = (result) => {
  const resultsView = new ResultsView(result);
  resultsView.onReplay = () => {
    changeScreen(welcomeView.element);
  };
  changeScreen(resultsView.element);
};

welcomeView.onPlay = () => {
  changeScreen(gameView.element);
  let levelCount = 0;
  const goToNextLevel = () => {
    const levelView = new LevelView(levels[levelCount]);
    changeLevelScreen(levelView.element);
    levelView.onSubmit = () => {
      if (levelCount < levels.length) {
        goToNextLevel();
      } else {
        showResults(gameResults.success);
      }
    };
    levelCount++;
  };
  goToNextLevel();
};

gameView.onReplay = () => {
  changeScreen(welcomeView.element);
};

changeScreen(welcomeView.element);
