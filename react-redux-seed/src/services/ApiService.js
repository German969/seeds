import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export class ApiService {
  static getTodos() {
    return this.request('todos/?_limit=10', { method: 'get' });
  }

  static request(path, options) {
    return axios({
      method: options.method,
      url: `${apiUrl}/${path}`
    })
      .then(response => response.data)
      .catch(error => console.log(error));
  }
}
