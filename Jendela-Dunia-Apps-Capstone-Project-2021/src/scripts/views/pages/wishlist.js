import database from '../../data/database';
import AddWishlist from '../templates/add-wishlist';

const Wishlist = {
  async render() {
    return `
      <h2>Wishlist Page</h2>
      <div class="wishlist">
       <div class="container-wishlist">
            <div id="items-wishlist">
            </div>
            </div>
        </div> 
      </div>
    `;
  },

  async afterRender() {
    const books = await database.WishListDatabase.getALlBooks();
    books.forEach((book) => {
      AddWishlist.templateWishlist(book);
    });
  },
};

export default Wishlist;
