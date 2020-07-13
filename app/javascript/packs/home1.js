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
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706808/Black_Overlay_Fashion_Photo_Instagram_Post_3_b0ovst.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706814/Black_Overlay_Fashion_Photo_Instagram_Post_19_zhz1kq.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706807/Black_Overlay_Fashion_Photo_Instagram_Post_6_aajuqj.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706810/Black_Overlay_Fashion_Photo_Instagram_Post_17_exachq.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706808/Black_Overlay_Fashion_Photo_Instagram_Post_9_vjudbc.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706813/Black_Overlay_Fashion_Photo_Instagram_Post_16_a7emso.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706814/Black_Overlay_Fashion_Photo_Instagram_Post_11_wgeyzb.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706808/Black_Overlay_Fashion_Photo_Instagram_Post_15_gktbkj.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706816/Black_Overlay_Fashion_Photo_Instagram_Post_14_meaqtq.png'
    }

    ]
  })
}

export default home1


