import { useState } from 'react';
import Button from '@mui/material/Button';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
 
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => console.log('Add Todo')}
    >
      Add Todo
    </Button>
  );
}

export default TodoList;
