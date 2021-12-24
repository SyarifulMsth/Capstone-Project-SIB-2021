import maincontent from './maincontent';
import maindetail from './maindetail';

class templateBooks {
  static createBooksTemplate(books) {
    books.forEach((book) => {
      maincontent.mainContent(book);
    });
  }

  static detailBooksTemplate(books) {
    maindetail.detailContent(books);
  }
}

export default templateBooks;
