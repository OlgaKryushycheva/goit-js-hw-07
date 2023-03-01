const valueEl = document.querySelector('#value');
const buttonDecrEl = document.querySelector('#counter button[data-action="decrement"]');
const buttonIncrEl = document.querySelector('#counter button[data-action="increment"]');

let counterValue = 0;

function handleDecrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function handleIncrement() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

buttonDecrEl.addEventListener('click', handleDecrement);

buttonIncrEl.addEventListener('click', handleIncrement);
