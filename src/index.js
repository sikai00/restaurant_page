import 'normalize.css';
import './style.css';
import createHome from './home.js';
import createMenu from './menu.js'
import createLocations from './locations';
import createReservations from './reservations';

const menu_list = [
  ['beef wellington', 'filet mignon, puff pastry, green peppercorn sauce, swiss chard', '80'],
  ['smoked duck breast', 'grilled zucchini, capsicum, hoi sin & ginger', '28'],
  ['smoked salmon', 'pickled beetroot, crostini, ginger mayo, tobiko', '32'],
  ['slow cooked lamb loin', 'mashed potato, broccolini with lamb fat vinaigrette, lamb jus', '48'],
  ['paperbag oven-baked halibut fillet', 'soy and ginger broth, sesame Japanese rice, wakame & truffle aioli', '32'],
];

const location = '20 Kensington Park Rd, Singapore 557269';

function clearContent() {
  const content = document.querySelector('#content');
  content.textContent = '';
}

function home() {
  clearContent();
  createHome();
}

function menu() {
  clearContent();
  createMenu(menu_list);
}

function locations() {
  clearContent();
  createLocations(location);
}

function reservations() {
  clearContent();
  createReservations();
}

document.querySelector('.home-btn').addEventListener('click', home);
document.querySelector('.menu-btn').addEventListener('click', menu);
document.querySelector('.locations-btn').addEventListener('click', locations);
document.querySelector('.reservations-btn').addEventListener('click', reservations);

document.querySelectorAll('.navbar button').forEach(btn => btn.addEventListener(
    'click', 
    () => {
      document.querySelectorAll('.navbar button').forEach(btn => btn.classList.remove('active'));
      btn.classList.add('active');
    })
  );

home();