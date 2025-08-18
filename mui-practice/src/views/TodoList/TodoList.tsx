import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Button,
  TextField,
  Paper,
  IconButton,
  Divider
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Task as TaskIcon
} from '@mui/icons-material';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: 'Learn React basics', completed: true },
    { id: 2, text: 'Master MUI components', completed: false },
    { id: 3, text: 'Build awesome apps', completed: false },
  ]);
  
  const [newTodo, setNewTodo] = useState('');

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleAdd = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }]);
      setNewTodo('');
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        ToDo List
      </Typography>
      
      {/* Add new todo */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Add a new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAdd}
            disabled={!newTodo.trim()}
          >
            Add
          </Button>
        </Box>
      </Paper>

      {/* Stats */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            Progress: {completedCount} of {todos.length} tasks completed
          </Typography>
          <Box sx={{ mt: 1, p: 1, backgroundColor: 'primary.light', borderRadius: 1 }}>
            <Typography variant="body2" color="white">
              {todos.length === 0 ? 'No tasks yet!' : 
               completedCount === todos.length ? '🎉 All tasks completed!' :
               `${todos.length - completedCount} tasks remaining`}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Todo list */}
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            <TaskIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
            Your Tasks
          </Typography>
          {todos.length === 0 ? (
            <Typography color="text.secondary" align="center" sx={{ py: 4 }}>
              No tasks yet. Add one above to get started!
            </Typography>
          ) : (
            <List disablePadding>
              {todos.map((todo, index) => (
                <div key={todo.id}>
                  <ListItem
                    disablePadding
                    secondaryAction={
                      <IconButton 
                        edge="end" 
                        onClick={() => handleDelete(todo.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemButton onClick={() => handleToggle(todo.id)}>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={todo.completed}
                          tabIndex={-1}
                          disableRipple
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={todo.text}
                        sx={{
                          textDecoration: todo.completed ? 'line-through' : 'none',
                          opacity: todo.completed ? 0.7 : 1
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  {index < todos.length - 1 && <Divider />}
                </div>
              ))}
            </List>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default TodoList;