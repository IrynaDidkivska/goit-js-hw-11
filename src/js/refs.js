export default function getRefs() {
    return {
      formEl: document.querySelector('.search-form'),
      submitBtnEl: document.querySelector('button'),
      gallery: document.querySelector('.gallery'),
      loadMoreBtn: document.querySelector('.load-more')
  };
}
