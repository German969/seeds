import { createSlice } from '@reduxjs/toolkit';
import rootActions from './rootActions';
import {TASKS_KEY} from "../modules/features/Tasks/state/reducer";

// TODO make singleton
const rootState = {
  [TASKS_KEY]: {}
};

export const slice = createSlice({
  name: 'root',
  initialState: {
    errors: {...rootState},
    loading: {...rootState}
  },
  reducers: {...rootActions}
});

export const {
  setError,
  setLoading
} = slice.actions;

export default slice.reducer;
