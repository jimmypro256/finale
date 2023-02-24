import React, {useEffect, useState} from 'react'
import '../App.css'
import { Box } from '@mui/system'
import {Typography,Stack,TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material'
import app from '../firebase-config'  
import {collection, getDocs ,getFirestore} from 'firebase/firestore'
import ButtonAppBar from './appbar1'



function Sports(){
  const db =getFirestore(app)
  
  // match day
  let matchDay = collection(db, "match_day")
  const [free, setFree]=useState([])
   useEffect(()=>{

     ;(async()=>{
      const raw_data=await getDocs(matchDay)
     
      
      
        const show=raw_data.docs.map((doc)=> doc.data())
        
        console.log(show)
      
        setFree(show)
        
      

      
     })()
   
   },[])


    // football fixtures
  let football = collection(db, "football_fixtures")
  const [free1, setFree1]=useState([])
   useEffect(()=>{

     ;(async()=>{
      const raw_data=await getDocs(football)
     
      
      
        const show=raw_data.docs.map((doc)=> doc.data())
        
        console.log(show)
      
        setFree1(show)
        
      

      
     })()
   
   },[])



    // netball fixtures
  let netball = collection(db, "netball_fixtures")
  const [free2, setFree2]=useState([])
   useEffect(()=>{

     ;(async()=>{
      const raw_data=await getDocs(netball)
     
      
      
        const show=raw_data.docs.map((doc)=> doc.data())
        
        console.log(show)
      
        setFree2(show)
        
      

      
     })()
   
   },[])


     // volley fixtures
  let volley = collection(db, "volleyball_fixtures")
  const [free3, setFree3]=useState([])
   useEffect(()=>{

     ;(async()=>{
      const raw_data=await getDocs(volley)
     
      
      
        const show=raw_data.docs.map((doc)=> doc.data())
        
        console.log(show)
      
        setFree3(show)
        
      

      
     })()
   
   },[])


       //match results
  let result = collection(db, "match_results")
  const [free4, setFree4]=useState([])
   useEffect(()=>{

     ;(async()=>{
      const raw_data=await getDocs(result)
     
      
      
        const show=raw_data.docs.map((doc)=> doc.data())
        
        console.log(show)
      
        setFree4(show)
        
      

      
     })()
   
   },[])





  return(

   
   <Box className="main" sx={{width:"100%", marginTop:"15px",paddingBottom:"30px", background:"antiquewhite" , color:"black" }}>
    
    <ButtonAppBar/>
    <Box textAlign="center" marginTop="100px" ></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>
    <Box textAlign="center"></Box>


<Box sx={{ paddingBottom:"10px"}}>
<Typography textAlign="center" >GAMES AND SPORTS AROUND CAMPUS</Typography>
<Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"54vh", margin:"7px"}}>
  <Stack sx={{margin:"15px", gap:"1em"}}>
    <Typography sx={{ color:"wheat", border:"1px solid gray", height:"3vh",paddingBottom:"15px", backgroundColor:"blue", margin:"5px",fontSize:"18px", textAlign:"center" }}>GULU UNIVERSITY GAMES UNION</Typography>
    <Typography sx={{ color:"wheat", margin:"3px", border:"3px solid grey",height:"40vh"}}><img style={{width:"100%", height:"100%"}} src={require('../images/game1.jpg')} alt="" /></Typography>
  </Stack>
</Box>


{
            free.map(match_day=>{
              
              return(
  

<Box  sx={{backgroundColor:"rgb(16, 16, 83)", height:"45vh", margin:"5px", paddingTop:"5px", marginTop:"20px"}}>
  <Stack sx={{margin:"15px", gap:"1em"}}>
    <Typography sx={{backgroundColor:"darkblue", color:"wheat",border:"1px solid white", height:"5vh",padding:"4px", margin:"3px",textAlign:"center", fontSize:"22px" }}>NOTICE</Typography>
    <Box sx={{ border:"4px solid grey",height:"30vh"}}>
    <Typography sx={{ margin:"7px", fontSize:"23px", textAlign:"center", fontWeight:"bold", color:"lawngreen"}}> {match_day.match}</Typography>
   <Box width="200px" margin="auto" marginTop="15px" >

   <Typography sx={{ color:"wheat", margin:"7px", fontSize:"22px"}}>DATE:{match_day.time}</Typography>
   
   </Box>
    </Box>
  </Stack>
</Box>


                  )
                  })
                  }







<Typography textAlign="center" fontSize="20px" fontWeight="bold" marginTop="20px">TOURNAMENTS AND FIXTURES</Typography>
<Box color="white" sx={{backgroundColor:"rgb(16, 16, 83)", paddingBottom:"20px", margin:"7px"}}>
  <Stack>
    <Stack justifyContent="space-between" alignItems="center" gap="1em" padding="10px" sx={{margin:"7px", border:"1px solid grey"}} >
      <Typography textAlign="center" fontSize="22px" fontWeight="bold">INTERFACULTY GAMES</Typography>
      
    </Stack>
     <Typography textAlign="center" margin="4px" marginTop="20px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">FOOTBALL FIXTURES</Typography>
     <Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" >

     {
            free1.map(football_fixtures=>{
              
              return(
    
        <Box backgroundColor="lavenderblush" margin="4px" border="1px solid black">

          <Stack direction="row" justifyContent="space-between" margin="5px">
            <Box>
            <Typography>{football_fixtures.match1}</Typography>
            <Typography>{football_fixtures.venue}</Typography>
            </Box>

            <Box>
            <Typography>{football_fixtures.when}</Typography>
            <Typography>{football_fixtures.time1}</Typography>
            </Box>

          </Stack>
        </Box>

        )
                  })
                  }


     </Box>


     <Typography textAlign="center" margin="4px" marginTop="30px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">NETBALL FIXTURES</Typography>
     <Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" >
            {/* data card start*/}
        
        {
            free2.map(netball_fixtures=>{
              
              return(
                <Box backgroundColor="lavenderblush" margin="4px" border="1px solid black">

                <Stack direction="row" justifyContent="space-between" margin="5px">
                  <Box>
                  <Typography>{netball_fixtures.match2}</Typography>
                  <Typography>{netball_fixtures.venue1}</Typography>
                  </Box>
      
                  <Box>
                  <Typography>{netball_fixtures.when1}</Typography>
                  <Typography>{netball_fixtures.time2}</Typography>
                  </Box>
      
                </Stack>
              </Box>
      
     

        )
      })
      }
          {/* data card end*/}

     </Box>



     <Typography textAlign="center" margin="4px" marginTop="30px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">VOLLEYBALL FIXTURES</Typography>
     <Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" >
            {/* data card start*/}
       
   

        {
            free3.map(volleyfootball_fixtures=>{
              
              return(
                <Box backgroundColor="lavenderblush" margin="4px" border="1px solid black">

                <Stack direction="row" justifyContent="space-between" margin="5px">
                  <Box>
                  <Typography>{volleyfootball_fixtures.match3}</Typography>
                  <Typography>{volleyfootball_fixtures.venue2}</Typography>
                  </Box>
      
                  <Box>
                  <Typography>{volleyfootball_fixtures.when2}</Typography>
                  <Typography>{volleyfootball_fixtures.time3}</Typography>
                  </Box>
      
                </Stack>
              </Box>
      

        )
      })
      }
       
          {/* data card end*/}

     </Box>


     <Typography textAlign="center" margin="4px" marginTop="30px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">MATCH RESULTS</Typography>
     <Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" >
               {/* data card start*/}
               {
            free4.map(match_results=>{
              
              return(

               <Box backgroundColor="lavenderblush" margin="4px" border="1px solid black">

                <Stack direction="row" justifyContent="space-between" margin="5px">
                  <Box>
                  <Typography>{match_results.match4}</Typography>
                
                  </Box>

                  <Box>
                  <Typography>{match_results.when3}</Typography>
                
                  </Box>

                </Stack>
</Box>

)
})
}

{/* data card end*/}



     </Box>


     <Typography textAlign="center" margin="4px" marginTop="30px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">TABLE STANDING</Typography>
     <Box backgroundColor="lavenderblush" border="2px solid darkblue" color="black" margin="5px" >

       {/* table */}
       <Typography marginTop="19px"   textAlign="center">GROUP A</Typography>

         <Box backgroundColor="lightblue" margin="5px">
           <TableContainer >
              <Table>
                 <TableHead>
                    <TableRow >
                        <TableCell sx={{textAlign:"center" }}>S/N</TableCell>
          
                        <TableCell sx={{textAlign:"justify"}}>TEAM</TableCell>
                        <TableCell sx={{textAlign:"center"}}>GOALS</TableCell>
                        <TableCell sx={{textAlign:"center"}}>PTS</TableCell>
                      </TableRow>
         
                  </TableHead>
        
                     <TableBody>
       
                        <TableRow>
                          <TableCell sx={{textAlign:"center" }}>1</TableCell>
                          <TableCell sx={{textAlign:"justify"}}>FOS</TableCell>
                          <TableCell sx={{textAlign:"center"}}>7 </TableCell>
                          <TableCell sx={{textAlign:"center"}}>7</TableCell>
                        </TableRow>
         
                     </TableBody>

                     <TableBody>
       
                      <TableRow>
                        <TableCell sx={{textAlign:"center" }}>2</TableCell>
                        <TableCell sx={{textAlign:"justify"}}>FEH</TableCell>
                        <TableCell sx={{textAlign:"center"}}>5</TableCell>
                        <TableCell sx={{textAlign:"center"}}>4</TableCell>
                      </TableRow>

                     </TableBody>

                </Table>
           </TableContainer >
       </Box>



           {/* table */}
           <Typography margin="7"   textAlign="center">GROUP B</Typography>

<Box backgroundColor="lightblue" margin="5px">
  <TableContainer >
     <Table>
        <TableHead>
           <TableRow >
               <TableCell sx={{textAlign:"center" }}>S/N</TableCell>
 
               <TableCell sx={{textAlign:"justify"}}>TEAM</TableCell>
               <TableCell sx={{textAlign:"center"}}>GOALS</TableCell>
               <TableCell sx={{textAlign:"center"}}>PTS</TableCell>
             </TableRow>

         </TableHead>

            <TableBody>

               <TableRow>
                 <TableCell sx={{textAlign:"center" }}>1</TableCell>
                 <TableCell sx={{textAlign:"justify"}}>FOS</TableCell>
                 <TableCell sx={{textAlign:"center"}}>7 </TableCell>
                 <TableCell sx={{textAlign:"center"}}>7</TableCell>
               </TableRow>

            </TableBody>

            <TableBody>

             <TableRow>
               <TableCell sx={{textAlign:"center" }}>2</TableCell>
               <TableCell sx={{textAlign:"justify"}}>FEH</TableCell>
               <TableCell sx={{textAlign:"center"}}>5</TableCell>
               <TableCell sx={{textAlign:"center"}}>4</TableCell>
             </TableRow>

            </TableBody>

       </Table>
  </TableContainer >
</Box>

     </Box>
    
  </Stack>
</Box>

</Box>
    

    
   </Box>
   
  )
}

export default Sports