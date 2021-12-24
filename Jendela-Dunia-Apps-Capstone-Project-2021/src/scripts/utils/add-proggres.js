import database from '../data/database';

const addProggres = {
  async init({ books }) {
    this._books = books;

    this._renderContainerBtn();
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
    const books = await database.proggresDatabase.getBook(id);
    return !!books;
  },

  _notifkasiWishList() {
    const btnWishlist = document.getElementById('btn-proggres');
    btnWishlist.addEventListener('click', async () => {
      await database.proggresDatabase.putBook(this._books);
      alert(`data tersimpan diproggres: ${this._books.title}`);
      this._renderContainerBtn();
    });
  },

  _notifikasiNotWishlist() {
    const btnWishlist = document.getElementById('btn-proggres');
    btnWishlist.addEventListener('click', async () => {
      alert(`data sudah ada : ${this._books.title}"`);
    });
  },
};

export default addProggres;
