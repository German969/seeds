import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

class ApiService {
  static services = {};

  static registerService(key, config) {
    this.services[key] = config;
  }

  static registerServices(services) {
    Object.entries(services).forEach(service => this.registerService(service[0], service[1]));
  }

  static call(serviceName) {
    const serviceConfig = this.services[serviceName];

    return this.request(serviceConfig);
  }

  static request({path, options}) {
    return axios({
      method: options.method,
      url: `${apiUrl}/${path}`
    })
      .then((response) => ({data: response.data, error: false}))
      .catch((error) => ({data: null, error}));
  }
}

export default ApiService;
