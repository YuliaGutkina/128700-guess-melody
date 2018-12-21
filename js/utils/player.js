export default class Player {
  constructor(track) {
    this.track = track;
    this.playButton = this.track.querySelector(`.track__button`);
    this._audio = this.track.querySelector(`audio`);
  }

  toggle() {
    return (this.isPlaying) ? this.pause() : this.play();
  }

  play() {
    if (!this.isPlaying) {
      this._audio.play();
      this.playButton.classList.toggle(`track__button--play`);
      this.playButton.classList.toggle(`track__button--pause`);
      this.isPlaying = true;
    }
  }

  pause() {
    if (this.isPlaying) {
      this._audio.pause();
      this.playButton.classList.toggle(`track__button--play`);
      this.playButton.classList.toggle(`track__button--pause`);
      this.isPlaying = false;
    }
  }
}
