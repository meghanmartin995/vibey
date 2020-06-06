let image1 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706815/Black_Overlay_Fashion_Photo_Instagram_Post_21_umqdx9.png",
  caption: "This is my caption"
}

let image2 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706815/Black_Overlay_Fashion_Photo_Instagram_Post_21_umqdx9.png",
  caption: "This is my caption"
}

const images = [image1, image2]
const section = document.querySelector(".website-images")
const sectionLg = document.querySelector(".thirty-body")
const header = document.querySelector(".thirty-header")

let i = 0

function websiteImage(x, y) {
  const nextImage = images[i].imageFile
  const caption = images[i].caption
  const img = document.createElement("img")
  const p = document.createElement("p")
  p.innerHTML = caption

  img.setAttribute("src", nextImage)
  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 10 - 5) + "deg)"


  sectionLg.appendChild(img)
  header.appendChild(p)
  // node.after(img)
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
