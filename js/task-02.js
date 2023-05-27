const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')

const makeItemCard = infoEl => {
  const itemEl = document.createElement('li')
  itemEl.textContent = infoEl
  itemEl.classList.add('item')
  return itemEl
}

const itemArr = ingredients.map(element => {
  return makeItemCard(element)
})

listEl.append(...itemArr)

console.log(itemArr);