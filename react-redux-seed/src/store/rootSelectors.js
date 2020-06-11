export const rootSelectors = {
  selectAllErrors: (state) => state.root.errors,
  selectAllLoading: (state) => state.root.loading
};

export const createErrorSelector = (key) => {
  return (state) => state.root.errors[key];
};

export const createLoadingSelector = (key) => {
  return (state) => state.root.loading[key];
};
