import React from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const TodoItem = ({todo, onClick}) => {
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem key={todo.id} dense button onClick={() => onClick(todo.id)}>
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
};

export default TodoItem;
