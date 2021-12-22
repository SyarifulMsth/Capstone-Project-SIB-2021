import UrlParser from '../../routes/url-parser';
import detailBooks from '../../utils/detailBooks';

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
    console.log(books);
  },
};

export default Detail;
