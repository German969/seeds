import React from 'react';
import {useSelector} from 'react-redux';
import TaskList from '../../../features/Tasks/components/TaskList';
import { selectTaskErrors } from '../../../features/Tasks/state';
import taskKeys from '../../../features/Tasks/constants';

const HomePage = () => {
  const errors = useSelector(selectTaskErrors);

  if (errors[taskKeys.FETCH_TASKS]) {
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
