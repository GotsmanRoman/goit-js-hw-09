import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  timePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  resetBtn: document.querySelector('button[data-reset]'),
  spans: document.querySelectorAll('.value'),
};
refs.startBtn.setAttribute('disabled', 'disabled');
let isTimerOn = false;
let intervalId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //console.log(selectedDates[0]);
    if (calcDelta() < 0) {
      showError();
      return;
    }
    checkNegativeDelta(calcDelta());
  },
};
Notiflix.Notify.init({
  width: '280px',
  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '100px',
  clickToClose: true,
});
function showError(valueToFade = '2000') {
  Notiflix.Notify.failure('Please choose a date in the future', {
    timeout: valueToFade,
  });
}

const getFutureDate = flatpickr(refs.timePicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function getCurrentDate() {
  return Date.now();
}
function calcDelta() {
  const datePicker = new Date(refs.timePicker.value);
  const delta = datePicker.getTime() - getCurrentDate();
  return delta;
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
function checkNegativeDelta(deltaMs) {
  if (deltaMs <= 0) {
    refs.startBtn.setAttribute('disabled', 'disabled');

    return true;
  }
  if (isTimerOn) {
    refs.startBtn.setAttribute('disabled', 'disabled');
    return;
  }
  refs.startBtn.removeAttribute('disabled');
}
function resetTimer() {
  isTimerOn = false;

  refs.timePicker.removeAttribute('disabled');
  clearInterval(intervalId);
  refs.spans.forEach(elem => {
    elem.innerHTML = '00';
  });
}

const timerVar = function fillTimer() {
  const deltaMs = calcDelta();
  if (checkNegativeDelta(deltaMs)) {
    clearInterval(intervalId);
    console.log('Пум! Акцію завершено!!!');
    return;
  }
  const resultObj = convertMs(deltaMs);
  for (elem in resultObj) {
    const formattedValue = addLeadingZero(resultObj[elem]);
    document.querySelector(`[data-${elem}]`).textContent = formattedValue;
  }
};
refs.startBtn.addEventListener('click', () => {
  isTimerOn = true;
  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.timePicker.setAttribute('disabled', 'disabled');
  intervalId = setInterval(timerVar, 1000);
});
refs.resetBtn.addEventListener('click', () => {
  resetTimer();
});
