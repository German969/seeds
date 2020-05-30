import React, { useEffect, useState } from 'react';
import ApiService from '../../../../services/ApiService';
import TaskList from './TaskList';

const TaskListContainer = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  useEffect(() => {
    ApiService.getTodos().then((data) => {
      setTodos(data);
      setLoading(false);
    });
  }, []);

  return <TaskList tasks={todos} loading={loading} onTaskChange={toggleTodo} />;
};

export default TaskListContainer;
