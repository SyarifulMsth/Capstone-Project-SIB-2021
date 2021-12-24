class PreviewWishlist {
  static preview(books) {
    const { title, publisher } = books;
    const btnpreview = document.getElementById('btn-preview');

    btnpreview.addEventListener('click', (event) => {
      event.preventDefault();

      alert(`${title} ${publisher} `);
    });
  }
}

export default PreviewWishlist;
