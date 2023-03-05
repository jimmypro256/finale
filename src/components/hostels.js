import React,{useState, useEffect} from 'react'
import '../App.css'
import {Stack, Typography, Box, Divider, CircularProgress} from '@mui/material'
import { View } from 'react-native-web'
import { collection, getDocs, getFirestore} from 'firebase/firestore'
import app from '../firebase-config'
import { Phone } from '@material-ui/icons'
import ButtonAppBar from './appbar1'


function Hostels(){
 
  
  let db= getFirestore(app)
 

  // view free hostel
   
  const [data, setData] = useState([]);
  const getAllData=()=> {
    getDocs(collection(db, "hostels")).then(docSnap => {
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




 

    // view hostel
   
    const [data2, setData2] = useState([]);
    const getalldata2=()=> {
      getDocs(collection(db, "hostelsAll")).then(docSnap => {
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

 
  return(

   
   <Box className="main" sx={{width:"100%", marginTop:"5px", background:"wheat"  }}>

    <ButtonAppBar/>
    <Box textAlign="center" marginTop="100px" ></Box>
    

    {/* free rooms fetch */}
    <Box>
     
 
 
     <Typography textAlign="center" marginTop="40px" fontSize="1.1em" fontWeight="500">HOSTELS WITH AVAILABLE/FREE ROOMS </Typography>
     {data.length === 0 ?
  <Typography textAlign="center" color="red" >not available currently</Typography>

  :
     data.map(item => (
           <View key={item.id}  getAllData={getAllData} >
           <Box backgroundColor="rgb(11, 11, 42)" margin="4px" padding="8px" marginBottom="26px">
            <Typography backgroundColor="darkblue" border="1px solid white" textAlign="center" color="white" padding="3px" margin="4px" >{item.hname}</Typography>
            <Box border="1px solid white" padding="10px" margin="5px" >
                <Stack color="white" width="97%" margin="auto" gap="1.5em">
                <Typography>{item.single}</Typography>
                
                <Typography ><Phone/>{item.contact}</Typography>
                
                </Stack>


            </Box>
               
        
         </Box>
             </View>
        ))
     }
 
 </Box>

  {/* hostels fetch */}
  <Box>
     
 
 
     <Typography textAlign="center" marginTop="40px" fontSize="1.1em" fontWeight="500">HOSTELS RECOMMENDED FOR STUDENTS</Typography>
 
  
     {data2.length === 0 ?
  <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <CircularProgress />
  </Box>
  :
  data2.map(item => (
    <View key={item.id} getalldata2={getalldata2}>
      <Box sx={{backgroundColor:"rgb(16, 16, 83)", margin:"5px"}}>
        <Typography textAlign="center" color="white" fontSize=".9em" padding="5px">{item.hname1}</Typography>
        <Divider color="white" margin="10px"/>
        <Box>
          <Typography color="white" fontSize=".9em" padding="5px">LOCATION:  {item.location}</Typography>
          <Typography color="white" fontSize=".9em" padding="5px">CONTACTS:  {item.contact1} </Typography>
          <Typography color="white" fontSize=".9em" padding="5px">TYPE: {item.type}</Typography>
          <Typography color="white" fontSize=".9em" padding="5px">SINGLE ROOMS: {item.scost}</Typography>
          <Typography color="white" fontSize=".9em" padding="5px">DOUBLE ROOMS: {item.dcost}</Typography>
          <Typography color="white" fontSize=".9em" padding="5px">WATER: {item.water}</Typography>
          <Typography color="white" fontSize=".9em" padding="5px">POWER: {item.power}</Typography>
        </Box>
        <Box color="red"></Box>
      </Box>
    </View>
  ))
}



 
 
 </Box>

 
    
    
  
</Box>
   
  )
}

export default Hostels

