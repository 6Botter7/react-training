import { Button } from '@mui/material';
import React from 'react';
import ToDoListInput from './ToDoListInput';
import ToDoListTaskContainer from './ToDoListTaskContainer';

function TodoList() {
  return (
    <div>
      <ToDoListInput />
      <ToDoListTaskContainer />
    </div>
  );
}


export default TodoList;