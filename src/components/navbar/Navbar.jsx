// Navbar.jsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Menu from './Menu';
import ShortMenu from './ShortMenu';
import logo from '../../assets/nhl-logo.png';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const drawerWidth = 240;
const shortDrawerWidth = 89;

export default function Navbar({ content }) {
  const [isBigMenu, setIsBigMenu] = useState(false);

  const adjustedWidth = isBigMenu ? drawerWidth : shortDrawerWidth;

  return (
    <Box sx={{ display: 'flex' }}> {/* Key: Flexbox for layout */}
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar >
          <IconButton sx={{ marginRight: '25px', color: 'white' }} onClick={() => setIsBigMenu(!isBigMenu)}>
            {isBigMenu ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <img width='100px' src={logo} alt="Logo" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: adjustedWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: adjustedWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        {isBigMenu ? <Menu /> : <ShortMenu />}
      </Drawer>
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,  
          width: `calc(100% - ${adjustedWidth}px)`
        }}
      > 
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}