/* eslint-disable no-param-reassign */
const actions = {
  setLoading: (state, action) => {
    state.loading[action.payload.slice] = {
      ...state.loading[action.payload.slice],
      [action.payload.key]: action.payload.state
    };
  }
};

export default actions;
