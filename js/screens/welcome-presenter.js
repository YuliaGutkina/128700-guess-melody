import WelcomeView from "./welcome-view";
import App from "../app";

export default class WelcomePresenter {
  constructor() {
    //
  }

  get element() {
    const welcome = new WelcomeView();
    welcome.onPlay = App.showGame;
    return welcome.element;
  }
}
