import * as React from 'react';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface ToDoListTaskContainerProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void; // Add this line
}

function ToDoListTaskContainer({ tasks, onDeleteTask }: ToDoListTaskContainerProps) {
//   return (
//     <List subheader={<li>Tasks To Do</li>} sx={{ bgcolor: '#282c34' , padding: 2 , marginTop: 2 }}>
//       <ListItem divider secondaryAction={<Button>Action</Button>} sx={{  }}>Task 1</ListItem>
//       <ListItem divider secondaryAction={<Button>Action</Button>} sx={{ }}>Task 2</ListItem>
//     </List>
//   );

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
  };return (
    <List subheader={<li>Tasks To Do</li>} sx={{ bgcolor: '#282c34' , padding: 2 , marginTop: 2 }}>
      {tasks.map((task, index) => {
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem
            key={task.id}
            secondaryAction={
              <IconButton 
                edge="end" 
                aria-label="delete"
                onClick={() => handleDelete(task.id)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 0, 0, 0.1)', // Light red background on hover
                    transform: 'scale(1.1)', // Slightly grow on hover
                  },
                  transition: 'all 0.2s ease-in-out', // Smooth animation
                }}
              >
                <DeleteOutlineIcon sx={{ 
                  color: 'red',
                  '&:hover': {
                    color: '#ff4444', // Brighter red on hover
                    filter: 'drop-shadow(0 2px 4px rgba(255, 0, 0, 0.3))', // Red drop shadow
                  },
                  transition: 'all 0.2s ease-in-out', // Smooth animation
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
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={task.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ToDoListTaskContainer;
