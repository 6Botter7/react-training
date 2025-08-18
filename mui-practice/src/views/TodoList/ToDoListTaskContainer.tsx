import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

function ToDoListTaskContainer() {
  return (
    <List dense subheader={<li>Tasks To Do</li>} sx={{ bgcolor: 'background.paper' }}>
      <ListItem divider secondaryAction={<Button>Action</Button>} sx={{ bgcolor: 'black' }}>Task 1</ListItem>
      <ListItem divider secondaryAction={<Button>Action</Button>} sx={{ bgcolor: 'black' }}>Task 2</ListItem>
    </List>
  );
}

export default ToDoListTaskContainer;
