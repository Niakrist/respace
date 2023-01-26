// const fasad = document.querySelector('#fasad');
// const plan = document.querySelector('#plan')
// const changeImg = document.querySelector('#change-img');  
// const btnMenu = document.querySelector('.btn__menu');
// const navMenuMob = document.querySelector('.nav__menu-mob');

// plan.addEventListener('click', function() {
//   changeImg.src = './img/petra-plan.jpg'
//   console.log('./img/petra-plan.jpg');
// })

// fasad.addEventListener('click', function() {
//   changeImg.src = './img/petra-fasad.png'
//   console.log('./img/petra-fasad.png');
// })


// btnMenu.addEventListener('click', function() {
//   navMenuMob.classList.toggle('nav__menu-mob--active');
// })

/* */

const slider = document.querySelector('#slider');
const sliderList = document.querySelectorAll('#slider .slide__img');
console.log(sliderList);

sliderList.forEach(function(slide, index) {
  slide.dataset.index = index;
  
  if (index != 0) slide.classList.add('hidden');

  sliderList[0].setAttribute('data-active', '');

  slide.addEventListener('click', function() {
    this.classList.add('hidden');
    this.removeAttribute('data-active');

    const slideNextIndex = Number(slide.dataset.index) + 1 < sliderList.length ? Number(slide.dataset.index) + 1 : 0;
    console.log(slideNextIndex +' - ' + sliderList.length)
    const slideNext = slider.querySelector(`[data-index='${slideNextIndex}']`);
    slideNext.classList.remove('hidden');
  })


})
