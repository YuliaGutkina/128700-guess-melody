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

  play() {
    const playPromise = this._audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.playBtn.classList.toggle(`track__button--play`);
          this.playBtn.classList.toggle(`track__button--pause`);
          this.isPlaying = !this.isPlaying;
        })
        .catch(() => {
          this._audio.pause();
        });
    }
  }

  pause() {
    this._audio.pause();
    this.playBtn.classList.toggle(`track__button--play`);
    this.playBtn.classList.toggle(`track__button--pause`);
    this.isPlaying = !this.isPlaying;
  }
}
