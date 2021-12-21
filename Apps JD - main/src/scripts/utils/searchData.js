import apiEndpoint from '../globals/api-endpoint';
// eslint-disable-next-line import/named
import templateBooks from '../views/templates/template-creator';

const bookQueryElement = document.querySelector('#inputBookQuery');
const booksContainerElement = document.querySelector('#mainContent');

const renderBooks = (items) => {
  booksContainerElement.innerHTML = '';

  // eslint-disable-next-line import/no-named-as-default-member
  templateBooks.createBooksTemplate(items);
};

const apiBooksRequest = async (query) => {
  const API_ENDPOINT = apiEndpoint.api_endpoint(query);

  const response = await fetch(API_ENDPOINT);
  const responseJson = await response.json();
  const { items } = responseJson;
  renderBooks(items);
};

const searchElement = async (event) => {
  event.preventDefault();
  const query = bookQueryElement.value;
  apiBooksRequest(query);
};

export default searchElement;
