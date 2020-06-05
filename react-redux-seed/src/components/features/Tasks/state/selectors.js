import { createErrorSelector } from '../../../../store/shared/errors/selectors';
import { TASKS_KEY } from './reducer';

const selectors = {
  selectAllTasks: state => state.tasks.taskList,
  selectTaskErrors: createErrorSelector(TASKS_KEY)
};

export default selectors;
