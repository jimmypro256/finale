import React, {useState, useEffect} from 'react'
import '../App.css'
import { Box } from '@mui/system'
import {Typography,Stack} from '@mui/material'
import { collection, getDocs, getFirestore} from 'firebase/firestore'
import app from '../firebase-config'
import ButtonAppBar from './appbar1'
import {Backdrop, CircularProgress} from '@mui/material'


function Comm(){
  let db= getFirestore(app)
  const [free, setFree]=useState([])

  const [open1, setOpen1] = useState(false);
  let table = collection(db, "general_communications")
  
    useEffect(()=>{
      setOpen1(true);
      ;(async()=>{
       const raw_data=await getDocs(table)
      
       
       
         const show=raw_data.docs.map((doc)=> doc.data())
         
         console.log(show)
       
         setFree(show)
        
         setOpen1(false);
         
      
 
       
 
       
      })()
    
    },[])




 
 

  return(

   
   <Box>
   <ButtonAppBar/>
    
    <Box sx={{width:"100%", background:"antiquewhite" , color:"black" }}>
 
    <Backdrop open={open1}>
        <CircularProgress />
      </Backdrop>
   

<Typography textAlign="center" paddingTop="120px" fontSize="21px" fontWeight="bold" marginBottom="30px">GENERAL COMMUNICATIONS</Typography>

   



{
            free.map(general_communications=>{
              
              return(
  

<Box  sx={{backgroundColor:"rgb(16, 16, 83)", padding:"20px",  margin:"5px", paddingTop:"6px", marginTop:"35px"}}>
 <Stack sx={{margin:"15px", gap:"1em"}}>
  <Box sx={{backgroundColor:"darkblue", color:"wheat", height:"6vh",padding:"4px", margin:"5px",display:"flex", justifyContent:"space-between",alignItems:"center" , border:"1px solid gray"}}>
  <Typography sx={{margin:"7px" }}>{general_communications.to}</Typography>
  <Typography sx={{ color:"white", margin:"7px"}}>{general_communications.date}</Typography>
  </Box>
  
   
   
   <Box border="4px solid grey" margin="4px">
   
   <Typography sx={{ color:"wheat", margin:"7px"}}>{general_communications.info}</Typography>
   </Box>
 </Stack>
</Box>

   
)
})
}



    
    
   </Box>
   </Box>
   
  )
}

export default Comm