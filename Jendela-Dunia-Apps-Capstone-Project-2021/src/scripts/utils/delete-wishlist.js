import database from '../data/database';

class deleteWishlist {
  static deleteBooks(books) {
    const btnpreview = document.getElementById('btn-delete');
    btnpreview.addEventListener('click', (event) => {
      event.preventDefault();
      database.WishListDatabase.deleteBooks(books.id);
      this._cekDataBase(books.id);
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
