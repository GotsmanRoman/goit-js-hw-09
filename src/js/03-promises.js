import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '280px',
  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '100px',
  clickToClose: true,
});
function showError(message, valueToFade = '2000') {
  Notiflix.Notify.failure(message, {
    timeout: valueToFade,
  });
}

const refs = {
  submitBtn: document.querySelector('button'),
  delayInput: document.querySelector("input[name='delay']"),
  stepInput: document.querySelector("input[name='step']"),
  amountInput: document.querySelector("input[name='amount']"),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

function successPromise({ position, delay }) {
  //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  showError(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function errorPromise({ position, delay }) {
  //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  showError(`❌ Rejected promise ${position} in ${delay}ms`);
}
function callPromise() {
  let delay = refs.delayInput.value * 1;
  let step = refs.stepInput.value * 1;
  for (let i = 1; i <= refs.amountInput.value; i++) {
    createPromise(i, delay).then(successPromise).catch(errorPromise);
    delay = delay + step;
  }
}

refs.submitBtn.addEventListener('click', e => {
  e.preventDefault();
  callPromise();
});
