class AddWishlist {
  static templateWishlist(books) {
    const { title, publisher } = books;
    const containerWihlist = document.querySelector('#items-wishlist');
    containerWihlist.innerHTML += `
      <li>
        <h4>${title}</h4>
        <p>${publisher}</p>
        <button id="btn-preview">preview</button>
        <button id="btn-delete">delete</button>
      </li>
    `;
    console.log(title);
    console.log(publisher);
  }
}

export default AddWishlist;
