'use strict';

const menu = {
  id: 1,
}
function displayAll() {
  content = '';
  menubar.array.forEach((dish) => {
    let individualDish = ``;
    content += individualDish;
 });
}

let allDishes = document.getElementById('allDishes');

let content = '';

// menubar.array.forEach((dish) => {
//    let individualDish = ``;
//    content += individualDish;
// });

allDishes.innerHtml = content;

// filter logic here
let allButtons = document.querySelectorAll('button');
allButtons.forEach((button) => addEventListener('click', (e) => {filterItems(e.target.innerText)}));

function filterItems(category) {
   allDishes.innerHTML += '';
  if (category === 'All') {
    displayAll(menu);
  }else {
    const filteredItems = menu.filter(
      (dish) => dish.title.toLowerCase() === category.toLowerCase());
  }
  displayAll(filteredItems);
}
// JSON is commonly used for data interchange in API communication. What does JSON stand for?






























































