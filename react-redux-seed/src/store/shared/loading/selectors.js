const selectors = {
  selectAllLoading: (state) => state.root.loading
};

export const createLoadingSelector = (key) => {
  return (state) => state.root.loading[key];
};

export default selectors;
