class maindetail {
  static detailContent(books) {
    const { volumeInfo } = books;
    this._templateHtml(volumeInfo);
  }

  // eslint-disable-next-line class-methods-use-this
  static _templateHtml(volumeInfo) {
    const {
      title, authors, publisher, imageLinks, publishedDate, pageCount, language, description,
    } = volumeInfo;
    const containerDetail = document.querySelector('#detail');
    containerDetail.innerHTML = '';
    containerDetail.innerHTML += `
    <li>
        <img src="${imageLinks.small}" />
         <h2>${title}</h2>
        <p>Authors: ${authors}</p>
        <p>Publisher: ${publisher}</p>
        <p>publishedDate: ${publishedDate}</p>
        <p id="page">page : ${pageCount}</p>
        <p>language: ${language}</p>
        <p>description: ${description}</p>
      </li>
       <button id="btn-wishlist">add to wishlist</button>
       <button id="btn-proggres"><a href="${'/#/proggres'}">Proggres</a></button>
    `;
  }
}

export default maindetail;
