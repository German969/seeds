import React from 'react';
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Task from "../Task";
import { useStyles } from './TaskList.styles.js';

const TaskList = ({ loading, tasks, onTaskChange }) => {
  const classes = useStyles();

  if (loading) {
    return <div className={classes.loading}>Loading...</div>;
  }

  if (tasks.length === 0) {
    return <div className={classes.emptyList}>Empty</div>;
  }

  return (
    <Paper>
      <List>
        {tasks.map(todo => <Task todo={todo} onClick={onTaskChange} />)}
      </List>
    </Paper>
  );
};

export default TaskList;
