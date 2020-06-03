import Flickity from 'flickity'

document.addEventListener('DOMContentLoaded', () => {
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    contain: true
  });
}
