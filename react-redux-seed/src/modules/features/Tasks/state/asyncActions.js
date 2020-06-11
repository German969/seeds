import { setTaskError, setTaskLoading } from "./customActions";
import { slice } from "./reducer";
import { getTasks } from '../service';

const { initialize } = slice.actions;

const asyncActions = {
  fetchTasks: () => dispatch => {
    dispatch(setTaskLoading({ key: 'FETCH_TASKS', state: true }));
    getTasks().then((res) => {
      if (res.error) {
        dispatch(setTaskError({ key: 'FETCH_TASKS', message: res.error }));
      } else {
        dispatch(initialize(res.data));
      }
      dispatch(setTaskLoading({ key: 'FETCH_TASKS', state: false }));
    });
  }
};

export default asyncActions;
