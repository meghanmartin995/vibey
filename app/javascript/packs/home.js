
const dynamic = document.querySelector("#dynamic")

if (dynamic) {

  $('#dynamic').on('click', home)
}

function home() {
  $(this).lightGallery({
    dynamic: true,
    pager: true,
    counter: false,
    download: false,
    loop: false,
    dynamicEl: [{
        "src": `https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706815/Black_Overlay_Fashion_Photo_Instagram_Post_21_umqdx9.png`
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706820/Black_Overlay_Fashion_Photo_Instagram_Post_20_z6keeh.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706808/Black_Overlay_Fashion_Photo_Instagram_Post_3_b0ovst.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706814/Black_Overlay_Fashion_Photo_Instagram_Post_19_zhz1kq.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706807/Black_Overlay_Fashion_Photo_Instagram_Post_6_aajuqj.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706810/Black_Overlay_Fashion_Photo_Instagram_Post_17_exachq.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1595524864/Black_Overlay_Fashion_Photo_Instagram_Post_22_ywsord.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1595525064/Black_Overlay_Fashion_Photo_Instagram_Post_23_xj3yni.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1595525286/Black_Overlay_Fashion_Photo_Instagram_Post_24_gqxfva.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1595525383/Black_Overlay_Fashion_Photo_Instagram_Post_25_w1gq6v.png'
    }, {
        'src': 'https://res.cloudinary.com/dq61mo2kj/image/upload/v1590706816/Black_Overlay_Fashion_Photo_Instagram_Post_14_meaqtq.png'
    }

    ]
  })
}

export default home

// <%= asset_path('fancier.png') %>
