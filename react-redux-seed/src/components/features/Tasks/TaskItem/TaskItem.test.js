import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskItem from './TaskItem';
import { completedTaskData, taskData } from "./TaskItem.stories";

describe('Task Item', () => {
  it('should render completed tasks', () => {
    const { getByTestId } = render(<TaskItem {...completedTaskData} />);

    expect(getByTestId('task-item-text').className).toEqual(expect.stringContaining('completed'));
  });

  it('should render uncompleted tasks', () => {
    const { getByTestId } = render(<TaskItem {...taskData} />);

    expect(getByTestId('task-item-text').className).toEqual(expect.not.stringContaining('completed'));
  });

  it('should call onClick callback', () => {
    const props = {...taskData, onClick: jest.fn()};
    const { getByRole } = render(<TaskItem {...props} />);

    fireEvent.click(getByRole('button'));

    expect(props.onClick).toHaveBeenCalled();
  });
});
