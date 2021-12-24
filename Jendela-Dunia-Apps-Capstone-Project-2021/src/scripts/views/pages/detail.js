import UrlParser from '../../routes/url-parser';
import detailBooks from '../../utils/detailBooks';
import addWishlist from '../../utils/add-wishlist';
import addProggres from '../../utils/add-proggres';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
      <div id="detail"></div>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const books = await detailBooks(url.id);
    this._addToWishlist(books);
    this._addToProggres(books);
  },

  _addToWishlist(books) {
    const { volumeInfo } = books;
    addWishlist.init({
      books: {
        id: books.id,
        title: volumeInfo.title,
        publisher: volumeInfo.publisher,
        pageCount: volumeInfo.pageCount,
      },
    });
  },

  _addToProggres(books) {
    const { volumeInfo } = books;
    addProggres.init({
      books: {
        id: books.id,
        title: volumeInfo.title,
        publisher: volumeInfo.publisher,
        description: volumeInfo.description,
        pageCount: volumeInfo.pageCount,
        printedPageCount: volumeInfo.printedPageCount,
      },
    });
  },
};

export default Detail;
