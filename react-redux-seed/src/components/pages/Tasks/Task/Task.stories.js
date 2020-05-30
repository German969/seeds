import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from './index';

export default {
  component: Task,
  title: 'Task',
  decorators: [
    (story) => <div style={{ border: '1px solid #ccc' }}>{story()}</div>
  ],
  excludeStories: /.*Data$/
};

export const taskData = {
  todo: {
    id: 1,
    title: 'Task 1',
    completed: false
  },
  onClick: action('onClick')
};

export const completedTaskData = {
  ...taskData,
  todo: {
    ...taskData.todo,
    completed: true
  }
};

export const Default = () => <Task {...taskData} />;

export const Completed = () => <Task t {...completedTaskData} />;
