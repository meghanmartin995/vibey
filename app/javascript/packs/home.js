$('#dynamic').on('click', home)

function home() {
  $(this).lightGallery({
    dynamic: true,
    pager: true,
    counter: false,
    dynamicEl: [{
        "src": `https://source.unsplash.com/random`
    }, {
        'src': 'https://source.unsplash.com/random'
    }, {
        'src': 'https://source.unsplash.com/random'
    }]
  })
}

export default home

// <%= asset_path('fancier.png') %>
