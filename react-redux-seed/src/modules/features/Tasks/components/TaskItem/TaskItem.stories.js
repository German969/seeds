import React from 'react';
import { action } from '@storybook/addon-actions';

import TaskItem from './index';

export default {
  component: TaskItem,
  title: 'TaskItem',
  decorators: [
    (story) => <div style={{ border: '1px solid #ccc' }}>{story()}</div>
  ],
  excludeStories: /.*Data$/
};

export const taskData = {
  todo: {
    id: 1,
    title: 'TaskItem 1',
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

export const Default = () => <TaskItem {...taskData} />;

export const Completed = () => <TaskItem {...completedTaskData} />;
