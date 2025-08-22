import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import CustomAppBar from './components/CustomAppBar';
import Home from './views/Home/Home';
import TodoList from './views/TodoList/TodoList';
import Themes from './views/Themes/Themes';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar />
      <Box component="main" sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App