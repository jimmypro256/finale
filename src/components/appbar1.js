import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';


import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {Box,Typography,Stack,Divider, Drawer,ListItem,ListItemAvatar, ListItemText} from '@mui/material'

import { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home'

import { Logout } from '@mui/icons-material';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { NavLink } from 'react-router-dom'
import { AddBusiness } from '@mui/icons-material';
import { ConnectWithoutContact } from '@mui/icons-material';
import {SportsSoccer} from '@mui/icons-material';
import {MenuBook} from '@mui/icons-material';


export default function ButtonAppBar() {
  const[open,setOpen]=useState(false)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setOpen(true)}
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            GU GUILD APP
          </Typography>
      
        </Toolbar>
      </AppBar>


      <Drawer  open={open} onClose={()=>setOpen(false)} sx={{width:"40%", "& .MuiDrawer-paper":{
        width:250, boxSizing:"border-box", backgroundColor:"black",borderTop:"1px solid white",borderRight:"1px solid white", marginTop:"59px"
      }}}>
       <Stack gap={3} >
                <Box sx={{height:"3em", display:"flex", justifyContent:"center", padding:"1em"}}>
                <img style={{width:"9em", height:"7em"}} src={require('../images/gu.jpg')} />
                </Box>
                <br></br>
                <br></br>
                
                <Divider color="wheat"></Divider>  
                <Box gap="2.5em">
                        
 
                        <NavLink to="/home" className='nav-links' onClick={()=>setOpen(false)}>
                             <ListItem button>
                                <ListItemAvatar ><HomeIcon></HomeIcon></ListItemAvatar>
                                <ListItemText  >Home</ListItemText>
                             </ListItem>
                        </NavLink>
                       
                        <NavLink to="/communications" className='nav-links' onClick={()=>setOpen(false)}>
                             <ListItem button>
                                <ListItemAvatar><AssignmentIcon></AssignmentIcon></ListItemAvatar>
                                <ListItemText>Communications</ListItemText>
                             </ListItem>
                        </NavLink>
                       
                        <NavLink to="/hostels" className='nav-links' onClick={()=>setOpen(false)}>
                                <ListItem button>
                                   <ListItemAvatar><AddBusiness></AddBusiness></ListItemAvatar>
                                   <ListItemText>Hostels</ListItemText>
                                </ListItem>
                        </NavLink>
                        <NavLink to="/sports" className='nav-links' onClick={()=>setOpen(false)}>
                                <ListItem button>
                                   <ListItemAvatar><SportsSoccer></SportsSoccer></ListItemAvatar>
                                   <ListItemText>Sports</ListItemText>
                                </ListItem>
                        </NavLink>
                       
                        <NavLink to="/spirit" className='nav-links' onClick={()=>setOpen(false)}>
                                <ListItem button>
                                   <ListItemAvatar><MenuBook></MenuBook></ListItemAvatar>
                                   <ListItemText>Spirituality</ListItemText>
                                </ListItem>
                        </NavLink>
                       
                        <NavLink to="/social" className='nav-links' onClick={()=>setOpen(false)}>
                                <ListItem button>
                                   <ListItemAvatar><ConnectWithoutContact></ConnectWithoutContact></ListItemAvatar>
                                   <ListItemText>Social</ListItemText>
                                </ListItem>
                        </NavLink>

                        <NavLink to="/" className='nav-links' onClick={()=>setOpen(false)}>
                                <ListItem button>
                                   <ListItemAvatar><Logout></Logout></ListItemAvatar>
                                   <ListItemText>Logout</ListItemText>
                                </ListItem>
                        </NavLink>


                      
                       
                       
                       
                    
                                      </Box>
          </Stack>  
      </Drawer>
    </Box>
  );
}
