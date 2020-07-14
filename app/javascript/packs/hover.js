const images = document.querySelectorAll(".project-home")

const hover = () => {

images.forEach(image => {
  let currentX = 0
  let currentY = 0
  let aimX = 0
  let aimY = 0

  const updatePosition = function () {
    currentX += (aimX - currentX) * 0.2
    currentY += (aimY - currentY) * 0.2

    const div = image.querySelector("img")

    div.style.transform = `rotateX(${-18 * currentY}deg) rotateY(${18 * currentX}deg)`

    requestAnimationFrame(updatePosition)
  }

  updatePosition()

  document.addEventListener("mousemove", function (event) {
    aimX = (event.pageX - (window.innerWidth / 2)) / window.innerWidth
    aimY = (event.pageY - (window.innerHeight / 2)) / window.innerHeight
  })
})

}

if (window.innerWidth > 780) {

hover()

}

export default hover
