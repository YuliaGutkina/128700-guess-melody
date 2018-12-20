import {GAME_TIME} from "../game";

const convertTime = (time, electronic, countDown) => {
  if (countDown) {
    time = GAME_TIME - time;
  }
  let min = Math.floor(time / 60);
  let sec = time % 60;
  if (electronic) {
    min = (min < 10) ? `0${min}` : min.toString();
    sec = (sec < 10) ? `0${sec}` : sec.toString();
  }
  return {min, sec};
};

export default convertTime;
