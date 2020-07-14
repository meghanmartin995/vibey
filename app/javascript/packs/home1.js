const dynamic2 = document.querySelector("#dynamic2")

if (dynamic2) {

$('#dynamic2').on('click', home1)

}

function home1() {
  $(this).lightGallery({
    dynamic: true,
    pager: true,
    counter: false,
    download: false,
    loop: false,
    dynamicEl: [{
        "src": `https://res.cloudinary.com/dq61mo2kj/image/upload/v1594661334/image_processing20200518-1504-r0dtrg-1_v2lygd.png`
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1594670310/Fancier_Screens_v1-01_uavvpi.png'
    }

    ]
  })
}

export default home1


