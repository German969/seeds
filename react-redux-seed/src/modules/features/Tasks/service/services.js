import constants from '../constants';
import ApiService from "../../../../services/ApiService";

const { FETCH_TASKS } = constants;

const services = {
  getTasks() {
    return ApiService.call(FETCH_TASKS);
  }
};

export default services;
