const fasad = document.querySelector('#fasad');
const plan = document.querySelector('#plan')
const changeImg = document.querySelector('#change-img');  

plan.addEventListener('click', function() {
  changeImg.href = './img/petra-plan.jpg'
})

fasad.addEventListener('click', function() {
  changeImg.href = './img/petra-fasad.jpg'
})