import configs from "./configs";
import services from './services';
import ApiService from "../../../../services/ApiService";

ApiService.registerServices(configs);

// eslint-disable-next-line import/prefer-default-export
export const { getTasks } = services;
