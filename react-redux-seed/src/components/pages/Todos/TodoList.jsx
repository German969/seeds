import React, { useState, useEffect } from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import {ApiService} from "../../../services/ApiService";

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
        {todos.map(todo => {
          const labelId = `checkbox-list-label-${todo.id}`;

          return (
            <ListItem key={todo.id} dense button onClick={() => toggleTodo(todo.id)}>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={todo.title} />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default TodoList;
