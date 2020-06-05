import React from 'react';
import {useSelector} from 'react-redux';
import TaskList from '../../../features/Tasks/TaskList';
import { selectTaskErrors } from '../../../features/Tasks/state';

const HomePage = () => {
  const errors = useSelector(selectTaskErrors);

  if (errors.length) {
    return (<div>Error</div>);
  }

  return (
    <>
      <h1>Task List</h1>
      <TaskList />
    </>
  );
};

export default HomePage;
