const addPlayer = (track) => {
  const playBtn = track.querySelector(`.track__button`);
  let isPlaying = false;
  const audio = track.querySelector(`audio`);
  playBtn.addEventListener(`click`, () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    playBtn.classList.toggle(`track__button--play`);
    playBtn.classList.toggle(`track__button--pause`);
    isPlaying = !isPlaying;
  });
};

export default addPlayer;
