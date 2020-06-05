import { createSlice } from '@reduxjs/toolkit';
import actions from './actions';

export const slice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: []
  },
  reducers: actions
});

export const TASKS_KEY = slice.name;

export default slice.reducer;
