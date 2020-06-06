import { createErrorSelector } from '../../../../store/shared/errors/selectors';
import { createLoadingSelector } from "../../../../store/shared/loading/selectors";
import { TASKS_KEY } from './reducer';

const selectors = {
  selectAllTasks: state => state.tasks.taskList,
  selectTaskErrors: createErrorSelector(TASKS_KEY),
  selectTaskLoading: createLoadingSelector(TASKS_KEY)
};

export default selectors;
