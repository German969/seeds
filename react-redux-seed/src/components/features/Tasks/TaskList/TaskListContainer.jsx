import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './TaskList';
import { selectAll, fetchTasks, toggle } from '../state';

const TaskListContainer = () => {
  const tasks = useSelector(selectAll);
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
