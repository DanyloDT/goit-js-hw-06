const allItems = document.querySelectorAll('.item')
console.log('Number of categories:', allItems.length);
console.log(allItems);


allItems.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})