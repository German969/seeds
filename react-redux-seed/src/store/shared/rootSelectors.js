import errorSelectors from './errors/selectors';
import loadingSelectors from './loading/selectors';

export default {
  ...errorSelectors,
  ...loadingSelectors
};
