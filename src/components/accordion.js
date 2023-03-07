import React, { useState, useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Box, Stack, CircularProgress} from '@mui/material'
import app from '../firebase-config';

import {  collection,getFirestore,getDocs} from "firebase/firestore";
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



     // State fetch
     const [data2, setData2] = useState([]);
     const getAlldata2=()=> {
       getDocs(collection(db, "State_leaders")).then(docSnap => {
         let users = [];
         docSnap.forEach((doc)=> {
             users.push({ ...doc.data(), id:doc.id })
         });
         setData2(users);
       });
     };
     
     useEffect(()=>{
       getAlldata2()
     }, []);




      // Legislator fetch
    const [data3, setData3] = useState([]);
    const getAlldata3=()=> {
      getDocs(collection(db, "Legislator_leaders")).then(docSnap => {
        let users = [];
        docSnap.forEach((doc)=> {
            users.push({ ...doc.data(), id:doc.id })
        });
        setData3(users);
      });
    };
    
    useEffect(()=>{
      getAlldata3()
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
             {data.length === 0 ?
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <CircularProgress />
            </Box>  

            :data.map(item => (
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
             {data1.length === 0 ?
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <CircularProgress />
            </Box>  

            :data1.map(item => (
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
         {/* STATE MINISTERS */}
         {
         data2.length === 0 ?
         <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
         <CircularProgress />
         </Box>  

         :
         data2.map(item => (
                        <view key={item.id}  getAlldata2={getAlldata2} >
                          <Box border="4px solid gray" backgroundColor="rgb(1, 1, 26)"  marginTop="10px" width="95%" margin="10px">
                            <Stack direction="row" gap=".7em">
                              <Box border="1px solid gray" height="20vh" backgroundColor="black" width="130px" margin="3px">
                                <img src={item.imageUrl}
                                alt="item.title"
                                width="100%" height="100%"></img>
                            
                              </Box>

                              <Stack gap="1em" margin="3px" color="red">
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
          id="panel4a-header"
        >
          <Typography>LEGISLATORS</Typography>
        </AccordionSummary>
        <AccordionDetails>

        {/* LEGISLATORS */}
        {
        data3.length === 0 ?
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <CircularProgress />
        </Box>  

        :
        data3.map(item => (
           <view key={item.id}  getAlldata3={getAlldata3} >
             <Box border="4px solid gray" backgroundColor="rgb(1, 1, 26)"  marginTop="10px" width="95%" margin="10px">
              <Stack direction="row" gap=".7em">
                <Box border="1px solid gray" height="20vh" backgroundColor="black" width="130px" margin="3px">
                  <img src={item.imageUrl}
                  alt="item.title"
                  width="100%" height="100%"></img>
              
                </Box>

                <Stack gap="1em" margin="3px" color="red">
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
     
    </div>
  );
}
