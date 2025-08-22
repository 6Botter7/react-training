import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CustomAppBar() {
  const navigate = useNavigate();
  
  const [menuButton, setMenuButton] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuButton);

  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (menuOpen === true) {
      setMenuButton(null);
    } else {
      setMenuButton(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setMenuButton(null);
  };

  const handleNavigateAndClose = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  const [aboutButton, setAboutButton] = useState<null | HTMLElement>(null);
  const aboutOpen = Boolean(aboutButton);

  const handleAboutOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAboutButton(event.currentTarget);
  };

  const handleAboutClose = () => {
    setAboutButton(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#282c34', width: '100%' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={handleMenuToggle}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Training for Noobs
          </Typography>
          <Button color="inherit" onClick={handleAboutOpen}>
            About
          </Button>
          <Menu
            id="appbar-menu"
            anchorEl={menuButton}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <MenuItem onClick={() => handleNavigateAndClose('/')}>Home</MenuItem>
            <MenuItem onClick={() => handleNavigateAndClose('/todo-list')}>ToDo List</MenuItem>
            <MenuItem onClick={() => handleNavigateAndClose('/themes')}>Themes</MenuItem>
          </Menu>
          <Dialog open={aboutOpen} onClose={handleAboutClose}>
            <DialogTitle>About</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This is a training application to demonstrate MUI components and their usage.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAboutClose}>Cancel</Button>
              <Button onClick={handleAboutClose}>OK</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;
