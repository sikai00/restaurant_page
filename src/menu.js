export default function createMenu(menu_items) {
  const content = document.querySelector('#content');

  const menu = document.createElement('div');
  menu.classList.add('menu');
  for (let item of menu_items) {
    menu.appendChild(createMenuItem(item));
  }

  content.appendChild(menu);
}

// [name, price, description]
function createMenuItem(menu_item) {
  const item = document.createElement('div');
  item.classList.add('menu-item');
  
  const name = document.createElement('div');
  name.textContent = menu_item[0];
  name.classList.add('name');
  
  const price = document.createElement('div');
  price.textContent = menu_item[2];
  price.classList.add('price');
  
  const description = document.createElement('div');
  description.textContent = menu_item[1];
  description.classList.add('description');

  item.appendChild(name);
  item.appendChild(price);
  item.appendChild(description);
  
  return item;
}