let imagex = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1591646820/day_11_final_p78z84.mp4",
  caption: "This is my caption"
}

let image6 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595265967/new_zdzywv.mp4",
  caption: "This is my caption"
}

let image7 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595263214/Cuzu_qijtpf.mp4",
  caption: "This is my caption"
}

let image8 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595263954/day_9_nvhgth.mp4",
  caption: "This is my caption"
}

let image5 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595264149/don_t_believe_rljp2l.mp4",
  caption: "This is my caption"
}

let image2 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595264283/ezgif.com-gif-maker_1_pcnctb.mp4",
  caption: "This is my caption"
}

let image9 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595264760/Less_of_the_Same_f42a6k.mp4",
  caption: "This is my caption"
}

let image4 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595264832/fruit_finallzzz_modgzi.mp4",
  caption: "This is my caption"
}

let image3 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595265075/quaranfeeling_y0mb89.mp4",
  caption: "This is my caption"
}

let image1 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595265108/mermaid_moodboard_imocdx.mp4",
  caption: "This is my caption"
}

let image0 = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595283250/stayinsidetm_mojh5p.mp4",
  caption: "This is my caption"
}

let imagez = {
  imageFile: "https://res.cloudinary.com/dq61mo2kj/video/upload/v1595283441/figma_api_ibdubr.mp4",
  caption: "This is my caption"
}

const images = [image1, image2, imagex, image3, image4, image5, image6, image7, image0, image8, image9, imagez]
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
  // header.appendChild(p)
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

// if(document.getElementById('thirty-days')) {
//   document.querySelector('.clear').addEventListener('click', () => {
//     document.querySelectorAll('video').forEach(video => video.remove())
// })
// }

export default websiteImage
