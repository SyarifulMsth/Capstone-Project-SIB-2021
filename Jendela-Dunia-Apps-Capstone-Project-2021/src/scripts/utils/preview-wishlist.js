class PreviewWishlist {
  static preview(books) {
    // eslint-disable-next-line no-unused-vars
    const { id, title, publisher } = books;
    const btnPreview = document.querySelectorAll('.preview-btn');
    btnPreview.forEach((preview) => {
      preview.addEventListener('click', (event) => {
        // eslint-disable-next-line max-len
        alert(event.target.previousElementSibling.previousElementSibling.innerHTML);
        const a = event.target.previousElementSibling.previousElementSibling.previousElementSibling;
        console.log(a.innerHTML);
      });
    });
  }
}

export default PreviewWishlist;
