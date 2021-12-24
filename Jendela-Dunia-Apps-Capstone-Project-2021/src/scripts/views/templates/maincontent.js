class Maincontent {
  static mainContent(book) {
    const { volumeInfo } = book;
    this._templateHtml(book, volumeInfo);
  }

  // eslint-disable-next-line class-methods-use-this
  static _templateHtml(book, volumeInfo) {
    const {
      title, authors, publisher, imageLinks, pageCount,
    } = volumeInfo;
    document.querySelector('#mainContent').innerHTML += `
    <div class="container-search__results">

      <div class='image-book'>
        <img src="${imageLinks.smallThumbnail}"/>
      </div>

      <div class='items-book'>
        <h2><a href="${`/#/detail/${book.id}`}">${title}</a></h2>
        <p><span class='p-authors'>${authors}</span></p>
        <br>
        <p>Penerbit : <span class='p-publisher'>${publisher} </span></p>
        <p>Jumlah halaman : <span class='p-pageCount'>${pageCount}</span></p>
      </div>
      
      </div>
        `;
  }
}

export default Maincontent;
