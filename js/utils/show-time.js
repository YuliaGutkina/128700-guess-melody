const showTime = (time, electronic) => {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  if (electronic) {
    min = (min < 10) ? `0${min}` : min.toString();
    sec = (sec < 10) ? `0${sec}` : sec.toString();
  }
  return {min, sec};
};

export default showTime;
