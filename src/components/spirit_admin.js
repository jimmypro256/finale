import React, {useState, useEffect} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField, Divider,CircularProgress,Backdrop,Snackbar, IconButton } from '@mui/material'
import app from '../firebase-config'
import {collection, getDocs,addDoc, getFirestore,deleteDoc,doc} from 'firebase/firestore'
import ButtonAppBar from './appbar1'
import { View } from 'react-native-web'
import { Delete } from "@material-ui/icons";
import { Phone } from '@material-ui/icons'
import CloseIcon from '@material-ui/icons/Close'



function SpiritAdmin(){

  const[open1, setOpen1]=useState(false)
  const[open2, setOpen2]=useState(false)

    const db=getFirestore(app)

    //add hostel with free room

    const [hname, setHname] = useState("")
    const [single, setSingle] = useState("")
    const [contact, setContact] = useState("")

    const SubmitForm= async(e) =>{
        e.preventDefault()
        setOpen1(true)
    
      let data={hname, single,contact}
    
      let store=await addDoc(collection(db, "hostels"), {hname:data.hname, single:data.single,  contact:data.contact})
       
        if(store){
          setOpen1(false)
          setOpen2(true)
          setHname("");
          setSingle("");
        
          setContact("");
        }
    
        else{
          console.log("not sent")
        }
      }
    
   //add hostel 

   const [hname1, setHname1] = useState("")
   const [contact1, setContact1] = useState("")
   const [type, setType] = useState("")
   const [scost, setScost] = useState("")
   const [dcost, setDcost] = useState("")
   const [water, setWater] = useState("")
   const [power, setPower] = useState("")
   const [location, setLocation] = useState("")

   const SubmitForm1= async(e) =>{
       e.preventDefault()
       setOpen1(true)
   
     let data={hname1,location, contact1, type, scost,dcost,water,power}
   
     let store=await addDoc(collection(db, "hostelsAll"), {hname1:data.hname1, location:data.location,contact1:data.contact1,  type:data.type, scost:data.scost,dcost:data.dcost,water:data.water,power:data.power})
      
       if(store){
        setOpen1(false)
        setOpen2(true)
        setHname1("");
        setContact1("");
        setType("");
        setScost("");
        setDcost("");
        setWater("");
        setPower("");
        setLocation("");
       }
   
       else{
         console.log("not sent")
       }
     }
   

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

          // delete hostel free
   const deleteItem1=async(id)=>{
    await deleteDoc(doc(db, "hostels", id));
    
    getAllData();
  }



       // delete hostel
       const deleteItem2=async(id)=>{
        await deleteDoc(doc(db, "hostelsAll", id));
        
        getalldata2();
      }




      //feed back
      const handleClose = ()=>{
        setOpen2(false)
        
  
    }
    
    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
  
   

  return(

    <Box className="main" sx={{width:"100%", marginTop:"15px", paddingBottom:"10px", background:"antiquewhite" , color:"black" }}>
    
    <ButtonAppBar/>
    <Box textAlign="center" marginTop="100px" ></Box>
   
    <Box margin="5px" border="3px solid blue" marginTop="60px" backgroundColor="black" color="white" boxShadow="0 0 12px black">
             <Typography textAlign="center" backgroundColor="rgb(16, 16, 83)" color="white" margin="10px" border=".8px solid blue">QUOTE OF THE DAY</Typography>
             
            <Typography textAlign="center" margin="5px" fontSize=".9em">"Do unto others what you want to be done unto you"</Typography>
            <Typography textAlign="center" margin="5px">acts 12:4🤍</Typography>
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
       
       
        <Box  sx={{backgroundColor:"rgb(16, 16, 83)", padding:"10px",  margin:"5px", paddingTop:"6px", marginTop:"15px"}}>
                          <Stack sx={{ gap:".4em"}}>
                            <Box sx={{backgroundColor:"rgb(16, 16, 83)", color:"wheat",padding:"5px", margin:"2px",alignItems:"center" , border:"3px solid gray"}}>
                            <Typography sx={{margin:"3px", fontSize:"1em" }}>FROM GUCU</Typography>
                            <Typography sx={{ color:"white", fontSize:"1em", margin:"1px"}}>DATE:</Typography>
                            </Box>
                            
                            
                            
                            <Box border="1px solid grey" margin="4px">
                            
                            <Typography sx={{ color:"wheat", margin:"3px"}}>INFO</Typography>
                            </Box>
                          </Stack>
         </Box>

  {/* ASSOCIATIONS */}
      <Box border="2px solid black" margin="4px" sx={{ backgroundColor:"white"}}>
                    <Stack gap="1em" margin="1em">
                      <Box>
                        <Typography textAlign="center" fontweight="bold" backgroundColor="rgb(16, 16, 83)" color="white" padding="3px" border="1px solid black" fontsize="20px">RELIGIOUS CLUBS AND ASSOCIATIONS</Typography>
                      </Box>
                         

                         <Box border=".7px solid black" >
                            <Typography margin="7px" marginBottom="4px">AAAAAAAA CHRISTIAN COMMUNITY</Typography>
                           
                         </Box>

                    </Stack>
                  </Box>
                
   </Box>
   
   
  )
}

export default SpiritAdmin