import database from '../data/database';

class deleteWishlist {
  // eslint-disable-next-line no-unused-vars
  static deleteBooks(books) {
    const btnDelete = document.querySelectorAll('.delete-btn');
    btnDelete.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        // eslint-disable-next-line max-len
        database.WishListDatabase.deleteBooks(event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
        // eslint-disable-next-line max-len
        this._cekDataBase(event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML);
      });
    });
  }

  static _cekDataBase(id) {
    if (id === database.WishListDatabase.getBooks(id)) {
      alert('data gagal di hapus');
    } else {
      alert('data berhasil di hapus, silahkan refres ulang');
    }
  }
}

export default deleteWishlist;
