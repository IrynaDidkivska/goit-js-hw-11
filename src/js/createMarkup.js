import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import getRefs from './refs';
const refs = getRefs();
export function createCard(hits) {
    const cardMarkup = hits.map(hitsEl => {
        const { largeImageURL, webformatURL, tags, likes, views, comments, downloads } = hitsEl;
        return `<li class="photo-card">
        <a href="${largeImageURL}" class="thumb-link">
        <img class="thumb-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
        <div class="info">
        <p class="info-item">${likes} <b>Likes</b></p>
        <p class="info-item">${views} <b>Views</b></p>
        <p class="info-item">${comments} <b>Comments</b></p>
        <p class="info-item">${downloads} <b>Downloads</b></p>
        </div>
        </li>`})
        .join('');  
    refs.gallery.insertAdjacentHTML('beforeend', cardMarkup);
    lightbox.refresh();
}
    let lightbox = new SimpleLightbox('.gallery a', {
        navText: ['&#10094', '&#10095'],
        closeText: '&#10007',
        captionsData:	'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    })

