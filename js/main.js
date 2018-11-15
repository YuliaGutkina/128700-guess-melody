const screens = [];

screens.push(document.getElementById(`welcome`));
screens.push(document.getElementById(`game-genre`));
screens.push(document.getElementById(`game-artist`));
screens.push(document.getElementById(`result-success`));
screens.push(document.getElementById(`fail-time`));
screens.push(document.getElementById(`fail-tries`));

const mainSection = document.querySelector(`section.main`);
let currentScreenNumber = 0;

const showScreenFromArray = (num) => {
  const currentScreen = screens[num].content.cloneNode(true);
  mainSection.innerHTML = ``;
  mainSection.appendChild(currentScreen);
  currentScreenNumber = num;
};

showScreenFromArray(currentScreenNumber);

const showNextScreen = () => {
  if (currentScreenNumber === screens.length - 1) {
    showScreenFromArray(0);
  } else {
    showScreenFromArray(currentScreenNumber + 1);
  }
};

const showPrevScreen = () => {
  if (currentScreenNumber === 0) {
    showScreenFromArray(screens.length - 1);
  } else {
    showScreenFromArray(currentScreenNumber - 1);
  }
};

document.addEventListener(`keydown`, (e) => {
  if (e.keyCode === 39) {
    showNextScreen();
  }
  if (e.keyCode === 37) {
    showPrevScreen();
  }
});

const app = document.querySelector(`.app`);
const arrowsWrapTemplate = document.createElement(`template`);

arrowsWrapTemplate.innerHTML = `<div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>
</div>`;

app.appendChild(arrowsWrapTemplate.content);

const arrowsBtns = app.querySelectorAll(`.arrows__btn`);

arrowsBtns[0].addEventListener(`click`, showPrevScreen);
arrowsBtns[1].addEventListener(`click`, showNextScreen);

