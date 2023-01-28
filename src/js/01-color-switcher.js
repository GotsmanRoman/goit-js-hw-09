const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  hexField: document.querySelector(".container__hex"),
  body: document.querySelector('body'),
};
let intervalId = null;
const INTERVAL_TIMER = 1000;
refs.hexField.textContent = refs.body.style.backgroundColor;


const colorResult = function setRandomBgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.hexField.textContent = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refs.startBtn.addEventListener('click', () => {
  refs.startBtn.setAttribute('disabled', 'disabled');
  intervalId = setInterval(colorResult, INTERVAL_TIMER);
});
refs.stopBtn.addEventListener('click', () => {
  refs.startBtn.removeAttribute('disabled');
  clearInterval(intervalId);
});
