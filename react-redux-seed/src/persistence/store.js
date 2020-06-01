import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../components/features/Tasks/state/reducer';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
