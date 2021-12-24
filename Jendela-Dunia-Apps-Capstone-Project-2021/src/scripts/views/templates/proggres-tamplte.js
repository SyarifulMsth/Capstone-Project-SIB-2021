class ProggresTamplte {
  static proggresTempalte(books) {
    const {
      title, publisher, pageCount,
    } = books;
    const containerWihlist = document.querySelector('#proggress-items');
    containerWihlist.innerHTML += `
      <li>
        <h4>${title}</h4>
        <p>${publisher}</p>
        <p>${pageCount}</p>
      </li>
    `;
  }
}

export default ProggresTamplte;
