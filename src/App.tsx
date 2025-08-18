import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import CustomAppBar from './components/CustomAppBar';
import Home from './views/Home/Home';
import TodoList from './views/TodoList/TodoList';
import './App.css';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/example2" element={<div>Example 2 - Coming Soon!</div>} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
