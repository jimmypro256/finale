import React,{useState} from 'react'
import '../App.css'
import { Box } from '@mui/system'
import {Typography,Stack,Modal,TextField,Button} from '@mui/material'
import {motion} from 'framer-motion'
import ButtonAppBar from './appbar1'





function Social(){
 
    const [open, setOpen] = useState(false)

  

  return(

   
   <Box className="main" sx={{width:"100%", marginTop:"15px",height:"1000vh", background:"antiquewhite" , color:"black" }}>
    
    <ButtonAppBar/>
    <Box textAlign="center" marginTop="80px" ></Box>
    <Typography textAlign="center" >TRENDING, ENTERTAINMENT, GOSSIP AND LIFESTYLE AROUND CAMPUS</Typography>
    
 
    
 

       <Box margin="5px">
          <Box height="170vh">
            <Typography textAlign="center" boxShadow="0 0 10px white" backgroundColor="black" border="1px solid white" fontSize="1.2em" color="antiquewhite" padding="5px">CAMPUS TOP 10 SONGS</Typography>
          
            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center" gap="2.7em">

                  <Box display="flex" alignItems="center" gap="1.3em">
                  <Typography color="white" fontSize="24px">1.</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={require('../images/trend1.jpg')} alt=""/>
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">Last Last Burnaboy</Typography>

            </Box>

            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center" gap="2.7em">

                  <Box display="flex" alignItems="center" gap="1.3em">
                  <Typography color="white" fontSize="24px">2.</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={require('../images/trend2.jpg')} alt=""/>
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">Electricity PHEELZ x Davido</Typography>

            </Box>

            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center"gap="2.7em">

                  <Box display="flex" alignItems="center" gap="1.3em">
                  <Typography color="white" fontSize="24px">3.</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={require('../images/trend3.jpg')} alt=""/>
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">Bandana Fireboy DML x Asake</Typography>

            </Box>

            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center"gap="2.7em">

                  <Box display="flex" alignItems="center" gap="1.3em">
                  <Typography color="white" fontSize="24px">4.</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={require('../images/trend4.jpg')} alt=""/>
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">Nsimbudde Eddy Kenzo</Typography>

            </Box>

            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center" gap="2.7em">

                  <Box display="flex" alignItems="center" gap="1.3em">
                  <Typography color="white" fontSize="24px">5.</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={require('../images/trend5.jpg')} alt=""/>
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">Sugarcane Camidoh x Phantom X Mayorkun</Typography>

            </Box>

            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center" gap="2.7em">

                  <Box display="flex" alignItems="center" gap="1.3em">
                  <Typography color="white" fontSize="24px">6.</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={require('../images/trend6.jpg')} alt=""/>
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">Calm Down Remix Rema X Selena Gomez</Typography>

            </Box>

            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center" gap="2.7em">

                  <Box display="flex" alignItems="center" gap="1.3em">
                  <Typography color="white" fontSize="24px">7.</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={require('../images/trend7.jpg')} alt="" />
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">Terminator Asake</Typography>

            </Box>

            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center" gap="2.7em">

                  <Box display="flex" alignItems="center" gap="1.3em">
                  <Typography color="white" fontSize="24px">8.</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={require('../images/trend8.jpg')} alt="" />
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">I'm Messed Omahlay</Typography>

            </Box>

            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center" gap="2.7em">

                  <Box display="flex" alignItems="center" gap="1.3em">
                  <Typography color="white" fontSize="24px">9.</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={require('../images/oromo.jpg')} alt=""/>
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">Oromo Eddy Wizzy</Typography>

            </Box>

            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center" gap="2.7em">

                  <Box display="flex" alignItems="center" gap=".5em">
                  <Typography color="white" fontSize="24px">10.</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={require('../images/trend10.jpg')} alt=""/>
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">its plenty Burnaboy</Typography>

            </Box>



         
          </Box>


      
<br></br>
       <Box backgroundColor="black" height="700vh" paddingTop="5px">
          <Typography textAlign="center" boxShadow="0 0 10px white" margin="3px" backgroundColor="black" border="1px solid white" fontSize="1.5em" color="antiquewhite" padding="5px">TRENDING MOVIES</Typography>
              
            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={require('../images/gray.jpg')} alt=""/>

                </Box>
                <Typography margin="5px" color="hotpink">THE GRAY MAN 2022:<Typography color="white">When the CIA's top asset -- his identity known to no one -- uncovers agency secrets, he triggers a global hunt by assassins set loose by his ex-colleague</Typography></Typography>
            </Box>


            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={require('../images/prey.jpg')} alt=""/>
                </Box>
                <Typography margin="5px" color="hotpink">PREY 2022<Typography color="white">A skilled Comanche warrior protects her tribe from a highly evolved alien predator that hunts humans for sport, fighting against wilderness, dangerous colonisers and this mysterious creature to keep her people safe.</Typography></Typography>
            </Box>


            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={require('../images/adam.jpg')} alt=""/>
                </Box>
                <Typography margin="5px" color="hotpink">BLACK ADAM 2022<Typography color="white">In ancient Kahndaq, Teth Adam was bestowed the almighty powers of the gods. After using these powers for vengeance, he was imprisoned, becoming Black Adam. Nearly 5,000 years have passed, and Black Adam has gone from man to myth to legend.</Typography></Typography>
            </Box>



            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={require('../images/bullet.jpg')} alt=""/>

                </Box>
                <Typography margin="5px" color="hotpink">BULLET TRAIN 2022<Typography color="white">Ladybug is an unlucky assassin who's determined to do his job peacefully after one too many gigs has gone off the rails. Fate, however, may have other plans as his latest mission puts him on a collision course with lethal adversaries from around the globe -- all with connected yet conflicting objectives -- on the world's fastest train.</Typography></Typography>
            </Box>


            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={require('../images/halo.jpg')} alt=""/>

                </Box>
                <Typography margin="5px" color="hotpink">HALLOWEEN ENDS 2022<Typography color="white">Four years after her last encounter with masked killer Michael Myers, Laurie Strode is living with her granddaughter and trying to finish her memoir. Myers hasn't been seen since, and Laurie finally decides to liberate herself from rage and fear and embrace life. However, when a young man stands accused of murdering a boy that he was babysitting, it ignites a cascade of violence and terror that forces Laurie to confront the evil she can't control.</Typography></Typography>
            </Box>



            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={require('../images/beast.jpg')} alt=""/>

                </Box>
                <Typography margin="5px" color="hotpink">BEAST 2022<Typography color="white">Recently widowed Dr. Nate Daniels and his two teenage daughters travel to a South African game reserve managed by Martin Battles, an old family friend and wildlife biologist. However, what begins as a journey of healing soon turns into a fearsome fight for survival when a lion, a survivor of bloodthirsty poachers, begins stalking them.</Typography></Typography>
            </Box>


            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={require('../images/tiv.jpg')} alt=""/>

                </Box>
                <Typography margin="5px" color="hotpink">KING OF THIEVES 2022<Typography color="white">When a vindictive bandit threatens the peace of a flourishing kingdom, the native mystical and worldly forces must come together to save the day.</Typography></Typography>
            </Box>


            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={require('../images/top.jpg')} alt=""/>

                </Box>
                <Typography margin="5px" color="hotpink">TOP GUN MAVERICK 2022<Typography color="white">After more than 30 years of service as one of the Navy's top aviators, Pete "Maverick" Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. Training a detachment of graduates for a special assignment, Maverick must confront the ghosts of his past and his deepest fears, culminating in a mission that demands the ultimate sacrifice from those who choose to fly it.</Typography></Typography>
            </Box>

            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={require('../images/bill.jpg')} alt=""/>

                </Box>
                <Typography margin="5px" color="hotpink">BILLIONIARE NANNY 2022<Typography color="white">Top Nigerian TV series 2022</Typography></Typography>
            </Box>

            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={require('../images/chief.jpg')} alt=""/>

                </Box>
                <Typography margin="5px" color="hotpink">CHIEF DADDY 2018<Typography color="white">When a billionaire industrialist unexpectedly drops dead, his money-crazed family, friends, and staff scramble for their share of his fortune.</Typography></Typography>
            </Box>
       </Box>



<br></br>
<Typography textAlign="center" fontSize="21px" marginTop="40px" fontWeight="bold">CAMPUS TV</Typography>

<Box backgroundColor="black" height="55vh" paddingTop="10px" >
 
  <Box height="43vh" border="1px solid white" backgroundColor="gray" borderRadius="20px" marginBottom="10px" margin="20px">
     
  </Box>
  <Typography textAlign="center"  >🔼🔳🔽</Typography>
</Box>

<br></br>
<Box>
      
      <Box backgroundColor="black" height="100vh">
      <Typography textAlign="center" color="wheat" fontWeight="bold" fontSize="24px" margin="4px">TODAYS BIRTHDAY BABY</Typography>
        <Box margin="5px" height="75vh" border="3px solid hotpink" >
          <Box border="3px solid lawngreen" height="75vh" >
            <Box border="3px solid blue" height="75vh" >

            </Box>
          </Box>
        </Box>
        <Typography textAlign="center" fontSize="28px" fontWeight="bold" color="hotpink">🎂🎈HAPPY BIRTHDAY🎈🎂</Typography>
        <Typography textAlign="center" fontSize="28px" fontWeight="bold" color="orange">🥰JIMMY PRO🥰</Typography>
      </Box>
</Box>

<br></br>



<Typography textAlign="center" marginBottom="5px" boxShadow="0 0 10px white" backgroundColor="black" border="1px solid white" fontSize="1.5em" color="antiquewhite" padding="5px" marginTop="50px">TRENDING & GOSSIP</Typography>
<Stack sx={{backgroundColor:" rgb(16, 16, 83)", color:"wheat", height:"110vh",border:"2px solid white"}}>

              
                <Stack direction="row" justifyContent="space-between" alignItems="center" marginRight="10px">
                <Stack direction="row" margin="10px" sx={{gap:"1em" , alignItems:"center"}}>
                  <Box sx={{}} > <img style={{backgroundColor:"wheat", width:"50px", height:"50px", borderRadius:"25px"}} src={require('../images/aa.jpg')} alt="" /></Box>
                  <Typography >@JimmyPro</Typography>

                </Stack>

                <Typography color="#fff" fontSize="13px"> 11/12/2022</Typography>
                </Stack>
                <Typography color="#fff" margin="10px">React Native comrade...more ffffffffffffff fffffffff fffffffffffffffffff ffffffffff fffffffffff fffffff ffffff fffffffff ffffffffff</Typography>
                <Box height="60vh" sx={{backgroundColor:"gray", margin:"10px" ,border:"1px solid white"}} ><img style={{width:"100%", height:"60vh"}} src={require('../images/art4.jpg')} alt="" /></Box>
                <Box sx={{height:"70px", backgroundColor:"darkblue",border:"1px solid white", margin:"10px" , marginTop:"17px"}}>
                  <Stack direction="row" justifyContent="space-between" margin="7px" alignItems="center">
                  
                
                  <Box>
                  <Typography fontSize="30px" >💬</Typography>
               
                  </Box>
                    
                    <button type='button' id="comment" onClick={()=>setOpen(true)}>comment</button>
                  </Stack>
                </Box>

              
              </Stack>
              
    
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
       </Box>
    




    
       
    
   </Box>
   
  )
}

export default Social