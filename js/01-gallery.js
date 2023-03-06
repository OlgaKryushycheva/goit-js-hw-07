import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const makeGalleryCard = ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    data-source="${original}" 
    alt="${description}"/>
  </a>
</div>`;

const markup = galleryItems.map(el => makeGalleryCard(el)).join('');
galleryEl.innerHTML += markup;

galleryEl.addEventListener('click', onOpenModal);

// console.log(galleryEl);

function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const modal = basicLightbox.create(`<img src="${event.target.dataset.source}" />`);
  modal.show();

  window.addEventListener('keydown', onCloseModalByEscape);

  function onCloseModalByEscape(event) {
    if (event.code === 'Escape') {
      modal.close();

      window.removeEventListener('keydown', onCloseModalByEscape);
    }
  }
}
