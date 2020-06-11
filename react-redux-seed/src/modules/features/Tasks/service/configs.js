import constants from '../constants';

export default {
  [constants.FETCH_TASKS]: {
    path: 'todos',
    options: {
      method: 'get'
    }
  }
};
