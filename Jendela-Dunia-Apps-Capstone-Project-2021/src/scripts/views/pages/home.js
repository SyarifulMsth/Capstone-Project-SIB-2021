import searchElement from '../../utils/searchData';
const Home = {
  async render() {
    return `
      <h2>Home Page</h2>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    document.querySelector('#buttonSearch').addEventListener('click', searchElement);
  },
};

export default Home;

