import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import {Box} from '@mui/material'
import '../App.css'
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function Bottom() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Box className='Bottom' position="fixed"   justifyContent="center" width="100%">
            <BottomNavigation 
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
            >
               <NavLink to="/communications" className='nav-links'><BottomNavigationAction label="Commun" icon={<NotificationsIcon/>} /></NavLink>
               <NavLink to="/" className='nav-links'><BottomNavigationAction label="Home" icon={<HomeIcon/>} /></NavLink>
               <NavLink to="/hostels" className='nav-links'><BottomNavigationAction label="hostels" icon={<LocationOnIcon/>} /></NavLink>
            
            
            </BottomNavigation>
    </Box>
  );
}
