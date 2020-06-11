import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import tasksReducer from '../modules/features/Tasks/state/reducer';

export default configureStore({
  reducer: {
    root: rootReducer,
    tasks: tasksReducer,
  },
});
