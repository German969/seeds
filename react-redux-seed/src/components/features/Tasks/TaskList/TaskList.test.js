import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import TaskList from "./TaskList";

describe('Task List', () => {
  const props = {
    tasks: [],
    onTaskChange: jest.fn()
  };

  it('should show loading message', () => {
    const { getByText } = render(<TaskList loading {...props} />);

    expect(getByText('Loading...'));
  });

  it('should show empty message', () => {
    const { getByText } = render(<TaskList {...props} />);

    expect(getByText('Empty'));
  });

  it('should show first 5 tasks', () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: false },
      { id: 3, title: 'Task 3', completed: false },
      { id: 4, title: 'Task 4', completed: false },
      { id: 5, title: 'Task 5', completed: false },
      { id: 6, title: 'Task 6', completed: false }
    ];

    const { getAllByTestId, queryByText } = render(<TaskList tasks={tasks} onTaskChange={props.onTaskChange} />);

    expect(getAllByTestId('task-item-text')).toHaveLength(5);
    expect(queryByText('Task 6')).toBeNull();
  });

  it('should call onTaskChange callback', () => {
    const { getByRole } = render(
      <TaskList
        tasks={[{id: 1, title: 'Task', completed: false}]}
        onTaskChange={props.onTaskChange}
      />);

    fireEvent.click(getByRole('button'));

    expect(props.onTaskChange).toHaveBeenCalled();
  });
});
