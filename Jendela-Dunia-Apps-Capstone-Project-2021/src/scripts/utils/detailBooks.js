import apiEndpoint from '../globals/api-endpoint';
import templateBooks from '../views/templates/template-creator';

const detailBook = async (id) => {
  console.log(id);
  const response = await fetch(apiEndpoint.api_endpoint_detail(id));
  const responseJson = await response.json();
  const item = responseJson;
  templateBooks.detailBooksTemplate(item);
};

export default detailBook;
