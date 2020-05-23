const checkbox = document.querySelector('input[name=theme]');

const toggle = () => {
  checkbox.addEventListener('change', function() {
      if(this.checked) {
          trans()
          document.documentElement.setAttribute('data-theme', 'dark')
      } else {
          trans()
          document.documentElement.setAttribute('data-theme', 'light')
      }
  })
}

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 180)
}

toggle()

export default toggle
