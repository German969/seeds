import ApiService from "../../../../services/ApiService";
import actions from "./actions";

const { initialize } = actions;

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
