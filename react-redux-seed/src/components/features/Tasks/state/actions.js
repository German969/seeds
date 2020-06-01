const actions = {
  initialize: (state, action) => {
    // eslint-disable-next-line no-param-reassign
    state.taskList = action.payload;
    // TODO move to reducer (action is undefined)
  },
  add: (state, action) => {
    state.taskList.push(action.payload);
  },
  remove: (state, action) => {
    state.taskList.splice(state.taskList.findIndex(task => task.id === action.payload), 1);
  }
};

export default actions;
