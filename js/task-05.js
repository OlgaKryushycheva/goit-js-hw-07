const inputTextEl = document.querySelector('#name-input');
const outputTextEl = document.querySelector('#name-output');
const defaultOutputValue = outputTextEl.textContent;

console.log(inputTextEl.value);

inputTextEl.addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    outputTextEl.textContent = defaultOutputValue;
  } else {
    outputTextEl.textContent = event.currentTarget.value;
  }
});
