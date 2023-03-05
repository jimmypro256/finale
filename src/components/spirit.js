import React, {useState} from 'react'
import '../App.css'
import { Box } from '@mui/system'
import {Typography,Stack,Modal, Button,TextField} from '@mui/material'
import PhoneIcon from '@material-ui/icons/Phone'
import ButtonAppBar from './appbar1'

 function Spirit(){
   


    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [join, setJoin]=useState(false)

  return(

   
   <Box className="main" sx={{width:"100%", marginTop:"15px", paddingBottom:"10px", background:"antiquewhite" , color:"black" }}>
    
    <ButtonAppBar/>
    <Box textAlign="center" marginTop="100px" ></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center">
     
    </Box>
    <Box margin="5px" border="3px solid gray" marginTop="60px" backgroundColor="black" color="white" boxShadow="0 0 12px black">
             <Typography textAlign="center" color="wheat" margin="10px" border="3px solid gray">QUOTE OF THE DAY</Typography>
             
            <Typography textAlign="center" margin="5px" fontSize="21px">"Do unto others what you want to be done unto you"</Typography>
            <Typography textAlign="center" margin="5px">acts 12:4🤍</Typography>
            </Box>

    
   
      <Box margin="5px">
      
              
                  <Typography textAlign="center" fontSize="20px" fontWeight="bold"marginTop="13px">WEEKLY PROGRAMS</Typography>
                  <Box color="white" sx={{backgroundColor:"rgb(16, 16, 83)", height:"80vh"}}>
                    <Stack>
                      <Stack direction="row" justifyContent="space-between" gap="1em" padding="20px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography>ST PAUL'S ANGLICAN <br></br>CHURCH</Typography>
                        <button type='button' onClick={()=>setOpen1(true)}>VIEW</button>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between" gap="1em" padding="20px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography>ST PETER'S CATHOLIC <br></br>CHURCH</Typography>
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


                      <Stack direction="row" justifyContent="space-between" gap="1em" padding="20px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography>SEVENTH DAY ADVENTISTS<br></br>CHURCH</Typography>
                        <button type='button' onClick={()=>setOpen5(true)}>VIEW</button>
                      </Stack>
                     
                    </Stack>
                  </Box>




                  <Modal open={open1} onClose={()=>setOpen1(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px", height:"55vh", backgroundColor:"white", padding:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                       <Typography textAlign="center">ST PAUL'S ANGLICAN CHURCH</Typography>
                        <Typography textAlign="center">WEEKLY PROGRAM</Typography>

                        <Box>
                          <Stack direction="row" gap="2em" marginBottom="8px">
                            <Typography>MON:</Typography>
                            <Typography>Prayers and wordship at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.3em" marginBottom="8px">
                            <Typography>TUE:</Typography>
                            <Typography>choir practice at 4pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em" marginBottom="8px">
                            <Typography>WED:</Typography>
                            <Typography>church leaders meeting 9:40AM</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.3em" marginBottom="8px">
                            <Typography>THU:</Typography>
                            <Typography>Bible study at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.6em" marginBottom="8px">
                            <Typography>FRI:</Typography>
                            <Typography>Worship 3:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.4em" marginBottom="8px">
                            <Typography>SAT:</Typography>
                            <Typography>church cleaning at 5pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.15em">
                            <Typography>SUN:</Typography>
                            <Typography>First mass 6:40am<br></br>second mass 8:30am</Typography>
                           

                          </Stack>
                        </Box>
                       
                        
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>



            <Modal open={open2} onClose={()=>setOpen2(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px", height:"55vh", backgroundColor:"white", padding:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                       <Typography textAlign="center">ST PETER'S CATHOLIC CHURCH</Typography>
                        <Typography textAlign="center">WEEKLY PROGRAM</Typography>

                        <Box>
                          <Stack direction="row" gap="2em" marginBottom="8px">
                            <Typography>MON:</Typography>
                            <Typography>Prayers and wordship at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.3em" marginBottom="8px">
                            <Typography>TUE:</Typography>
                            <Typography>choir practice at 4pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em" marginBottom="8px">
                            <Typography>WED:</Typography>
                            <Typography>church leaders meeting 9:40AM</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.3em" marginBottom="8px">
                            <Typography>THU:</Typography>
                            <Typography>Bible study at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.6em" marginBottom="8px">
                            <Typography>FRI:</Typography>
                            <Typography>Worship 3:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.4em" marginBottom="8px">
                            <Typography>SAT:</Typography>
                            <Typography>church cleaning at 5pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.15em">
                            <Typography>SUN:</Typography>
                            <Typography>First mass 6:40am<br></br>second mass 8:30am</Typography>
                           

                          </Stack>
                        </Box>
                       
                        
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>


            <Modal open={open3} onClose={()=>setOpen3(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"97%", backgroundColor:"white", padding:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                       <Typography textAlign="center">GUCU</Typography>
                        <Typography textAlign="center">WEEKLY PROGRAM</Typography>

                        <Box>
                          <Stack direction="row" gap="2em" marginBottom="8px">
                            <Typography>MON:</Typography>
                            <Typography>Prayers and worship at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.3em" marginBottom="8px">
                            <Typography>TUE:</Typography>
                            <Typography>choir practice at 4pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em" marginBottom="8px">
                            <Typography>WED:</Typography>
                            <Typography>church leaders meeting 9:40AM</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.3em" marginBottom="8px">
                            <Typography>THU:</Typography>
                            <Typography>Bible study at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.6em" marginBottom="8px">
                            <Typography>FRI:</Typography>
                            <Typography>Worship 3:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.4em" marginBottom="8px">
                            <Typography>SAT:</Typography>
                            <Typography>church cleaning at 5pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.15em">
                            <Typography>SUN:</Typography>
                            <Typography>First mass 6:40am<br></br>second mass 8:30am</Typography>
                           

                          </Stack>
                        </Box>
                       
                        
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>


            <Modal open={open4} onClose={()=>setOpen4(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px",zIndex:"1000", overFlowY:"auto", position:"fixed", height:"55vh", backgroundColor:"white", padding:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                       <Typography textAlign="center">GULU UNIVERSITY MOSQUE</Typography>
                        <Typography textAlign="center">WEEKLY PROGRAM</Typography>

                        <Box>
                          <Stack direction="row" gap="2em" marginBottom="8px">
                            <Typography>MON:</Typography>
                            <Typography>prayers at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.3em" marginBottom="8px">
                            <Typography>TUE:</Typography>
                            <Typography>prayers at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em" marginBottom="8px">
                            <Typography>WED:</Typography>
                            <Typography>prayers at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.3em" marginBottom="8px">
                            <Typography>THU:</Typography>
                            <Typography>prayers at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.6em" marginBottom="8px">
                            <Typography>FRI:</Typography>
                            <Typography>prayers at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.4em" marginBottom="8px">
                            <Typography>SAT:</Typography>
                            <Typography>prayers at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.15em">
                            <Typography>SUN:</Typography>
                            <Typography>prayers at 6:00pm</Typography>
                           

                          </Stack>
                        </Box>
                       
                        
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>


            <Modal open={open5} onClose={()=>setOpen5(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px",zIndex:"1000", overFlowY:"auto", position:"fixed", height:"55vh", backgroundColor:"white", padding:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                       <Typography textAlign="center">SEVENTH DAY ADVENTISTS CHURCH</Typography>
                        <Typography textAlign="center">WEEKLY PROGRAM</Typography>

                        <Box>
                          <Stack direction="row" gap="2em" marginBottom="8px">
                            <Typography>MON:</Typography>
                            <Typography>Prayers and worship at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.3em" marginBottom="8px">
                            <Typography>TUE:</Typography>
                            <Typography>choir practice at 4pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2em" marginBottom="8px">
                            <Typography>WED:</Typography>
                            <Typography>church leaders meeting 9:40AM</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.3em" marginBottom="8px">
                            <Typography>THU:</Typography>
                            <Typography>Bible study at 6:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.6em" marginBottom="8px">
                            <Typography>FRI:</Typography>
                            <Typography>Worship 3:00pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.4em" marginBottom="8px">
                            <Typography>SAT:</Typography>
                            <Typography>church cleaning at 5pm</Typography>

                          </Stack>
                          <Stack direction="row" gap="2.15em">
                            <Typography>SUN:</Typography>
                            <Typography>First mass 6:40am<br></br>second mass 8:30am</Typography>
                           

                          </Stack>
                        </Box>
                       
                        
                       
                        </Stack> 
                        

        
                       
                    </Box>
            </Modal>
    
      </Box>
       

      <Box border="2px solid black" margin="4px" sx={{ backgroundColor:"white"}}>
                    <Stack gap="1em" margin="1.5em">
                      <Box>
                        <Typography textAlign="center" fontweight="bold" backgroundColor="rgb(16, 16, 83)" color="white" padding="3px" border="1px solid black" fontsize="20px">RELIGIOUS CLUBS AND ASSOCIATIONS</Typography>
                      </Box>
                         

                         <Box border="2px solid black" >
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                         </Box>
                      <Button onClick={()=>setJoin(true)} variant='contained'sx={{ backgroundColor:"success"}}>SUBSCRIBE</Button>
                    </Stack>
                  </Box>


                  <Modal open={join} onClose={()=>setJoin(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                    <Box  sx={{width:"300px",backgroundColor:"white", padding:"1em", borderRadius:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                       
                        <form >
                          <Stack sx={{gap:2}}>
                          <TextField label="full name" ></TextField>
                          <TextField label="reg number" multiline></TextField>
                          <TextField label="faculty" ></TextField>
                          <TextField label="year of study" multiline></TextField>
                          <TextField label="name of association" ></TextField>
                          <TextField label="phone number" multiline></TextField>
                          <Button type="submit" variant='contained'>send</Button>
                          </Stack>
                         
                        </form>
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>

            <Box height="10vh" margin="5px" border="3px solid gray" marginTop="60px" backgroundColor="black" color="white" boxShadow="0 0 12px black">
            <Typography textAlign="center" margin="5px">For Guidance and Counciling <br></br> <PhoneIcon/>+256 785xxxxxxxxx</Typography>
            </Box>
                
   </Box>
   
  )
}

export default Spirit