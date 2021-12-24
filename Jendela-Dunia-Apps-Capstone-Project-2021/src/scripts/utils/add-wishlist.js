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
      console.log('data terkirim');
    } else {
      this._notifkasiWishList();
      console.log('data tidak terkirim');
    }
  },

  async _isBooksExist(id) {
    const books = await database.WishListDatabase.getBooks(id);
    return !!books;
  },

  _notifkasiWishList() {
    const btnWishlist = document.getElementById('btn-wishlist');
    btnWishlist.addEventListener('click', async () => {
      console.log(this._books);
    });
  },

  _notifikasiNotWishlist() {
    const btnWishlist = document.getElementById('btn-wishlist');
    btnWishlist.addEventListener('click', async () => {
      console.log('click bukud');
    });
  },
};

export default addWishlist;
