/* eslint-disable no-param-reassign */
const actions = {
  setError: (state, action) => {
    state.errors[action.payload.key] = [...state.errors[action.payload.key], action.payload.message];
  }
};

export default actions;
