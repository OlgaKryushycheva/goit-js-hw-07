function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', () => {
  const BackGroundcolorEl = getRandomHexColor();
  bodyEl.style.backgroundColor = BackGroundcolorEl;
  colorEl.textContent = BackGroundcolorEl;
});
