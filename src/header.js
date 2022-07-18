export default function createHeader(active) {
  const content = document.querySelector('#content');

  const header = document.createElement('div');
  header.classList.add('header');

  const logo = document.createElement('div');
  logo.classList.add('logo');
  logo.textContent = 'BIRCH';
  header.appendChild(logo);

  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  header.appendChild(navbar);

  const ul = document.createElement('ul');
  const nav_items = ['HOME', 'MENU', 'LOCATIONS', 'RESERVATIONS'];
  for (let item of nav_items) {
    const li = document.createElement('button');
    li.textContent = item
    if (active == item) {
      li.classList.add('active');
    }
    ul.appendChild(li)
  }
  navbar.appendChild(ul);

  content.appendChild(header);
}