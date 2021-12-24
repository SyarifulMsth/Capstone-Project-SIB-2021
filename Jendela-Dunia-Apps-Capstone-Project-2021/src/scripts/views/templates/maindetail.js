class maindetail {
  static detailContent(books) {
    const { volumeInfo } = books;
    this._templateHtml(volumeInfo);
  }

  // eslint-disable-next-line class-methods-use-this
  static _templateHtml(volumeInfo) {
    const {
      title, authors, publisher, imageLinks, publishedDate,
      pageCount, language, description, categories,
    } = volumeInfo;
    const containerDetail = document.querySelector('#detail');
    containerDetail.innerHTML = '';
    containerDetail.innerHTML += `

    <div class="container-search__details">
        <div class='image-book__detail'>
          <img src="${imageLinks.thumbnail}" />
        </div>


        <div class='items-book__detail'>
            <h2>${title}</h2>
            <p>${authors}</p>
            <br>
          
            <h3> Deskripsi singkat buku</h3> 
            <div class='deskripsi'>
              <p>${description}</p>       
            </div>
            <br>
            
            <p>Penerbit: ${publisher}</p>
            <p>Kategori : ${categories}</p>
            <p>Tanggal terbit: ${publishedDate}</p>
            <p>Bahasa: ${language}</p>
            <p id="page">Jumlah halaman : ${pageCount}</p>
          </div>
          
            <button aria-label="like this movie" id="btn-wishlist" class="like">
              <i class="fa fa-bookmark-o" aria-hidden="true"></i>
            </button>

       <button id="btn-proggres"><a href="${'/#/proggres'}">Proggres</a></button>

      </div>
    `;
  }
}

export default maindetail;
