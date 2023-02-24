import React, { useState, useEffect } from 'react'
import '../App.css'
import { Box } from '@mui/system'
import { Typography,Stack,Modal,TextField,Button, Tooltip,Fab, Backdrop, CircularProgress, Snackbar, IconButton } from '@mui/material'
import CloseIcon from '@material-ui/icons/Close'

import AddIcon from '@material-ui/icons/Add'
import app from '../firebase-config'
import {collection, getDocs,addDoc, getFirestore,deleteDoc} from 'firebase/firestore'
import SimpleAccordion from './accordion'

import { doc } from 'firebase/firestore'

import {  Text, View } from 'react-native-web'
import ButtonAppBar from './appbar1'


const SuggestionBox=() =>{

  

    const db =getFirestore(app)



 

// fetch data
    const deleteItem=async(id)=>{
      await deleteDoc(doc(db, "suggestions", id));
      
      getAlldata();
    }


  const [data, setData] = useState([]);
  const getAlldata=()=> {
    getDocs(collection(db, "suggestions")).then(docSnap => {
      let users = [];
      docSnap.forEach((doc)=> {
          users.push({ ...doc.data(), id:doc.id })
      });
      setData(users);
    });
  };
  
  useEffect(()=>{
    getAlldata()
  }, []);
  



  return(

   <Box>
 <Typography textAlign="center" paddingTop="100px" fontWeight="bold">STUDENTS' SUGGESTIONS AND CONCERNS</Typography>
    
 {data.map(item => (
     <View key={item.id}  getAlldata={getAlldata}>
       <Box backgroundColor="rgb(2, 2, 44)" margin="7px" marginTop="20px" color="white" paddingBottom="13px" border="4px solid gray">
         <Stack direction="row" justifyContent="space-between">
            <Box margin="8px">
                <Stack  gap="1.4em">
                    <Typography>{item.name}</Typography>
                    <Typography>{item.faculty}</Typography>
                </Stack>
            </Box>



            <Box margin="8px">
                <Stack gap="1.4em">
                    <Typography>12/02/2023</Typography>
                    <Typography>0758694956</Typography>
                </Stack>
            </Box>
         </Stack>
         <hr border="2px solid white" margin="5px"></hr>

         <Box>
            <Typography margin="10px">{item.comment}</Typography>
         </Box>
       </Box>
       </View>

  ))}

{/* <View>
  
    {data.map(item => (
      <View key={item.id}  getAlldata={getAlldata}>
        <Stack direction="row" gap="20px">
      
        <Text>{item.name}</Text>
        <Text>{item.faculty}</Text>
        <Text>{item.comment}</Text>
       
        <button title="Delete" onClick={() => deleteItem(item.id)} >DELETE</button>
        </Stack>
       
      </View>
    ))}
  </View> */}

   
   </Box>
   
  )
}

export default SuggestionBox



