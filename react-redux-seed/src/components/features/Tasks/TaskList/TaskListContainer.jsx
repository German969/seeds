import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './TaskList';
import { selectAllTasks, fetchTasks, toggle, selectTaskLoading } from '../state';

// TODO include logic in TaskList component (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
const TaskListContainer = () => {
  const tasks = useSelector(selectAllTasks);
  const loading = useSelector(selectTaskLoading);
  const dispatch = useDispatch();

  const toggleTodo = (id) => {
    dispatch(toggle(id));
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return <TaskList tasks={tasks} loading={loading.FETCH_TASKS} onTaskChange={toggleTodo} />;
};

export default TaskListContainer;
