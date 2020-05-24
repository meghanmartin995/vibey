const whiteHeart = '<i class="far fa-heart"></i>';
const blackHeart = '<i class="fas fa-heart"></i>';
const button = document.querySelector('.heart');
// const counter = document.querySelector('.counter')
button.addEventListener('click', like);

function like() {
  const like = button.innerHTML;
  // const number = parseInt(counter.innerText)
  // console.log(number)
  if(like==whiteHeart) {
    button.innerHTML = blackHeart;
    // counter.innerText =+ 1
  } else {
    button.innerHTML = whiteHeart;
  }
}



export default like
