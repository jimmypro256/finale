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



function HostelAdmin(){

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

   <Box backgroundcolor="white">

    <Backdrop open={open1} sx={{color:"fff"}}>
        <CircularProgress sx={{color:"white"}}/>
    </Backdrop>
    <Snackbar action={action} autoHideDuration={3000} open={open2} message="sent   successfully!!"></Snackbar>

    <ButtonAppBar/>
      <Typography textAlign="center" paddingTop="100px" fontWeight="bold">HOSTEL ADMIN</Typography>
      <Typography textAlign="center">Add, Update, View and Delete hostels</Typography>

      <Typography textAlign="center">ADD HOSTEL WITH FREE ROOMS</Typography>
      <form onSubmit={SubmitForm}>
           
          <Stack backgroundcolor="white" boxShadow="0 0 10 black" width="95%" margin="auto" gap="2em">
            <TextField inputProps={{ required: true }} label="hostel name" autoComplete='off' value={hname} onChange={(e)=>setHname(e.target.value)}></TextField>
            <TextField inputProps={{ required: true }} label="Room/rooms description and prices" autoComplete='off' multiline  value={single} onChange={(e)=>setSingle(e.target.value)}></TextField>

            <TextField label="tel no" inputProps={{ required: true }} autoComplete='off'  value={contact} onChange={(e)=>setContact(e.target.value)}></TextField>
           

            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>


      <Box>
      <Typography textAlign="center">ADD HOSTELS</Typography>
      <form onSubmit={SubmitForm1}>
           
          <Stack backgroundcolor="white" boxShadow="0 0 10 black" width="95%" margin="auto" gap="2em">
            <TextField label="hostel name" inputProps={{ required: true }} autoComplete='off' value={hname1} onChange={(e)=>setHname1(e.target.value)}></TextField>
            <TextField label="location" inputProps={{ required: true }} autoComplete='off'  value={location} onChange={(e)=>setLocation(e.target.value)}></TextField>
            <TextField label="contact" inputProps={{ required: true }} autoComplete='off' value={contact1} onChange={(e)=>setContact1(e.target.value)}></TextField>
            <TextField label="hostel type e.g mixed" inputProps={{ required: true }} autoComplete='off'  value={type} onChange={(e)=>setType(e.target.value)}></TextField>
            <TextField label="Single rooms" inputProps={{ required: true }} autoComplete='off' value={scost} onChange={(e)=>setScost(e.target.value)}></TextField>
            <TextField label="Double rooms" inputProps={{ required: true }} autoComplete='off'  value={dcost} onChange={(e)=>setDcost(e.target.value)}></TextField>
            <TextField label="Power supply" inputProps={{ required: true }} autoComplete='off' value={water} onChange={(e)=>setWater(e.target.value)}></TextField>
            <TextField label="Water supply" inputProps={{ required: true }} autoComplete='off'  value={power} onChange={(e)=>setPower(e.target.value)}></TextField>


            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
    
      </Box>


       {/* free room hostels fetched here */}
       <Typography textAlign="center" marginTop="60px">HOSTELS WITH FREE ROOMS</Typography>
      {data.map(item => (
           <View key={item.id}  getAllData={getAllData} >
           <Box backgroundColor="rgb(11, 11, 42)" margin="4px" padding="8px" marginBottom="26px">
            <Typography backgroundColor="darkblue" border="1px solid white" textAlign="center" color="white" padding="3px" margin="4px" >{item.hname}</Typography>
            <Box border="1px solid white" padding="10px" margin="5px" >
                <Stack color="white" width="97%" margin="auto" gap="1.5em">
                <Typography>{item.single}</Typography>
                
                <Typography ><Phone/>{item.contact}</Typography>
                
                </Stack>


            </Box>
               <Box color="red">
                <Delete onClick={() => deleteItem1(item.id)} size="20px"/>
                </Box>
        
         </Box>
             </View>
        ))}



        
       {/* all hostels fetched here */}
       <Typography textAlign="center" marginTop="60px">HOSTELS WITH FREE ROOMS</Typography>
      {data2.map(item => (
           <View key={item.id}  getalldata2={getalldata2} >
                    <Box sx={{backgroundColor:"rgb(16, 16, 83)", margin:"5px"}}>
                            <Typography textAlign="center" color="white" fontSize=".8em" padding="5px">{item.hname1}</Typography>
                            
                            <Divider color="white" margin="10px"/>
                            <Box>
                                <Typography color="white" fontSize=".8em" padding="5px">LOCATION:  {item.location}</Typography>
                                <Typography color="white" fontSize=".8em" padding="5px">CONTACTS:  {item.contact1} </Typography>
                                <Typography color="white" fontSize=".8em" padding="5px">TYPE: {item.type}</Typography>
                                <Typography color="white" fontSize=".8em" padding="5px">SINGLE ROOMS: {item.scost}</Typography>
                                <Typography color="white" fontSize=".8em" padding="5px">DOUBLE ROOMS: {item.dcost}</Typography>
                                <Typography color="white" fontSize=".8em" padding="5px">WATER: {item.water}</Typography>
                                <Typography color="white" fontSize=".8em" padding="5px">POWER: {item.power}</Typography>

                            </Box>
                            <Box color="red">
                            <Delete onClick={() => deleteItem2(item.id)} size="20px"/>
                            </Box>
                </Box>
             </View>
        ))}
    
   </Box>
   
  )
}

export default HostelAdmin