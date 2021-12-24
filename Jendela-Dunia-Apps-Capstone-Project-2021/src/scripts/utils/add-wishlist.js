import database from '../data/database';

const addWishlist = {
  async init({ books }) {
    this._books = books;

    await this._renderContainerBtn();
  },

  async _renderContainerBtn() {
    const { id } = this._books;

    if (await this._isBooksExist(id)) {
      this._notifikasiNotWishlist();
    } else {
      this._notifkasiWishList();
    }
  },

  async _isBooksExist(id) {
    const books = await database.WishListDatabase.getBooks(id);
    return !!books;
  },

  _notifkasiWishList() {
    const btnWishlist = document.getElementById('btn-wishlist');
    btnWishlist.addEventListener('click', async () => {
      await database.WishListDatabase.putBooks(this._books);
      alert(`data tersimpan : ${this._books.title}`);
      this._renderContainerBtn();
    });
  },

  _notifikasiNotWishlist() {
    const btnWishlist = document.getElementById('btn-wishlist');
    btnWishlist.addEventListener('click', async () => {
      alert(`data sudah ada : ${this._books.title}"`);
    });
  },
};

export default addWishlist;
