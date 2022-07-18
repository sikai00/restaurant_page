import MapImage from './map.png';

export default function createLocations(locations) {
  const content = document.querySelector('#content');

  const map = new Image();
  map.classList.add('map');
  map.src = MapImage;
  content.appendChild(map);

  const location = document.createElement('div');
  location.classList.add('location');
  location.textContent = locations;

  content.appendChild(location);
}