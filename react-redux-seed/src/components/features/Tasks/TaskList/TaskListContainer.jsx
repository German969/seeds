import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './TaskList';
import { selectAll, fetchTasks } from '../state';

const TaskListContainer = () => {
  const [todos, setTodos] = useState([]);
  const tasks = useSelector(selectAll);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  useEffect(() => {
    dispatch(fetchTasks());
    setLoading(false);
  }, [dispatch]);

  return <TaskList tasks={tasks} loading={loading} onTaskChange={toggleTodo} />;
};

export default TaskListContainer;
