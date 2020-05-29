import React, { useState, useEffect } from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import {ApiService} from "../../../services/ApiService";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    ApiService.getTodos().then(data => setTodos(data));
  }, []);

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => {
      return (todo.id === id) ? {...todo, completed: !todo.completed} : todo;
    }));
  };

  return (
    <Paper>
      <List>
        {todos.map(todo => <TodoItem todo={todo} onClick={toggleTodo} />)}
      </List>
    </Paper>
  );
};

export default TodoList;
