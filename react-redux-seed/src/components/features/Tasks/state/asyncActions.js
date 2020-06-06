import ApiService from "../../../../services/ApiService";
import { setLoading } from '../../../../store/shared/rootActions';
import { slice } from "./reducer";

const { initialize } = slice.actions;

const asyncActions = {
  fetchTasks: () => dispatch => {
    dispatch(setLoading({ slice: 'tasks', key: 'FETCH_TASKS', state: true }));
    ApiService.getTodos().then((data) => {
      dispatch(initialize(data));
      dispatch(setLoading({ slice: 'tasks', key: 'FETCH_TASKS', state: false }));
    });
  }
};

export default asyncActions;
