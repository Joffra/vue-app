import './style.css';
// import logoUrl from './assets/vite-logo.png';
// import './style.scss';

// Create on image element
// const logo = document.createElement('img');
// logo.src = logoUrl;
// logo.alt = 'Vite Logo';
// logo.width = 100;

// const message = document.getElementById('message');
// message.parentNode.insertBefore(logo, message);

// message.textContent = 'You just triggered HRM!';

//log environment values
// console.log('App Name:', import.meta.env.VITE_APP_NAME);
// console.log('App URL:', import.meta.env.VITE_API_URL);

// Click event
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const response = document.querySelector('p');

btn1.addEventListener('click', () => {
  response.textContent = 'La reponse est bonne';
  response.style.background = 'green';
  response.classList.add('show-response');
});

btn2.addEventListener('click', () => {
  response.textContent = 'La reponse est mauvaise';
  response.style.background = 'red';
  response.classList.add('show-response');
});

// Mouse event
const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
  mousemove.style.left = e.pageX + 'px';
  mousemove.style.top = e.pageY + 'px';
});

questionContainer.addEventListener('mouseover', () => {
  questionContainer.style.background = 'rgba(0, 0, 0, 0.6)';
});

questionContainer.addEventListener('mouseout', () => {
  questionContainer.style.background = 'black';
});

// Form events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
let pseudo = '';
let language = '';

inputName.addEventListener('input', (e) => {
  pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
  language = e.target.value;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector('form > div').innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Favorite Language: ${language}</h4>
    `;
  } else {
    alert('Veuillez accepter les CVG');
  }
});
