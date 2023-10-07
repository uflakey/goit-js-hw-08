// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const modal = require('simpleLightbox');

console.log(galleryItems);
const containerGalary = document.querySelector('.gallery');

containerGalary.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    )
    .join('');
}

// const modal = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   close: false,
//   enableKeyboard: true,
// });
