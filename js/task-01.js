const categoriesEl = document.querySelector('#categories');
const categoriesItem = categoriesEl.children;
console.log('Number of categories: ', categoriesItem.length);

for (const item of categoriesItem) {
  const CategoryName = item.firstElementChild.textContent;
  const ElementsNumber = item.lastElementChild.children.length;

  console.log('Category: ', CategoryName);
  console.log('Elements: ', ElementsNumber);
}
