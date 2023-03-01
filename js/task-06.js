const inputEl = document.querySelector('#validation-input');
const inputElNumber = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', () => {
  if (inputElNumber === inputEl.value.trim().length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});
