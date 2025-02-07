import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Link, useLocation} from 'react-router-dom'

export default function ShortMenu() {
  
  const location = useLocation()
  const path = location.pathname
  console.log(path)

  return (
    <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"      
    >     
      <ListItemButton component={Link} to='/' selected={path === '/'} sx={{disply: 'flex', justifyContent:'center'}}>
        <ListItemIcon sx={{disply: 'flex', justifyContent:'center'}}>
          <DashboardIcon />
        </ListItemIcon>
      </ListItemButton> 

      <ListItemButton component={Link} to='/create' selected={path ==='/create'} sx={{disply: 'flex', justifyContent:'center'}}>
        <ListItemIcon sx={{disply: 'flex', justifyContent:'center'}}>
          <AddCircleIcon />
        </ListItemIcon>
    </ListItemButton>     
    </List>
</>
  );
}
