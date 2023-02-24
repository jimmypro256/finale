import React, { useState, useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Box, Stack} from '@mui/material'
import app from '../firebase-config';

import { Timestamp, collection, addDoc,getFirestore,getDocs,doc,deleteDoc } from "firebase/firestore";
export default function SimpleAccordion() {

  let db= getFirestore(app)


   // executives fetch
   const [data, setData] = useState([]);
   const getAlldata=()=> {
     getDocs(collection(db, "Executive_leaders")).then(docSnap => {
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


    // cabinet fetch
    const [data1, setData1] = useState([]);
    const getAlldata1=()=> {
      getDocs(collection(db, "Cabinet_leaders")).then(docSnap => {
        let users = [];
        docSnap.forEach((doc)=> {
            users.push({ ...doc.data(), id:doc.id })
        });
        setData1(users);
      });
    };
    
    useEffect(()=>{
      getAlldata1()
    }, []);
  return (
    <div>
      <Accordion backgroundColor="red" color="red">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>EXECUTIVES</Typography>
        </AccordionSummary>
        <AccordionDetails>
             {/* EXECUTIVES */}
             {data.map(item => (
           <view key={item.id}  getAlldata={getAlldata} >
             <Box border="4px solid gray" backgroundColor="rgb(1, 1, 26)"  marginTop="10px" width="95%" margin="10px">
              <Stack direction="row" gap=".7em">
                <Box border="1px solid gray" height="20vh" backgroundColor="black" width="130px" margin="3px">
                  <img src={item.imageUrl}
                  alt="item.title"
                  width="100%" height="100%"></img>
              
                </Box>

                <Stack gap="1em" margin="3px">
                  <Typography color="white">{item.name}</Typography>
                  <Typography color="white">{item.position}</Typography>
                  <Typography color="white">{item.tel}</Typography>
               
                </Stack>

              </Stack>
             </Box>
             </view>
        ))}

            
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>CABINET MINISTERS</Typography>
        </AccordionSummary>
        <AccordionDetails>
                      {/* CABINET */}
                      {data1.map(item => (
           <view key={item.id}  getAlldata1={getAlldata1} >
             <Box border="4px solid gray" backgroundColor="rgb(1, 1, 26)"  marginTop="10px" width="95%" margin="10px">
              <Stack direction="row" gap=".7em">
                <Box border="1px solid gray" height="20vh" backgroundColor="black" width="130px" margin="3px">
                  <img src={item.imageUrl}
                  alt="item.title"
                  width="100%" height="100%"></img>
              
                </Box>

                <Stack gap="1em" margin="3px">
                  <Typography color="white">{item.name}</Typography>
                  <Typography color="white">{item.position}</Typography>
                  <Typography color="white">{item.tel}</Typography>
               
                </Stack>

              </Stack>
             </Box>
             </view>
        ))}

        </AccordionDetails>
      </Accordion>


      <Accordion backgroundColor="red" color="red">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel3a-header"
        >
          <Typography>STATE MINISTERS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box border="2px solid darkblue" backgroundColor="lightblue" marginTop="10px">
              <Stack direction="row" gap=".7em">
                <Box border="1px solid gray" height="20vh" backgroundColor="black" width="130px" margin="3px">

                </Box>

                <Stack gap="1em" margin="3px">
                  <Typography>HON OKELLO SIMON PETER</Typography>
                  <Typography>MINISTER OF INTERNAL AFFAIRS</Typography>
                  <Typography>CONTACTS: 07989608067</Typography>
                </Stack>

              </Stack>
             </Box>

        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel4a-header"
        >
          <Typography>LEGISLATORS</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Box border="2px solid darkblue" backgroundColor="lightblue" marginTop="10px">
              <Stack direction="row" gap=".7em">
                <Box border="1px solid gray" height="20vh" backgroundColor="black" width="130px" margin="3px">

                </Box>

                <Stack gap="1em" margin="3px">
                  <Typography>HON OKELLO SIMON PETER</Typography>
                  <Typography>MINISTER OF INTERNAL AFFAIRS</Typography>
                  <Typography>CONTACTS: 07989608067</Typography>
                </Stack>

              </Stack>
             </Box>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
