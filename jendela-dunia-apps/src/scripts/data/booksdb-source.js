import API_ENDPOINT from '../globals/api-endpoint';

class TheBookDbSource {
  static async TrendingBooks() {
    const response = await fetch(API_ENDPOINT.TRENDING);
    const responseJson = await response.json();
    return responseJson.results;
  }
}

export default TheBookDbSource;
