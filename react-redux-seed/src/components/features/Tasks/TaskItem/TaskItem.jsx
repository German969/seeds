import React from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import useStyles from './TaskItem.styles';

const TaskItem = ({ todo, onClick }) => {
  const classes = useStyles();
  const labelId = `checkbox-list-label-${todo.id}`;
  const todoClassName = todo.completed ? classes.completed : '';

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
      <ListItemText
        id={labelId}
        primary={todo.title}
        className={todoClassName}
      />
    </ListItem>
  );
};

TaskItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default TaskItem;
