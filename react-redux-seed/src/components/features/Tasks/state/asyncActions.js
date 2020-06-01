import ApiService from "../../../../services/ApiService";
import { reducer } from "./reducer";

const { initialize } = reducer.actions;

const asyncActions = {
  fetchTasks: () => dispatch => {
    // TODO loading true
    ApiService.getTodos().then((data) => {
      dispatch(initialize(data));
      // TODO loading false
    });
  }
};

export default asyncActions;
