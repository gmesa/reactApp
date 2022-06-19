import React from 'react';
import { ToDoIcon } from './ToDoIcon';

function CompleteIcon({ completed, onComplete }) {
  return (
    <ToDoIcon
      type="mark"
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };