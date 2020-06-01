import { createSlice } from '@reduxjs/toolkit';
import actions from './actions';

export const reducer = createSlice({
  name: 'tasks',
  initialState: {
    taskList: []
  },
  reducers: actions
});

export default reducer.reducer;
