import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import { useState } from 'react';

interface ToDoListInputProps {
  onAddTask: (taskText: string) => void;
}

function ToDoListInput({ onAddTask }: ToDoListInputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    if (inputValue.trim()) {
      onAddTask(inputValue); // Call parent function
      setInputValue(''); // Clear input
    }
  };

  return (
    <Box>
      <TextField
        label="New ToDo"
        type='search' // added this to get that clear button
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#0961a8ff',
            },
            '&:hover fieldset': {
              borderColor: '#0961a8ff',
            },
            '& input': {
              color: 'text.primary',
            }
          },
          
          
          '& .MuiFormHelperText-root': {
            color: 'silver',
          },
        }}
        helperText="Enter your todo item..."
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Add
      </Button>
    </Box>
  );
}


export default ToDoListInput;
