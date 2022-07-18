export default function createHome() {
  const content = document.querySelector('#content');

  const splash = document.createElement('div');
  splash.classList.add('splash');
  
  content.appendChild(splash);
}