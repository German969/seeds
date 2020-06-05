const selectors = {
  selectAllErrors: (state) => state.root.errors
};

export const createErrorSelector = (key) => {
  return (state) => state.root.errors[key];
};

export default selectors;
