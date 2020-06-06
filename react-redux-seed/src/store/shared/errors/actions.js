/* eslint-disable no-param-reassign */
const actions = {
  setError: (state, action) => {
    state.errors[action.payload.slice] = {
      ...state.errors[action.payload.slice],
      [action.payload.key]: action.payload.message
    };
  }
};

export default actions;
