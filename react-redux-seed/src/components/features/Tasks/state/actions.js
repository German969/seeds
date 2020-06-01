/* eslint-disable no-param-reassign */
const actions = {
  initialize: (state, action) => {
    state.taskList = action.payload;
  },
  toggle: (state, action) => {
    state.taskList = state.taskList.map((task) => {
      return task.id === action.payload ? { ...task, completed: !task.completed } : task;
    });
  }
};

export default actions;
