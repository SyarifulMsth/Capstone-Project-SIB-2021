import CONFIG from './config';

// eslint-disable-next-line camelcase
const api_endpoint = (query) => {
  const search = `${CONFIG.BASE_URL}?q=${query}&key=${CONFIG.KEY}`;
  return search;
};

// eslint-disable-next-line camelcase
const api_endpoint_detail = (id) => {
  const detail = `${CONFIG.BASE_URL}/${id}?key=${CONFIG.KEY}`;
  return detail;
};

// eslint-disable-next-line camelcase
export default { api_endpoint, api_endpoint_detail };
