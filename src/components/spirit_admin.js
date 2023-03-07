import React, {useState, useEffect} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField,CircularProgress,Backdrop,Snackbar, IconButton } from '@mui/material'
import app from '../firebase-config'
import {collection, getDocs,addDoc, getFirestore,deleteDoc,doc} from 'firebase/firestore'
import ButtonAppBar from './appbar1'
import { View } from 'react-native-web'
import { Delete } from "@material-ui/icons";
import CloseIcon from '@material-ui/icons/Close'
import { Timestamp } from 'firebase/firestore'

function SpiritAdmin(){

  const[open1, setOpen1]=useState(false)
  const[open2, setOpen2]=useState(false)

    const db=getFirestore(app)

    //add program

    const [from, setFrom] = useState("")
  
    const [info, setInfo] = useState("")

    const SubmitForm= async(e) =>{
        e.preventDefault()
        setOpen1(true)
    
      let data={from,info}
    
      let store=await addDoc(collection(db, "church_comm"), {from:data.from, date:Timestamp.now().toDate(),  info:data.info})
       
        if(store){
          setOpen1(false)
          setOpen2(true)
          setInfo("");
          setFrom("");
        
          
        }
    
        else{
          console.log("not sent")
        }
      }
    
   //add quote

   const [quote, setQuote] = useState("")
   

   const SubmitForm1= async(e) =>{
       e.preventDefault()
       setOpen1(true)
   
     let data={quote}
   
     let store=await addDoc(collection(db, "day_qoute"), {quote:data.quote})
      
       if(store){
        setQuote("")
        setOpen1(false)
        setOpen2(true)
       
      
       }
   
       else{
         console.log("not sent")
       }
     }
   
      //add religious club

   const [club, setClub] = useState("")
   

   const SubmitForm2= async(e) =>{
       e.preventDefault()
       setOpen1(true)
   
     let data={club}
   
     let store=await addDoc(collection(db, "religious_clubs"), {club:data.club})
      
       if(store){
        setOpen1(false)
        setOpen2(true)
        setClub("");
      
       }
   
       else{
         console.log("not sent")
       }
     }
   


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


          // delete quote
   const deleteItem1=async(id)=>{
    await deleteDoc(doc(db, "day_qoute", id));
    getalldata2();
    
  }



       // deletechurch comm
       const deleteItem2=async(id)=>{
        await deleteDoc(doc(db, "church_comm", id));
        
        getAllData();
      }


       // delete club
       const deleteItem3=async(id)=>{
        await deleteDoc(doc(db, "religious_clubs", id));
        
        getalldata3()
      }


      //feed back
      const handleClose = ()=>{
        setOpen2(false)
        
  
    }
    
    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
           CLOSE
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
    
    <Backdrop open={open1} sx={{color:"fff"}}>
        <CircularProgress sx={{color:"white"}}/>
    </Backdrop>
    <Snackbar action={action} autoHideDuration={3000} open={open2} message="sent   successfully!!"></Snackbar>

    <ButtonAppBar/>
    <Box textAlign="center" marginTop="100px" ></Box>

    {/* add info or program */}
    <Typography textAlign="center">ADD PROGRAM OR COMMUNICATION</Typography>
      <form onSubmit={SubmitForm}>
           
          <Stack backgroundcolor="white" boxShadow="0 0 10 black" width="95%" margin="auto" gap="2em">
            <TextField label="from e.g GUCU"  inputProps={{ required: true }} autoComplete='off' value={from} onChange={(e)=>setFrom(e.target.value)}></TextField>
            <TextField label="information"  inputProps={{ required: true }} autoComplete='off' multiline  value={info} onChange={(e)=>setInfo(e.target.value)}></TextField>

            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>



      {/* add quote of the day*/}
  <Box marginTop="40px">
  <Typography textAlign="center">ADD QUOTE OF THE DAY</Typography>
  <Typography textAlign="center">It can be from bible or quoran or anyother inspirational message</Typography>

      <form onSubmit={SubmitForm1}>
           
          <Stack backgroundcolor="white" boxShadow="0 0 10 black" width="95%" margin="auto" gap="2em">
            <TextField label="quote" multiline  inputProps={{ required: true }} autoComplete='off' value={quote} onChange={(e)=>setQuote(e.target.value)}></TextField>
            
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>

  </Box>


      {/* add religious clubs and association*/}
      <Box marginTop="40px">
  <Typography textAlign="center">ADD RELIGIOUS CLUBS AND ASSOCIATIONS</Typography>
      <form onSubmit={SubmitForm2}>
           
          <Stack backgroundcolor="white" boxShadow="0 0 10 black" width="95%" margin="auto" gap="2em">
            <TextField label="club name" multiline inputProps={{ required: true }} autoComplete='off' value={club} onChange={(e)=>setClub(e.target.value)}></TextField>
           

            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>

  </Box>
{/* qoute */}
<Box margin="5px" border="3px solid blue" marginTop="60px" backgroundColor="black" color="white" boxShadow="0 0 12px black">
 <Typography textAlign="center" backgroundColor="rgb(16, 16, 83)" color="white" margin="10px" border=".8px solid blue">QUOTE OF THE DAY</Typography>
{data2.length === 0 ?
  <Typography textAlign="center" color="red" >not available currently</Typography>

  :
     data2.map(item => (
           <View key={item.id}  getalldata2={getalldata2} >
     
             
            <Typography textAlign="center" margin="5px" fontSize=".9em">{item.quote}</Typography>
          
          
            <Box color="red" textAlign="center">
              <Delete onClick={() => deleteItem1(item.id)} size="20px"/>
            </Box>

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
                          
                          <Box color="red" textAlign="center">
                              <Delete onClick={() => deleteItem2(item.id)} size="20px"/>
                            </Box>
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
                                <Typography margin="3px" fontSize="1em"  marginBottom="4px">{item.club}</Typography>
                              
                            </Box>

                            <Box color="red" textAlign="center">
                              <Delete onClick={() => deleteItem3(item.id)} size="20px"/>
                            </Box>


         </View>
        ))
     }
             </Stack>
                </Box>
                
   </Box>
   
   
  )
}

export default SpiritAdmin