import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import Input from '@mui/material/Input';
import { useState } from 'react';

function ToDoListInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    console.log(inputValue);
    // add task to the list
    
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
              color: 'silver', // Text color
            }
          },
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
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
