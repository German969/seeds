import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './shared/rootReducer';
import tasksReducer from '../components/features/Tasks/state/reducer';

export default configureStore({
  reducer: {
    root: rootReducer,
    tasks: tasksReducer,
  },
});
