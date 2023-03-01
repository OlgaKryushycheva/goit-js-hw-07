function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberEl = document.querySelector('[type="number"]');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

buttonCreateEl.addEventListener('click', onCreateBoxes);
buttonDestroyEl.addEventListener('click', onDestroyBoxes);

function onCreateBoxes() {
  let amount = inputNumberEl.value;
  let boxesCollectionArr = [];
  let boxesCollection;
  let baseSize = 30;
  let step = 10;

  for (let i = 0; i < amount; i++) {
    let markup = `<div style="width: ${baseSize}px;
    height: ${baseSize}px;
    background-color: ${getRandomHexColor()};
    border-radius: 4px;
    margin: 2px">
  </div>`;
    baseSize += step;

    boxesCollectionArr.push(markup);
    boxesCollection = boxesCollectionArr.join('');
  }

  boxesEl.insertAdjacentHTML('beforeend', boxesCollection);
}

function onDestroyBoxes() {
  boxesEl.innerHTML = '';
}

// == function onCreateBoxes через document.createElement =================
// но здесь backgroundColor в формате RGB. Почему????

// function onCreateBoxes() {
//   let amount = inputNumberEl.value;
//   let boxesCollectionArr = [];

//   let baseSize = 30;
//   let step = 10;

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.style.width = `${baseSize}px`;
//     box.style.height = `${baseSize}px`;
//     baseSize += step;
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.borderRadius = '4px';
//     box.style.margin = '2px';
//     boxesCollectionArr.push(box);
//   }
//   boxesEl.append(...boxesCollectionArr);
// }
