export default class Player {
  constructor(track) {
    this.track = track;
    this.isPlaying = false;
    this.playBtn = this.track.querySelector(`.track__button`);
    this._audio = this.track.querySelector(`audio`);
    this.playBtn.addEventListener(`click`, () => {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    });
  }

  async play() {
    await this._audio.play();
    this.playBtn.classList.toggle(`track__button--play`);
    this.playBtn.classList.toggle(`track__button--pause`);
    this.isPlaying = !this.isPlaying;
  }

  pause() {
    this._audio.pause();
    this.playBtn.classList.toggle(`track__button--play`);
    this.playBtn.classList.toggle(`track__button--pause`);
    this.isPlaying = !this.isPlaying;
  }
}
