import React  from "react"; 
import {Box,Typography,Stack,Divider, Drawer, Avatar,ListItem,ListItemAvatar, ListItemText} from '@mui/material'

import MoreIcon from '@material-ui/icons/MoreVert';
import { Menu } from "@material-ui/icons";
import { useState } from 'react';
import HomeIcon from '@material-ui/icons/Home'
import { RemoveRedEye } from '@material-ui/icons'
import { Settings } from '@material-ui/icons'
import AssignmentIcon from '@material-ui/icons/Assignment';

import DateRangeIcon from '@material-ui/icons/DateRange';
import NotesIcon from '@material-ui/icons/Notes';
import { NavLink } from 'react-router-dom'

export default function Appbar(){
    const[open,setOpen]=useState(false)
    return(
        <Box sx={{backgroundColor:"black"}} position="fixed" textoverflow="hidden" width="100%">
            <Stack direction="row" justifyContent="space-between" color="white" margin="10px" alignItems="center">
             <Box alignItems="center" display="flex" gap="2em" justifyContent="space-between" ><Menu onClick={()=>setOpen(true)}/><Typography fontSize="1.4em" >GU GUILD APP</Typography></Box>
              
              <MoreIcon/>
             

            </Stack>
            <Divider color="wheat"></Divider>
            <Drawer  open={open} onClose={()=>setOpen(false)} sx={{width:300, "& .MuiDrawer-paper":{
        width:250, boxSizing:"border-box", backgroundColor:"black",borderTop:"1px solid white",borderRight:"1px solid white", marginTop:"59px"
      }}}>
       <Stack gap={3} >
                <Box sx={{height:"3em", display:"flex", justifyContent:"center", padding:"1em"}}>
                <img style={{width:"9em", height:"7em"}} src={require('../images/gu.jpg')} />
                </Box>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Divider color="wheat"></Divider>  
                <Box gap="3em">
                        
 
                        <NavLink to="/" className='nav-links' onClick={()=>setOpen(false)}>
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
                                   <ListItemAvatar><RemoveRedEye></RemoveRedEye></ListItemAvatar>
                                   <ListItemText>Hostels</ListItemText>
                                </ListItem>
                        </NavLink>
                        <NavLink to="/sports" className='nav-links' onClick={()=>setOpen(false)}>
                                <ListItem button>
                                   <ListItemAvatar><RemoveRedEye></RemoveRedEye></ListItemAvatar>
                                   <ListItemText>Sports</ListItemText>
                                </ListItem>
                        </NavLink>
                       
                        <NavLink to="/spirit" className='nav-links' onClick={()=>setOpen(false)}>
                                <ListItem button>
                                   <ListItemAvatar><RemoveRedEye></RemoveRedEye></ListItemAvatar>
                                   <ListItemText>Spirituality</ListItemText>
                                </ListItem>
                        </NavLink>
                       
                        <NavLink to="/social" className='nav-links' onClick={()=>setOpen(false)}>
                                <ListItem button>
                                   <ListItemAvatar><RemoveRedEye></RemoveRedEye></ListItemAvatar>
                                   <ListItemText>Social</ListItemText>
                                </ListItem>
                        </NavLink>




                        <NavLink to="/admin" className='admin' onClick={()=>setOpen(false)}>
                                <ListItem button>
                                   <ListItemAvatar><RemoveRedEye></RemoveRedEye></ListItemAvatar>
                                   <ListItemText>Admin</ListItemText>
                                </ListItem>
                        </NavLink>
                       
                       
                       
                       
                    
                                      </Box>
          </Stack>  
      </Drawer>
            
        </Box>


    )
}