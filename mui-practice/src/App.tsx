import { Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import CustomAppBar from './components/CustomAppBar';
import Home from './views/Home/Home';
import TodoList from './views/TodoList/TodoList';
import Themes from './views/Themes/Themes';
import { ThemeSwitcherProvider, useThemeSwitcher } from './hooks/useThemeSwitcher';
import {CssBaseline } from '@mui/material';

function AppContent() {
  const { theme } = useThemeSwitcher();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

function App() {
  return (
    <ThemeSwitcherProvider>
      <AppContent />
    </ThemeSwitcherProvider>
  );
}

export default App