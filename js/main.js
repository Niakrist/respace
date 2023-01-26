// const fasad = document.querySelector('#fasad');
// const plan = document.querySelector('#plan')
// const changeImg = document.querySelector('#change-img');  
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

/* */

const slider = document.querySelector('#slider');
const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');

const sliderList = document.querySelectorAll('#slider .slide__img');



sliderList.forEach(function (slide, index) {
  slide.dataset.index = index;

  if (index != 0) slide.classList.add('hidden');

  sliderList[0].setAttribute('data-active', '');

  slide.addEventListener('click', function () {
    this.classList.add('hidden');
    this.removeAttribute('data-active');

    const slideNextIndex = Number(slide.dataset.index) + 1 < sliderList.length ? Number(slide.dataset.index) + 1 : 0;
    console.log(slideNextIndex + ' - ' + sliderList.length)

    const slideNext = slider.querySelector(`[data-index='${slideNextIndex}']`);
    slideNext.classList.remove('hidden');
    slideNext.setAttribute('data-active', '');
  });
}); 0

/* click arrow right */

arrowRight.addEventListener('click', function (event) {
  event.preventDefault();
  const slideCurret = document.querySelector('[data-active]');
  const slideCurretIndex = slideCurret.dataset.index;
  slideCurret.classList.add('hidden');
  slideCurret.removeAttribute('data-active');

  const slideNextIndex = Number(slideCurretIndex) + 1 < sliderList.length ? Number(slideCurretIndex) + 1 : 0;
  const slideNext = document.querySelector(`[data-index='${slideNextIndex}']`);
  slideNext.classList.remove('hidden');
  slideNext.setAttribute('data-active', '');
})

/* click arrow left */

arrowLeft.addEventListener('click', function(event) {
  event.preventDefault();
  const slideCurrent = document.querySelector('[data-active]');
  const slideCurrentIndex = slideCurrent.dataset.index;
  slideCurrent.classList.add('hidden');
  slideCurrent.removeAttribute('data-active');

  const slidePrevIndex = Number(slideCurrentIndex) - 1 >= 0 ? Number(slideCurrentIndex) - 1 : sliderList.length - 1;
  const slidePrev = document.querySelector(`[data-index='${slidePrevIndex}']`);
  slidePrev.classList.remove('hidden');
  slidePrev.setAttribute('data-active', '');
})