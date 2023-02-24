import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { Button, TextField,Modal,Avatar } from '@mui/material';
import {useState, useEffect} from 'react'
import { collection, getDocs,doc, getFirestore} from 'firebase/firestore'
import app from '../firebase-config'


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  let db= getFirestore(app)
 
  let id=1;
 let table = collection(db, "scheme")
  const [schemes, setSchemes]=useState([])
   useEffect(()=>{

     ;(async()=>{
      const raw_data=await getDocs(table)
     
      
      
        const show=raw_data.docs.map((doc)=> doc.data())
        
        console.log(show)
        //setOpen(false)
        
        const result : string[] = [];
        
        //document.getElementById('loading').style.display="none"
     

      

      
     })()
   
   },[])
   




  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [join, setJoin]=useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="RELIGION" {...a11yProps(0)} />
          <Tab label="SPORTS" {...a11yProps(1)} />
          <Tab label="GOSSIP" {...a11yProps(2)} />
          <Tab label="ASSOCIATIONS" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
     
                <Box sx={{ height:"160vh",margin:"1px", width:"100%"}}>

                   <Typography textAlign="center" fontSize="20px" fontWeight="bold">COMMUNICATIONS</Typography>
                  <Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"30vh", }}>
                    <Stack sx={{margin:"15px", gap:"1em"}}>
                      <Typography sx={{backgroundColor:"darkblue", color:"wheat", height:"3vh",padding:"4px", marginTop:"8px" }}>FROM:</Typography>
                      <Typography sx={{ color:"wheat", border:"1px solid grey",height:"20vh"}}>info</Typography>
                    </Stack>
                  </Box>
               
                  

  

                  <Typography textAlign="center" fontSize="20px" fontWeight="bold"marginTop="13px">WEEKLY PROGRAMS</Typography>
                  <Box color="white" sx={{backgroundColor:"rgb(16, 16, 83)", height:"70vh"}}>
                    <Stack>
                      <Stack direction="row" justifyContent="space-between" gap="1em" padding="20px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography>ST PAUL'S ANGLICAN <br></br>CHURCH</Typography>
                        <button type='button' onClick={()=>setOpen1(true)}>VIEW</button>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between" gap="1em" padding="20px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography>ST PETER'S CATHOLIC CHURCH</Typography>
                        <button type='button' onClick={()=>setOpen2(true)}>VIEW</button>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between" gap="1em" padding="20px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography>GULU UNIVERSITY CHRISTIAN UNION</Typography>
                        <button type='button' onClick={()=>setOpen3(true)}>VIEW</button>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between" gap="1em" padding="20px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography>GULU UNIVERSITY <br></br>MOSQUE</Typography>
                        <button type='button' onClick={()=>setOpen4(true)}>VIEW</button>
                      </Stack>
                     
                    </Stack>
                  </Box>

                </Box>


      </TabPanel>




      <TabPanel value={value} index={1}>
      <Box sx={{ height:"160vh"}}>

<Typography textAlign="center" fontSize="20px" fontWeight="bold">GAMES AND SPORTS</Typography>
<Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"40vh", margin:"7px"}}>
  <Stack sx={{margin:"15px", gap:"1em"}}>
    <Typography sx={{ color:"white", height:"3vh",padding:"4px", marginTop:"8px" ,fontSize:"17px", textAlign:"center" }}>GULU UNIVERSITY GAMES UNION</Typography>
    <Typography sx={{ color:"wheat", border:"1px solid grey",height:"30vh"}}><img style={{width:"100%", height:"100%"}} src={require('../images/sports.jpg')} /></Typography>
  </Stack>
</Box>

<Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"30vh", margin:"3px"}}>
  <Stack sx={{margin:"15px", gap:"1em"}}>
    <Typography sx={{backgroundColor:"darkblue", color:"wheat", height:"3vh",padding:"4px", marginTop:"8px",textAlign:"center" }}>NOTICE</Typography>
    <Typography sx={{ color:"wheat", border:"1px solid grey",height:"20vh"}}>information</Typography>
  </Stack>
</Box>





<Typography textAlign="center" fontSize="20px" fontWeight="bold">TOURNAMENTS AND FIXTURES</Typography>
<Box color="white" sx={{backgroundColor:"rgb(16, 16, 83)", height:"70vh", margin:"7px"}}>
  <Stack>
    <Stack justifyContent="space-between" alignItems="center" gap="1em" padding="20px" sx={{margin:"7px", border:"1px solid grey"}} >
      <Typography textAlign="center">INTERFACULTY GAMES</Typography>
      
    </Stack>
     <button type='button' id='fixtures'>VIEW FIXTURES</button>
    
  </Stack>
</Box>

</Box>

      </TabPanel>
      <TabPanel value={value} index={2}>
                <Stack sx={{backgroundColor:" rgb(16, 16, 83)", color:"wheat", height:"82vh",width:"100%"}}>
                
                  <Stack direction="row" justifyContent="space-between" alignItems="center" marginRight="10px">
                  <Stack direction="row" margin="10px" sx={{gap:"1em" , alignItems:"center"}}>
                  <Box sx={{}} > <img style={{backgroundColor:"wheat", width:"50px", height:"50px", borderRadius:"25px"}} src={require('../images/aa1.png')} /></Box>
                    <Typography >@JimmyPro</Typography>

                  </Stack>

                  <Typography color="#fff">23mins ago</Typography>
                  </Stack>
                  <Typography color="#fff" margin="10px">React Native comrade...more</Typography>
                  <Box height="45vh" sx={{backgroundColor:"gray", margin:"10px"}} ><img style={{width:"100%", height:"45vh"}} src={require('../images/art6.jpg')} /></Box>
                  <Box sx={{height:"70px", backgroundColor:"darkblue", margin:"10px"}}>
                    <Stack direction="row" justifyContent="space-between" margin="7px">
                    
                      
                      <Typography fontSize="25px">👍<br></br><Typography fontSize="10px" textAlign="center"> 233</Typography></Typography>
                      <Typography fontSize="25px">❤<br></br><Typography fontSize="10px" textAlign="center"> 57</Typography></Typography>
                      <Typography fontSize="25px">👎<br></br><Typography fontSize="10px" textAlign="center"> 9</Typography></Typography>
                      <Typography fontSize="25px">💬 <br></br><Typography fontSize="10px" textAlign="center"> 65</Typography></Typography>
                      <button type='button' onClick={()=>setOpen(true)}>comment</button>
                    </Stack>
                  </Box>

                
                </Stack>
<br></br>
<Stack sx={{backgroundColor:" rgb(16, 16, 83)", color:"wheat", height:"82vh",}}>

                
                  <Stack direction="row" justifyContent="space-between" alignItems="center" marginRight="10px">
                  <Stack direction="row" margin="10px" sx={{gap:"1em" , alignItems:"center"}}>
                    <Box sx={{}} > <img style={{backgroundColor:"wheat", width:"50px", height:"50px", borderRadius:"25px"}} src={require('../images/aa.jpg')} /></Box>
                    <Typography >@JimmyPro</Typography>

                  </Stack>

                  <Typography color="#fff" fontSize="13px"></Typography>
                  </Stack>
                  <Typography color="#fff" margin="10px">React Native comrade...more</Typography>
                  <Box height="45vh" sx={{backgroundColor:"gray", margin:"10px"}} ><img style={{width:"100%", height:"45vh"}} src={require('../images/art4.jpg')} /></Box>
                  <Box sx={{height:"70px", backgroundColor:"darkblue", margin:"10px"}}>
                    <Stack direction="row" justifyContent="space-between" margin="7px">
                    
                      
                      <Typography fontSize="25px">👍<br></br><Typography fontSize="10px" textAlign="center"> 233</Typography></Typography>
                      <Typography fontSize="25px">❤<br></br><Typography fontSize="10px" textAlign="center"> 57</Typography></Typography>
                      <Typography fontSize="25px">👎<br></br><Typography fontSize="10px" textAlign="center"> 9</Typography></Typography>
                      <Typography fontSize="25px">💬 <br></br><Typography fontSize="10px" textAlign="center"> 65</Typography></Typography>
                      <button type='button' onClick={()=>setOpen(true)}>comment</button>
                    </Stack>
                  </Box>

                
                </Stack>
                
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box sx={{ height:"100vh"}}>
      <Typography textAlign="center" fontSize="20px" fontWeight="bold">COMMUNICATIONS</Typography>
                  <Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"30vh", }}>
                    <Stack sx={{margin:"15px", gap:"1em"}}>
                      <Typography sx={{backgroundColor:"darkblue", color:"wheat", height:"3vh",padding:"4px", marginTop:"8px" }}>FROM:</Typography>
                      <Typography sx={{ color:"wheat", border:"1px solid grey",height:"20vh"}}>information</Typography>
                    </Stack>
                  </Box>

                  <Typography textAlign="center" fontSize="18px" fontWeight="bold" marginTop="25px">CLUBS AND ASSOCIATIONS IN GU</Typography>
                  <Box border="2px solid black" sx={{ backgroundColor:"white"}}>
                    <Stack gap="1em" margin="1.5em">
                      <Typography>ACHOLI GULU UNIVERSITY STUDENTS ASSOCIATION -AGUSA</Typography>
                      <Button onClick={()=>setJoin(true)} variant='contained'sx={{ backgroundColor:"success"}}>SUBSCRIBE</Button>
                    </Stack>
                  </Box>
      </Box>
      </TabPanel>

      <Modal open={open} onClose={()=>setOpen(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px",backgroundColor:"white", padding:"1em", borderRadius:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                       
                        <form >
                          <Stack sx={{gap:2}}>
                          <TextField label="username" ></TextField>
                          <TextField label="comment" multiline></TextField>
                          <Button type="submit" variant='contained'>send</Button>
                          </Stack>
                         
                        </form>
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>

            <Modal open={join} onClose={()=>setJoin(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px",backgroundColor:"white", padding:"1em", borderRadius:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                       
                        <form >
                          <Stack sx={{gap:2}}>
                          <TextField label="full name" ></TextField>
                          <TextField label="reg number" multiline></TextField>
                          <TextField label="faculty" ></TextField>
                          <TextField label="year of study" multiline></TextField>
                          <TextField label="District" ></TextField>
                          <TextField label="phone number" multiline></TextField>
                          <Button type="submit" variant='contained'>send</Button>
                          </Stack>
                         
                        </form>
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>
               
               
            <Modal open={open1} onClose={()=>setOpen1(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px", height:"50vh", backgroundColor:"white", padding:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                        <Typography textAlign="center">WEEKLY PROGRAM</Typography>
                        <Box>
                          <Stack direction="row" gap="2em">
                            <Typography>MON:</Typography>
                            <Typography>activity activity activity activity activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>TUE:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>WED:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>THU:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>FRI:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>SAT:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>SUN:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                        </Box>
                       
                        
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>



            <Modal open={open2} onClose={()=>setOpen2(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px", height:"50vh", backgroundColor:"white", padding:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                        <Typography textAlign="center">WEEKLY PROGRAM</Typography>
                        <Box>
                          <Stack direction="row" gap="2em">
                            <Typography>MON:</Typography>
                            <Typography>activity activity activity activity activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>TUE:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>WED:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>THU:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>FRI:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>SAT:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>SUN:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                        </Box>
                       
                        
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>


            <Modal open={open3} onClose={()=>setOpen3(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px", height:"50vh", backgroundColor:"white", padding:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                        <Typography textAlign="center">WEEKLY PROGRAM</Typography>
                        <Box>
                          <Stack direction="row" gap="2em">
                            <Typography>MON:</Typography>
                            <Typography>activity activity activity activity activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>TUE:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>WED:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>THU:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>FRI:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>SAT:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>SUN:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                        </Box>
                       
                        
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>


            <Modal open={open4} onClose={()=>setOpen4(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px",zIndex:"1000", overFlowY:"auto", position:"fixed", height:"50vh", backgroundColor:"white", padding:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                        <Typography textAlign="center">WEEKLY PROGRAM</Typography>
                        <Box>
                          <Stack direction="row" gap="2em">
                            <Typography>MON:</Typography>
                            <Typography>activity activity activity activity activityctivity activity activity activity activityctivity activity activity activity activityctivity activity activity activity activityctivity activity activity activity activityctivity activity activity activity activityctivity activity activity activity activityctivity activity activity activity activityctivity activity activity activity activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>TUE:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>WED:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>THU:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>FRI:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>SAT:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em">
                            <Typography>SUN:</Typography>
                            <Typography>activity</Typography>

                          </Stack>
                        </Box>
                       
                        
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>
    </Box>
  );
}
