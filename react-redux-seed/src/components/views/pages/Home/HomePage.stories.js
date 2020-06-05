import React from 'react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import HomePage from "./HomePage";

const store = {
  getState: () => {
    return {
      root: {
        errors: {
          tasks: []
        }
      },
      tasks: {
        taskList: []
      }
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch')
};

export default {
  component: HomePage,
  title: 'HomePage',
  decorators: [story => <Provider store={store}>{story()}</Provider>]
};

export const Default = () => <HomePage />;

export const Error = () => <HomePage />;
