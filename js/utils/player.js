export default class Player {
  constructor(track) {
    this.track = track;
    this.playButton = this.track.querySelector(`.track__button`);
    this._audio = this.track.querySelector(`audio`);
  }

  _toggle() {
    this.playButton.classList.toggle(`track__button--play`);
    this.playButton.classList.toggle(`track__button--pause`);
    this.isPlaying = !this.isPlaying;
  }

  play() {
    if (!this.isPlaying) {
      this._audio.play();
      this._toggle();
    }
  }

  pause() {
    if (this.isPlaying) {
      this._audio.pause();
      this._toggle();
    }
  }
}
