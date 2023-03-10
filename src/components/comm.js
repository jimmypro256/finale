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

  let table = collection(db, "general_communications")
  
    useEffect(()=>{
   
      ;(async()=>{
       const raw_data=await getDocs(table)
     
         const show=raw_data.docs.map((doc)=> doc.data())
         
         console.log(show)
       
         setFree(show)
        

       
      })()
    
    },[])



  return(

   
   <Box>
   <ButtonAppBar/>
    
    <Box sx={{width:"100%", background:"antiquewhite" , color:"black" }}>
 
   

<Typography textAlign="center" paddingTop="120px" fontSize="21px" fontWeight="bold" marginBottom="30px">GENERAL COMMUNICATIONS</Typography>

   



{  free.length === 0 ?(
             <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CircularProgress />
              </Box>   
              ):
           ( free.map(general_communications=>{
              
              return(
  

<Box  sx={{backgroundColor:"rgb(16, 16, 83)", padding:"20px",  margin:"5px", paddingTop:"6px", marginTop:"35px"}}>
 <Stack sx={{margin:"10px", gap:"1em"}}>
  <Box sx={{backgroundColor:"darkblue", color:"wheat",padding:"10px", margin:"5px",alignItems:"center" , border:"1px solid gray"}}>
  <Typography sx={{margin:"3px", fontSize:".8em" }}>TO: {general_communications.to}</Typography>
  <Typography sx={{ color:"white", fontSize:".8em", margin:"3px"}}>DATE: {general_communications.date}</Typography>
  </Box>
  
   
   
   <Box border="4px solid grey" margin="4px">
   
   <Typography sx={{ color:"wheat", margin:"7px"}}>{general_communications.info}</Typography>
   </Box>
 </Stack>
</Box>

   
)
}))
}



    
    
   </Box>
   </Box>
   
  )
}

export default Comm