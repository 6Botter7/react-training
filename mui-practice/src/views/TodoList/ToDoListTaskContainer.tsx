import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

function ToDoListTaskContainer() {
  return (
    <List subheader={<li>Tasks To Do</li>} sx={{ bgcolor: '#282c34' , padding: 2 , marginTop: 2 }}>
      <ListItem divider secondaryAction={<Button>Action</Button>} sx={{  }}>Task 1</ListItem>
      <ListItem divider secondaryAction={<Button>Action</Button>} sx={{ }}>Task 2</ListItem>
    </List>
  );
}

export default ToDoListTaskContainer;
