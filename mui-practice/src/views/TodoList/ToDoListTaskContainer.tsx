import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Typography } from '@mui/material';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoListTaskContainerProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

function ToDoListTaskContainer({ tasks, onDeleteTask }: ToDoListTaskContainerProps) {

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleDelete = (id: number) => {
    onDeleteTask(id); // Call parent function instead of managing local state
  };
  return (
    <List subheader={<Typography variant="h2" component="h2">
      Tasks To Do
    </Typography>
  }
  sx={{ bgcolor: 'primary.main', padding: 2, marginTop: 2 }}>
      {tasks.map((task, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem
            sx={(theme) => ({
              color: theme.palette.primary.contrastText,
              '&:hover': {
                backgroundColor: 'rgba(15, 211, 218, 0.65)',
              },
            })}
            key={task.id}
            secondaryAction={
              <IconButton 
                edge="end" 
                aria-label="delete"
                onClick={() => handleDelete(task.id)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    transform: 'scale(1.1)', 
                  },
                  transition: 'all 0.2s ease-in-out', 
                }}
              >
                <DeleteOutlineIcon sx={{ 
                  color: 'red',
                  '&:hover': {
                    color: '#ff4444', 
                    filter: 'drop-shadow(0 2px 4px rgba(255, 0, 0, 0.3))', // Red drop shadow
                  },
                  transition: 'all 0.2s ease-in-out',
                }}/>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(task.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(task.id)}
                  tabIndex={-1}
                  disableRipple
                  sx={{
                    color: 'secondary.main',
                    '&.Mui-checked': {
                      color: 'primary.contrastText',
                    },
                  }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={
                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.primary.contrastText,
                    })}
                  >
                    {task.text}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ToDoListTaskContainer;
