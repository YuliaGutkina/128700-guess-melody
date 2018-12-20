import WelcomeView from "./welcome-view";
import App from "../app";

export default class WelcomePresenter {
  constructor() {
    this.welcome = new WelcomeView();
  }

  get element() {
    this.welcome.onPlay = App.showGame;
    return this.welcome.element;
  }

  showLoader() {
    this.welcome.element.replaceChild(this.welcome.loader, this.welcome.playBtn);
  }

  showStart() {
    this.welcome.element.replaceChild(this.welcome.playBtn, this.welcome.loader);
  }
}
