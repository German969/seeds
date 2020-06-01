import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import TaskItem from '../TaskItem';
import useStyles from './TaskList.styles';

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
        {tasks.slice(0, 20).map((todo) => (
          <TaskItem todo={todo} onClick={onTaskChange} />
        ))}
      </List>
    </Paper>
  );
};

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool
    })
  ).isRequired,
  onTaskChange: PropTypes.func.isRequired
};

TaskList.defaultProps = {
  loading: false
};

export default TaskList;
