import React, {useState, useEffect} from 'react'
import '../App.css'
import { Box,Typography, Stack} from '@mui/material'
import app from '../firebase-config'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import ButtonAppBar from './appbar1'
import { View } from 'react-native-web'


 function Spirit(){


    const db=getFirestore(app)


     // view programs
   
     const [data, setData] = useState([]);
     const getAllData=()=> {
       getDocs(collection(db, "church_comm")).then(docSnap => {
         let users = [];
         docSnap.forEach((doc)=> {
             users.push({ ...doc.data(), id:doc.id })
         });
         setData(users);
       });
     };
     
     useEffect(()=>{
       getAllData()
     });
 
 
      // view qoute
    
      const [data2, setData2] = useState([]);
      const getalldata2=()=> {
        getDocs(collection(db, "day_qoute")).then(docSnap => {
          let users = [];
          docSnap.forEach((doc)=> {
              users.push({ ...doc.data(), id:doc.id })
          });
          setData2(users);
        });
      };
      
      useEffect(()=>{
        getalldata2()
      });
 
 
      // view club
    
      const [data3, setData3] = useState([]);
      const getalldata3=()=> {
        getDocs(collection(db, "religious_clubs")).then(docSnap => {
          let users = [];
          docSnap.forEach((doc)=> {
              users.push({ ...doc.data(), id:doc.id })
          });
          setData3(users);
        });
      };
      
      useEffect(()=>{
        getalldata3()
      });

  
  

  return(

   
    <Box className="main" sx={{width:"100%", marginTop:"15px", paddingBottom:"10px", background:"antiquewhite" , color:"black" }}>
  

    <ButtonAppBar/>
    
{/* qoute */}
<Box margin="5px" border="3px solid blue" marginTop="60px" backgroundColor="black" color="white" boxShadow="0 0 12px black">
 <Typography textAlign="center" backgroundColor="rgb(16, 16, 83)" color="white" margin="10px" border=".8px solid blue">QUOTE OF THE DAY</Typography>
{data2.length === 0 ?
  <Typography textAlign="center" color="red" >not available currently</Typography>

  :
     data2.map(item => (
           <View key={item.id}  getalldata2={getalldata2} >
     
             
            <Typography textAlign="center" margin="5px" fontSize=".9em">{item.quote}</Typography>
          
          

         </View>
        ))
     }
 
 </Box>
    
   
      <Box margin="5px">
      
              
                  <Typography textAlign="center" fontSize="1.1em" fontWeight="bold"marginTop="27px">PRAYER AND WORSHIP PLACES</Typography>
                  <Box color="white" sx={{backgroundColor:"rgb(16, 16, 83)", padding:"10px"}}>
                    <Stack fontSize=".9em">
                      <Stack  padding="10px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography fontSize=".9rem">ST PAUL'S ANGLICAN CHURCH</Typography>
                        
                      </Stack>

                      <Stack  padding="10px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography fontSize=".9rem">ST PETER'S CATHOLIC CHURCH</Typography>
                        
                      </Stack>

                      <Stack  padding="10px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography fontSize=".9rem">GULU UNIVERSITY CHRISTIAN UNION</Typography>
                        
                      </Stack>

                      <Stack  padding="10px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography fontSize=".9rem">GULU UNIVERSITY MOSQUE</Typography>
                       
                      </Stack>


                      <Stack  padding="10px" sx={{margin:"7px", border:"1px solid grey"}} >
                        <Typography fontSize=".9rem">SEVENTH DAY ADVENTISTS CHURCH</Typography>
                     
                      </Stack>
                     
                    </Stack>
                  </Box>
      </Box>

      {/* WEEKLY PROGRAMS */}
      <Typography textAlign="center" fontSize="1.1em" fontWeight="bold"marginTop="47px">WEEKLY PROGRAMS</Typography>
      {data.length === 0 ?
  <Typography textAlign="center" color="red" >not available currently</Typography>

  :
     data.map(item => (
           <View key={item.id}  getAllData={getAllData} >
             <Box  sx={{backgroundColor:"rgb(16, 16, 83)", padding:"10px",  margin:"5px", paddingTop:"6px", marginTop:"15px"}}>
                          <Stack sx={{ gap:".4em"}}>
                            <Box sx={{backgroundColor:"rgb(16, 16, 83)", color:"wheat",padding:"5px", margin:"2px",alignItems:"center" , border:"3px solid gray"}}>
                            <Typography sx={{margin:"3px", fontSize:"1em" }}>FROM: {item.from}</Typography>
                            <Typography sx={{ color:"white", fontSize:"1em", margin:"1px"}}>DATE:  {item.date.toDate().toDateString()}</Typography>
                            </Box>
                            
                            
                            
                            <Box border="1px solid grey" margin="4px">
                            
                            <Typography sx={{ color:"wheat", margin:"3px"}}>{item.info}</Typography>
                            </Box>
                          </Stack>
            </Box>
         </View>
        ))
     }
 

       
     

  {/* ASSOCIATIONS */}
 


   <Box border="2px solid black" margin="4px" sx={{ backgroundColor:"white"}}>
  <Stack gap="1em" margin="1em">
    <Box>
      <Typography textAlign="center" fontweight="bold" backgroundColor="rgb(16, 16, 83)" color="white" padding="3px" border="1px solid black" fontsize="20px">RELIGIOUS CLUBS AND ASSOCIATIONS</Typography>
    </Box>
    {data3.length === 0 ?
      <Typography textAlign="center" color="red" >not available currently</Typography>
    :
     data3.map(item => (
           <View key={item.id}  getalldata3={getalldata3} >
            
                            

                            <Box border=".7px solid black" >
                                <Typography margin="3px" fontSize=".8em"  marginBottom="4px">{item.club}</Typography>
                              
                            </Box>

                 

         </View>
        ))
     }
             </Stack>
                </Box>
                
   </Box>
   
   
  )
}

export default Spirit