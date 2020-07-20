let image1 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1591646820/day_11_final_p78z84.mp4",
  caption: "This is my caption"
}

let image2 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1591646820/day_11_final_p78z84.mp4",
  caption: "This is my caption"
}

const images = [image1, image2]
const section = document.querySelector(".website-images")
const sectionLg = document.querySelector(".thirty-body")
const header = document.querySelector(".thirty-header")
const clear = document.querySelector(".clear")


let i = 0

function websiteImage(x, y) {
  const nextImage = images[i].imageFile
  const caption = images[i].caption
  const img = document.createElement("video")
  // console.log(img)
  // const p = document.createElement("p")
  // p.innerHTML = caption

  img.setAttribute("src", nextImage)
  img.autoplay = true
  img.style.left = x + "px"
  img.style.top = y + "px"
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 10 - 5) + "deg)"


  sectionLg.appendChild(img)
  header.appendChild(p)
  i = i + 1

  if (i >= images.length) {
    i = 0
  }
}

if(document.getElementById('thirty-days')) {
  sectionLg.addEventListener("click", function (event) {
    event.preventDefault()
    websiteImage(event.pageX, event.pageY)
    console.log(event.pageX)
    console.log(event.pageY)
  })
}

if(document.getElementById('thirty-days')) {
  sectionLg.addEventListener("touchend", function (event) {
    event.preventDefault()
    websiteImage(event.pageX, event.pageY)
  })
}


const videos = document.querySelectorAll('video')

if(document.getElementById('thirty-days')) {
  document.querySelector('.clear').addEventListener('click', () => {
    document.querySelectorAll('video').forEach(video => video.remove())
})
}

export default websiteImage
