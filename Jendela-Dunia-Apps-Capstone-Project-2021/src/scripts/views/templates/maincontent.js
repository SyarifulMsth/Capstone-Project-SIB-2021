class Maincontent {
  static mainContent(book) {
    const { volumeInfo } = book;
    this._templateHtml(book, volumeInfo);
  }

  // eslint-disable-next-line class-methods-use-this
  static _templateHtml(book, volumeInfo) {
    const {
      title, authors, publisher, imageLinks,
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
  }
}

export default Maincontent;
