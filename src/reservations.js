export default function createReservations() {
  const content = document.querySelector('#content');

  const contact = document.createElement('div');
  contact.textContent = '+65 6123 4576';
  
  const hours = document.createElement('div');
  hours.textContent = 'Operating hours: 1600 - 2230';

  content.appendChild(contact);
  content.appendChild(hours);
}