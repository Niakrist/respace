const fasad = document.querySelector('#fasad');
const plan = document.querySelector('#plan')
const changeImg = document.querySelector('#change-img');  

plan.addEventListener('click', function() {
  changeImg.src = './img/petra-plan.jpg'
  console.log('./img/petra-plan.jpg');
})

fasad.addEventListener('click', function() {
  changeImg.src = './img/petra-fasad.png'
  console.log('./img/petra-fasad.png');
})
