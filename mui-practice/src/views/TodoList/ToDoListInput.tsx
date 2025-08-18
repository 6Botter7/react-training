import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';

function ToDoListInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      // Dispatch an action or call a function to add the new todo
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="New ToDo"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}


export default ToDoListInput;
