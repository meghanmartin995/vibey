
const images = ["https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706815/Black_Overlay_Fashion_Photo_Instagram_Post_21_umqdx9.png", "https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706815/Black_Overlay_Fashion_Photo_Instagram_Post_21_umqdx9.png", "https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706814/Black_Overlay_Fashion_Photo_Instagram_Post_19_zhz1kq.png" ]
const section = document.querySelector(".website-images")
const sectionLg = document.querySelector(".thirty-body")
console.log(sectionLg)

let i = 0

function websiteImage(x, y) {
  const nextImage = images[i]
  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  console.log (img.style.left)
  img.style.top = y + "px"
  console.log (img.style.top)
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 10 - 5) + "deg)"
  sectionLg.appendChild(img)
  i = i + 1

  if (i >= images.length) {
    i = 0
  }
}

sectionLg.addEventListener("click", function (event) {
  event.preventDefault()
  websiteImage(event.pageX, event.pageY)
  console.log(event.pageX)
  console.log(event.pageY)
})

sectionLg.addEventListener("touchend", function (event) {
  event.preventDefault()
  websiteImage(event.pageX, event.pageY)
})

export default websiteImage
