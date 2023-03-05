import React, { useState, useEffect } from 'react'
import '../App.css'
import { Box } from '@mui/system'
import { Typography,Stack,Modal,TextField,Button, Tooltip,Fab, Backdrop, CircularProgress, Snackbar, IconButton } from '@mui/material'
import CloseIcon from '@material-ui/icons/Close'

import AddIcon from '@material-ui/icons/Add'
import app from '../firebase-config'
import {collection, getDocs,addDoc, getFirestore} from 'firebase/firestore'
import SimpleAccordion from './accordion'

import { doc } from 'firebase/firestore'

import {  Text, View } from 'react-native-web'
import ButtonAppBar from './appbar1'


const Home=() =>{

  const[open, setOpen]=useState(false)
  const [name, setName] = useState("")
    const [faculty, setFaculty] = useState("")
    const [comment, setComment] = useState("")
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [loader, setLoader] = useState(false)
    const db =getFirestore(app)


  const SubmitForm= async(e) =>{
    e.preventDefault()
    setOpen1(true)
    setOpen(false)
    let datas={name, faculty, comment}
   let send= await addDoc(collection(db,"suggestions"), {name:datas.name, faculty:datas.faculty, comment:datas.comment})

   if(send){
     setOpen1(false)
     setOpen2(true)
   }
   else{
   setOpen1(false)
   }
}
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
  

        // guild president
        const [data4, setData4] = useState([]);
        const getAlldata4=()=> {
          getDocs(collection(db, "guild_president")).then(docSnap => {
            let users = [];
            docSnap.forEach((doc)=> {
                users.push({ ...doc.data(), id:doc.id })
            });
            setData4(users);
          });
        };
        
        useEffect(()=>{
          getAlldata4()
        }, []);



 

  let table = collection(db, "guild_communications")
   const [free, setFree]=useState([])
    useEffect(()=>{
 
      ;(async()=>{
       const raw_data=await getDocs(table)
      
       
         const show=raw_data.docs.map((doc)=>doc.data())
         
         console.log(show)
     
         setFree(show)
         
       
  
         
      
 
       
      }
     
      )
      
      ()
    
    },[])



    

    //events
    let table1 = collection(db, "upcoming_events")
   const [free1, setFree1]=useState([])
    useEffect(()=>{
          setLoader(true)
      ;(async()=>{
       const raw_data1=await getDocs(table1)
      
       
       
         const show1=raw_data1.docs.map((doc)=>doc.data())
         
         console.log(show1)
     
         setFree1(show1)
         setLoader(false)
      
      })()
    
    },[])





  return(

   <Box>

      <Backdrop open={loader}>
        <CircularProgress />
      </Backdrop>

   <ButtonAppBar/>
   <Box className="main" sx={{width:"100%", marginTop:"5px", background:"rgb(250, 241, 229)" ,paddingBottom:"30px"}}>
      <Box textAlign="center" marginTop="75px" ></Box>
   
      <Box border="3px solid darkblue" height="60vh" margin="5px" paddingTop="60px">
          <Box height="30vh" sx={{margin:"auto" , width:"94%" }} ><img style={{width:"100%", height:"50vh", boxShadow:"0 0 10px gray", border:"1px solid blue"}} src={require('../images/TTT.PNG')} alt="" /></Box>
          <Box height="30vh" >
            <Typography textAlign="center" fontWeight="bold" fontSize="24px">GULU UNIVERSITY</Typography>
            <Typography textAlign="center">"for community transformation"</Typography>
          </Box>
      </Box>
      
      <div className='cabinet' >
            <Box margin="10px" padding="3px" boxShadow="0 0 10px gray" backgroundColor="rgb(16, 16, 83)" color="white">
            <Typography textAlign="center" fontWeight="bold" fontSize="24px" border="1px solid white" >21<sup>st</sup> GUILD GOVERNMENT</Typography>
            <Typography textAlign="center" margin="10px">"Operation Guild Rescue"</Typography>
            </Box>



            {data4.map(item => (
            <view key={item.id}  getAlldata4={getAlldata4} >
            <Box height="60vh" margin="5px" boxShadow="0 0 10px gray" paddingTop="10px" border="1px solid blue">

            <Stack border="1px solid white" height="55vh" margin="10px" >
              <Stack width="98%" margin="auto" alignItems="center" color="red">
             
             <img style={{width:"78%", height:"39vh", boxShadow:"0 0 20px black",border:"4px solid gray"}} src={item.imageUrl} alt="president" /> 
                <Typography height="10vh" boxShadow="0 0 5px black" backgroundColor="rgb(16, 16, 83)" color="white" sx={{width:"78%", textAlign:"center" ,border:"4px solid black"}}>GUILD PRESIDENT<br></br> H.E {item.name}</Typography>
              
              </Stack>
            </Stack>
            </Box>
            </view>
            ))}


       

     
      </div>
   
     <Box margin="7px" >
      <Typography textAlign="center" backgroundColor=" rgb(16, 16, 83)" color="white" marginTop="10px" marginBottom="10px"  border="2px solid white"  fontWeight="bold" fontSize="21px" padding="4px">GUILD LEADERSHIP</Typography>
      <SimpleAccordion sx={{border:"1px solid rgb(16, 16, 83)"}}/>
     </Box>



      <Tooltip title="suggestion box" sx={{position:"fixed", bottom:"4em", right:"4em"}}>
                    <Fab onClick={()=>setOpen(true)} color="primary"><AddIcon/></Fab>
            </Tooltip>
            <Backdrop open={open1} sx={{color:"fff"}}>
                <CircularProgress sx={{color:"white"}}/>
            </Backdrop>
            <Snackbar action={action} autoHideDuration={3000} open={open2} message="sent   successfully!!"></Snackbar>


            <Modal open={open} onClose={()=>setOpen(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>

            <Box  sx={{width:"85%",backgroundColor:"white", padding:"1em", borderRadius:"1em", border:"none", outline:"none"}}>
                       <Stack sx={{gap:1}}>
                       
                        <form onSubmit={SubmitForm}>
                          <Stack sx={{gap:2}}>
                            <Typography textAlign="center">SUGGESTION BOX</Typography>
                          <Box width="200px" margin="auto">
                          <img style={{width:"200px", height:"16vh"}} src={require('../images/HowTo.png')} alt="" />
                          </Box>
                          <TextField value={name} onChange={(e)=> setName(e.target.value)} label="full name" ></TextField>
                          <TextField value={faculty} onChange={(e)=> setFaculty(e.target.value)}  label="faculty" ></TextField>
                          <TextField value={comment} onChange={(e)=> setComment(e.target.value)} label="comment" multiline></TextField>
                          <Button type="submit" variant='contained'>send</Button>
                          </Stack>
                         
                        </form>
                       
                        </Stack> 
                        
                       
                    </Box>
            </Modal>


            <Box height="50vh" margin="10px" border="2px solid rgb(16, 16, 83)" backgroundColor="">

              

               
                  <img  style={{width:"99.5%", height:"100%", boxShadow:"0 0 10px gray", border:"1px solid blue"}} src={require('../images/guni.jpg')} alt="" />
            
              

               
            </Box>


            <Box paddingBottom="20px" margin="5px" boxShadow="0 0 10px gray" paddingTop="10px">

                <Stack border="2px solid rgb(16, 16, 83)" paddingBottom="20px" margin="10px" >
                <Typography textAlign="center" backgroundColor="rgb(16, 16, 83)" color="white" margin="10px"  border="1px solid white"  fontWeight="bold" fontSize="21px">UPCOMING ACTIVITIES AND EVENTS</Typography>
                      
            
       


                  {
            free1.map(upcoming_events=>{
              
              return(
  

                  <Box display="flex" justifyContent="space-between" alignItems="center" padding="3px" boxShadow="0 0 5px rgb(16, 16, 83)" margin="10px" height="10vh" >
                    <Typography fontSize="19px" margin="3px" fontWeight="bold">{upcoming_events.event}</Typography>
                    <Typography margin="3px">{upcoming_events.date2}</Typography>
                  </Box>


                  )
                  })
                  }
                 
                 

                </Stack>
            </Box>



   <Box  margin="5px" paddingBottom="20px" boxShadow="0 0 10px gray" paddingTop="10px">

      <Stack border="1px solid darkblue"  margin="10px" >
          <Typography textAlign="center" padding="3px" margin="10px"  border="1px solid white" backgroundColor="rgb(16, 16, 83)" fontWeight="bold" color="white" fontSize="21px">RECENT COMMUNICATIONS</Typography>


          {
            free.map(guild_communications=>{
              
              return(
  

<Box  sx={{backgroundColor:"rgb(16, 16, 83)", padding:"10px",  margin:"5px", paddingTop:"6px", marginTop:"35px"}}>
 <Stack sx={{ gap:".4em"}}>
  <Box sx={{backgroundColor:"rgb(16, 16, 83)", color:"wheat",padding:"5px", margin:"2px",alignItems:"center" , border:"3px solid gray"}}>
  <Typography sx={{margin:"3px", fontSize:"1em" }}>TO: {guild_communications.to1}</Typography>
  <Typography sx={{ color:"white", fontSize:"1em", margin:"1px"}}>DATE: {guild_communications.date1}</Typography>
  </Box>
  
   
   
   <Box border="1px solid grey" margin="4px">
   
   <Typography sx={{ color:"wheat", margin:"3px"}}>{guild_communications.info1}</Typography>
   </Box>
 </Stack>
</Box>

   
)
})
}



</Stack>




   

  
  
 
    
   
  
</Box>






   </Box>
   </Box>
   
  )
}

export default Home



