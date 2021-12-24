class AddWishlist {
  static templateWishlist(books) {
    const { id, title, publisher } = books;
    const containerWihlist = document.querySelector('#items-wishlist');
    containerWihlist.innerHTML += `
      <div class='container-items__wishlist'>
          <p hidden>${id}</p>
          <h4>${title}</h4>
          <p>${publisher}</p>
        
        <button id="btn-preview" class="preview-btn">
          preview
        </button>
        
        <button id="btn-delete" class="delete-btn">
          delete
        </button>

    </div>

        `;
  }
}

export default AddWishlist;
