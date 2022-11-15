const fasad = document.querySelector('#fasad');
const plan = document.querySelector('#plan')
const changeImg = document.querySelector('#change-img');  
const btnMenu = document.querySelector('.btn__menu');
const navMenuMob = document.querySelector('.nav__menu-mob');

// plan.addEventListener('click', function() {
//   changeImg.src = './img/petra-plan.jpg'
//   console.log('./img/petra-plan.jpg');
// })

// fasad.addEventListener('click', function() {
//   changeImg.src = './img/petra-fasad.png'
//   console.log('./img/petra-fasad.png');
// })


btnMenu.addEventListener('click', function() {
  navMenuMob.classList.toggle('nav__menu-mob--active');
})