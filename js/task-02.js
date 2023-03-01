const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

function createItem(item) {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.textContent = item;
  return listEl;
}

const markup = ingredients.map(item => createItem(item));

ingredientsEl.append(...markup);
