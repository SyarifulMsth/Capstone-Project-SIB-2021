import database from '../../data/database';
import proggresTamplte from '../templates/proggres-tamplte';

const Proggres = {
  async render() {
    return `
    <div id="proggress-items">
     
    </div>
    `;
  },

  async afterRender() {
    const books = await database.proggresDatabase.getALlBook();
    books.forEach((book) => {
      proggresTamplte.proggresTempalte(book);
    });
  },

};

export default Proggres;
