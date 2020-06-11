/* eslint-disable no-param-reassign */
export default {
  setError: (state, action) => {
    state.errors[action.payload.slice] = {
      ...state.errors[action.payload.slice],
      [action.payload.key]: action.payload.message
    };
  },
  setLoading: (state, action) => {
    state.loading[action.payload.slice] = {
      ...state.loading[action.payload.slice],
      [action.payload.key]: action.payload.state
    };
  }
};

