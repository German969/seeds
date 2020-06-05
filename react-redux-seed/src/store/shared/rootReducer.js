import { createSlice } from '@reduxjs/toolkit';
import errorsState from "./errors/state";
import errorActions from "./errors/actions";

export const slice = createSlice({
  name: 'root',
  initialState: {
    ...errorsState
  },
  reducers: {
    ...errorActions
  }
});

export default slice.reducer;
