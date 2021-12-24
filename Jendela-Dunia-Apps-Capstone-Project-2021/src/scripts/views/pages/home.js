import searchElement from '../../utils/searchData';

const Home = {
  async render() {
    return `
    <h2 class='welcome-home__page'>Hai! Selamat datang di Jendela Dunia Apps 📖</h2>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    document.querySelector('#buttonSearch').addEventListener('click', searchElement);
  },
};

export default Home;
