class templateBooks {
  static createBooksTemplate(books) {
    books.forEach((book) => {
      const { volumeInfo } = book;
      const {
        title,
        authors = 'unknown',
        publisher = 'unknown',
        imageLinks,
      } = volumeInfo;

      document.querySelector('#mainContent').innerHTML += `
      <li>
      <h2><a href="#">${book.id}</a></h2>
        <h2><a href="${`/#/detail/${book.id}`}">${title}</a></h2>
        <img src="${imageLinks.smallThumbnail}"/>
        <p>Authors: ${authors}</p>
        <p>Publisher: ${publisher}</p>
      </li>
    `;
    });
  }

  static detailBooksTemplate(books) {
    const containerDetail = document.querySelector('#detail');
    containerDetail.innerHTML = '';
    const { volumeInfo } = books;
    const {
      title,
      authors = 'unknown',
      publisher = 'unknown',
      imageLinks,
    } = volumeInfo;

    containerDetail.innerHTML += `
    <li>
    <p>${books.id}</p>
        <h2>${title}</h2>
        <img src="${imageLinks.smallThumbnail}" />
        <p>Authors: ${authors}</p>
        <p>Publisher: ${publisher}</p>
      </li>
    `;
  }
}

export default templateBooks;
