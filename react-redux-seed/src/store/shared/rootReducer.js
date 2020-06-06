import { createSlice } from '@reduxjs/toolkit';
import errorsState from './errors/state';
import errorActions from './errors/actions';
import loadingState from './loading/state';
import loadingActions from './loading/actions';

export const slice = createSlice({
  name: 'root',
  initialState: {
    ...errorsState,
    ...loadingState
  },
  reducers: {
    ...errorActions,
    ...loadingActions
  }
});

export default slice.reducer;
