import React from 'react';
import { ToDoIcon } from '../Components/ToDoIcon'
function DeleteIcon({ onDelete }) {
  return (
    <ToDoIcon
      type="cancel"
      onClick={onDelete}
    />
  );
}

export { DeleteIcon };