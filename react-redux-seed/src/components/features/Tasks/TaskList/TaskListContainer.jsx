import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './TaskList';
import { selectAllTasks, fetchTasks, toggle } from '../state';

// TODO include logic in TaskList component (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
const TaskListContainer = () => {
  const tasks = useSelector(selectAllTasks);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const toggleTodo = (id) => {
    dispatch(toggle(id));
  };

  useEffect(() => {
    dispatch(fetchTasks());
    setLoading(false);
  }, [dispatch]);

  return <TaskList tasks={tasks} loading={loading} onTaskChange={toggleTodo} />;
};

export default TaskListContainer;
