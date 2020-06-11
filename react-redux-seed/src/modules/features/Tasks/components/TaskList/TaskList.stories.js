import React from 'react';
import { action } from '@storybook/addon-actions';

import TaskList from './TaskList';

export default {
  component: TaskList,
  title: 'TaskList',
  excludeStories: /.*Data$/
};

export const defaultTasksData = [
  { id: 1, title: 'TaskItem 1', completed: false },
  { id: 2, title: 'TaskItem 2', completed: false },
  { id: 3, title: 'TaskItem 3', completed: false }
];

export const withCompletedTasksData = [
  { id: 1, title: 'TaskItem 1', completed: true },
  ...defaultTasksData.slice(1, 3)
];

export const taskListActionsData = {
  onTaskChange: action('onTaskChange')
};

export const Default = () => (
  <TaskList tasks={defaultTasksData} {...taskListActionsData} />
);

export const WithCompletedTasks = () => (
  <TaskList tasks={withCompletedTasksData} {...taskListActionsData} />
);

export const Loading = () => (
  <TaskList loading tasks={[]} {...taskListActionsData} />
);

export const Empty = () => <TaskList tasks={[]} {...taskListActionsData} />;
