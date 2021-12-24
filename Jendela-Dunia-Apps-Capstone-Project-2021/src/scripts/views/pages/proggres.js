import database from '../../data/database';
import proggresTamplte from '../templates/proggres-tamplte';

const Proggres = {
  async render() {
    return `
    <h2 class='progress-page'>Progress membaca</h2>
    <div id="proggress-items">
     
    </div>
    `;
  },

  async afterRender() {
    const books = await database.proggresDatabase.getALlBook();
    books.forEach((book) => {
      proggresTamplte.proggresTempalte(book);
      proggresTamplte.sisaPage(book);
    });
  },

};

export default Proggres;
