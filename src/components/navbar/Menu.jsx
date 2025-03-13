import React, {useState, useEffect} from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link, useLocation} from 'react-router-dom'
import AxiosInstance from '../axios';

export default function Menu() {
  const [open, setOpen] = React.useState(true);
  const [menuData, setMenuData] = useState([])

  const handleClick = () => {
    setOpen(!open);
  };

  const location = useLocation()
  const path = location.pathname
  console.log(path)

  const getData = () => {
    AxiosInstance.get('country/')
    .then(res => {
      setMenuData(res.data)
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect (() =>{
    getData()
  }, [])


  return (
    <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Socer Clubs
        </ListSubheader>
      }
    >    
      
      <ListItemButton onClick={handleClick} component={Link} to='/' selected={path === '/'}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="All Clubs" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menuData.map(country => (
            <ListItemButton key={country.id} sx={{ pl: 4 }} component={Link} to={`country/${country.id}`}>           
            <ListItemIcon>
              <DashboardCustomizeIcon />
            </ListItemIcon>
            <ListItemText primary={country.name} />
          </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
    <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Create Records
      </ListSubheader>
    }
  >    
    
    <ListItemButton component={Link} to='/create' selected={path==='/create'}>
      <ListItemIcon>
        <AddBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Create Club" />
    </ListItemButton>
    
  </List>
  </>
  );
}
