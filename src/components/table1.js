import React from 'react'
import '../App.css'
import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'



function Table1(){

 
  return(

   
   <Box className="main" sx={{width:"100%", marginTop:"5px", background:"wheat" ,height:"110vh" }}>
    <Box textAlign="center" marginTop="100px" ></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
   
      <Box sx={{backgroundColor:"rgb(16, 16, 83)", margin:"5px"}}>
      <TableContainer >
      <Table>
        <TableHead>
          <TableRow >
            <TableCell sx={{textAlign:"center" ,fontSize:"19px",fontWeight:"bold", fontFamily:"Arial, Helvetica, sans-serif", color:"white"}}>HOSTEL</TableCell>
          
            <TableCell sx={{textAlign:"center",fontSize:"19px",fontWeight:"bold", fontFamily:"Arial, Helvetica, sans-serif", color:"white"}}>CONTACTS</TableCell>
            <TableCell sx={{textAlign:"center",fontSize:"19px",fontWeight:"bold", fontFamily:"Arial, Helvetica, sans-serif", color:"white"}}>DETAILS</TableCell>
          </TableRow>
         
        </TableHead>
        
        <TableBody>
       
                <TableRow>
                  <TableCell sx={{textAlign:"center" ,color:"wheat"}}>Academics</TableCell>
                  
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>AYella jimmy</TableCell>
                  <TableCell sx={{textAlign:"center",color:"wheat"}}>07896879765
                  </TableCell>
                 
                </TableRow>
         
       
       
          </TableBody>

      </Table>
    </TableContainer>
      
      </Box>
   
   </Box>
   
  )
}

export default Table1

