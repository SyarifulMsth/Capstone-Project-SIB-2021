class templateBooks {
  static createBooksTemplate(books) {
    books.forEach((book) => {
      const { volumeInfo } = book;
      const {
        title,
        authors = 'unknown',
        publisher = 'unknown',
        imageLinks,
        pageCount,
      } = volumeInfo;

      document.querySelector('#mainContent').innerHTML += `
      <div class="container-search__results">
        <div class='image-book'>
          <img src="${imageLinks.thumbnail}" />
        </div>

        <div class='items-book'>
            <h2><a href="${`/#/detail/${book.id}`}">${title}</a></h2>
            <p><span class='p-authors'>${authors}</span></p>
            <p>Penerbit : <span class='p-publisher'>${publisher} </span></p>
            <p>Jumlah halaman : <span class='p-pageCount'>${pageCount}</span></p>
            <button class='btn-wishlist'>+ add to wishlist</button>
        </div>
      </div>
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
