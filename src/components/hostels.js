import React,{useState, useEffect} from 'react'
import '../App.css'
import {Stack, Typography, Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Divider} from '@mui/material'

import { collection, getDocs,doc, getFirestore} from 'firebase/firestore'
import app from '../firebase-config'
import { DoubleArrow, Phone } from '@material-ui/icons'
import ButtonAppBar from './appbar1'


function Hostels(){
 
  
  
 
  let db= getFirestore(app)
 

 let table = collection(db, "hostels")
  const [free, setFree]=useState([])
   useEffect(()=>{

     ;(async()=>{
      const raw_data=await getDocs(table)
     
      
      
        const show=raw_data.docs.map((doc)=> doc.data())
        
        console.log(show)
        //setOpen(false)
        setFree(show)
        
        //document.getElementById('loading').style.display="none"
     

      

      
     })()
   
   },[])



   
   //all hostels

   let table1 = collection(db, "hostelsAll")
   const [freea, setFreea]=useState([])


   useEffect(()=>{

    ;(async()=>{
     const raw_data=await getDocs(table1)
    
     
     
       const show=raw_data.docs.map((doc)=> doc.data())
       
       console.log(show)
       //setOpen(false)
       setFreea(show)
       
       //document.getElementById('loading').style.display="none"
    

     

     
    })()
  
  },[])

   
 
  return(

   
   <Box className="main" sx={{width:"100%", marginTop:"5px", background:"wheat" ,height:"360vh" }}>

    <ButtonAppBar/>
    <Box textAlign="center" marginTop="100px" ></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>



   
    {
            freea.map(hostelsAll=>{
              
              return(
     <Box sx={{backgroundColor:"rgb(16, 16, 83)", margin:"5px"}}>
       <Typography textAlign="center" color="white" fontSize=".8em" padding="5px">{hostelsAll.hname1}</Typography>
       
      <Divider color="white" margin="10px"/>
      <Box>
          <Typography color="white" fontSize=".8em" padding="5px">LOCATION:  {hostelsAll.location}</Typography>
          <Typography color="white" fontSize=".8em" padding="5px">CONTACTS:  {hostelsAll.contact1} </Typography>
          <Typography color="white" fontSize=".8em" padding="5px">TYPE: {hostelsAll.type}</Typography>
          <Typography color="white" fontSize=".8em" padding="5px">SINGLE ROOMS: {hostelsAll.scost}</Typography>
          <Typography color="white" fontSize=".8em" padding="5px">DOUBLE ROOMS: {hostelsAll.dcost}</Typography>
          <Typography color="white" fontSize=".8em" padding="5px">WATER: {hostelsAll.water}</Typography>
          <Typography color="white" fontSize=".8em" padding="5px">POWER: {hostelsAll.power}</Typography>

      </Box>
      </Box>

)
})
}

    
      <Box>
     
 
 
    <Typography textAlign="center" marginTop="40px" fontSize="24px" fontWeight="bold">HOSTELS WITH FREE ROOMS</Typography>

    {
            free.map(hostels=>{
              
              return(
    <Box backgroundColor="rgb(11, 11, 42)" margin="4px" height="27vh" paddingTop="5px" marginBottom="26px">
      <Typography backgroundColor="darkblue" border="1px solid white" textAlign="center" color="white" padding="3px" margin="4px" >{hostels.hname}</Typography>
      <Box border="1px solid white" height="20vh" margin="5px" >
        <Stack color="white" width="270px" margin="auto" gap="1.5em">
        <Typography>SINGLE ROOMS AVAILABLE:{hostels.single}</Typography>
        <Typography>SINGLE ROOMS AVAILABLE:{hostels.double}</Typography>
        <Typography ><Phone/>{hostels.contact}</Typography>
        
        </Stack>


      </Box>
  
    </Box>

   
)
})
}


</Box>
</Box>
   
  )
}

export default Hostels

