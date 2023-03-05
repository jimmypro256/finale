import React, {useState, useEffect} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField } from '@mui/material'
import app from '../firebase-config'

import { Link} from 'react-router-dom'
import {collection, getDocs,addDoc, getFirestore,deleteDoc,doc} from 'firebase/firestore'
import ButtonAppBar from './appbar1'
import {  View } from 'react-native-web'
import { Delete } from "@material-ui/icons";





function CommAdmin(){
  

    const db=getFirestore(app)
  // general comm

  const [to, setTo] = useState("")
  const [date, setDate] = useState("")
  const [info, setInfo] = useState("")

  
    
  
    const commForm= async(e) =>{
      e.preventDefault()
   
  
    let data={to, date, info}
  
    let store=await addDoc(collection(db, "general_communications"), {to:data.to, date:data.date, info:data.info})
     
      if(store){
        console.log("sent")
      }
  
      else{
        console.log("not sent")
      }
    }

  // guild comm

  const [to1, setTo1] = useState("")
  const [date1, setDate1] = useState("")
  const [info1, setInfo1] = useState("")

  
    
  
    const guildForm= async(e) =>{
      e.preventDefault()
   
  
    let data1={to1, date1, info1}
  
    let store1=await addDoc(collection(db, "guild_communications"), {to1:data1.to1, date1:data1.date1, info1:data1.info1, isChecked:false})
     
      if(store1){
        console.log("sent")
      }
  
      else{
        console.log("not sent")
      }
    }
  


      // events comm

  const [event, setEvent] = useState("")
  const [date2, setDate2] = useState("")


 
  
    const eventsForm= async(e) =>{
      e.preventDefault()


  
    let data2={event, date2}
  
    let store2=await addDoc(collection(db, "upcoming_events"), {event:data2.event, date2:data2.date2})
     
      if(store2){
        console.log("sent")
      }
  
      else{
        console.log("not sent")
      }
    }

    const [activeTab, setActiveTab]=useState("Home")





    // delete general comm
    const deleteItem=async(id)=>{
        await deleteDoc(doc(db, "general_communications", id));
        
        getAlldata();
      }
  
  
   
  
  
    // view general comm
   
    const [data, setData] = useState([]);
    const getAlldata=()=> {
      getDocs(collection(db, "general_communications")).then(docSnap => {
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







    
      // upcoming events fetch
      const [data3, setData3] = useState([]);
      const getAlldata3=()=> {
        getDocs(collection(db, "upcoming_events")).then(docSnap => {
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


       // delete upcoming event
    const deleteItem3=async(id)=>{
      await deleteDoc(doc(db, "upcoming_events", id));
      
      getAlldata3();
    }


     // guild comm
     const [data2, setData2] = useState([]);
     const getAlldata2=()=> {
       getDocs(collection(db, "guild_communications")).then(docSnap => {
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


      // delete guild comm
   const deleteItem2=async(id)=>{
     await deleteDoc(doc(db, "guild_communications", id));
     
     getAlldata2();
   }

        
    


  return(

   
  
   <Box className="commadminbg" backgoundColor="lavenderblush">
     <ButtonAppBar/>
     <Box textAlign="center" marginTop="100px" >

      <Stack direction="row" gap="10px" width="50%" margin="auto" className='links' >
             
            <Box textAlign="center">
                  <Link to="/admin">
                    
                    <p
                    className={`${activeTab  === "Admin" ? "active" : ""}`}
                    onClick={()=> setActiveTab("Admin")}
                    >
                      <Typography textAlign="center">ADMIN CONSOLE</Typography>
                    </p>
                  </Link>
            </Box>
      </Stack>
   

  
    <Typography textAlign="center" marginTop="60px">POST AND VIEW DATA</Typography>
  

      <Box marginTop="30px">
      <Typography textAlign="center">MAKE A GENERAL COMMUNICATION</Typography>
      <form onSubmit={commForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black"  width="96%" margin="auto" gap="2em">
            <TextField label="to/recipients" value={to} onChange={(e)=>setTo(e.target.value)}></TextField>
            <TextField label="date" value={date} onChange={(e)=>setDate(e.target.value)}></TextField>
            <TextField label="communication" value={info} onChange={(e)=>setInfo(e.target.value)}></TextField>
           

            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>


      <Box marginTop="30px">
      <Typography textAlign="center">MAKE A GUILD COMMUNICATION</Typography>
      <form onSubmit={guildForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black"  width="96%" margin="auto" gap="2em">
            <TextField label="to/recipients" value={to1} onChange={(e)=>setTo1(e.target.value)}></TextField>
            <TextField label="date" value={date1} onChange={(e)=>setDate1(e.target.value)}></TextField>
            <TextField label="communication" value={info1} onChange={(e)=>setInfo1(e.target.value)}></TextField>
           

            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>




      <Box marginTop="30px">
      <Typography textAlign="center">UPCOMING EVENTS/ACTIVITIES</Typography>
      <form onSubmit={eventsForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="Event/Activity" value={event} onChange={(e)=>setEvent(e.target.value)}></TextField>
            <TextField label="date" value={date2} onChange={(e)=>setDate2(e.target.value)}></TextField>
          
           

            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>









  
    </Box>




    <Typography textAlign="center" marginTop="60px">GENERAL COMMUNICATIONS</Typography>
    <View>

    {data.map(item => (
      <View key={item.id}  getAlldata={getAlldata}>
       
       <Box  sx={{backgroundColor:"rgb(16, 16, 83)", padding:"10px",  margin:"5px", paddingTop:"6px", marginTop:"35px"}}>
              <Stack sx={{ gap:".4em"}}>
                <Box sx={{backgroundColor:"rgb(16, 16, 83)", color:"wheat",padding:"5px", margin:"2px",alignItems:"center" , border:"3px solid gray"}}>
                <Typography sx={{margin:"3px", fontSize:"1em" }}>TO: {item.to}</Typography>
                <Typography sx={{ color:"white", fontSize:"1em", margin:"1px"}}>DATE: {item.date}</Typography>
                </Box>
                
                
                
                <Box border="1px solid grey" margin="4px">
                
                <Typography sx={{ color:"wheat", margin:"3px"}}>{item.info}</Typography>
                </Box>
                <Box color="red">
                <Delete onClick={() => deleteItem(item.id)} size="20px"/>
                </Box>
              </Stack>
              </Box>
       
      </View>
    ))}
  </View>




    {/* upcoming events fetched here */}
    <Typography textAlign="center" marginTop="60px">UPCOMING EVENTS</Typography>
    {data3.map(item => (
           <view key={item.id}  getAlldata3={getAlldata3} >
             <Box border="4px solid gray" backgroundColor="rgb(1, 1, 26)"  marginTop="10px" width="95%" margin="10px">
              <Stack direction="row" gap=".7em" color="red">
               

                <Stack direction="row" gap="1em" margin="3px" color="red">
                  <Typography color="white">{item.event}</Typography>
                  <Typography color="white">{item.date2}</Typography>
                 
                  
                </Stack>
                <Delete onClick={() => deleteItem3(item.id)} size="20px"/>
              </Stack>
             </Box>
             </view>
        ))}



         {/* guild comm fetched here */}
         <Typography textAlign="center" marginTop="60px">GUILD COMMUNICATIONS</Typography>
      {data2.map(item => (
           <view key={item.id}  getAlldata2={getAlldata2} >
            <Box  sx={{backgroundColor:"rgb(16, 16, 83)", padding:"10px",  margin:"5px", paddingTop:"6px", marginTop:"35px"}}>
              <Stack sx={{ gap:".4em"}}>
                <Box sx={{backgroundColor:"rgb(16, 16, 83)", color:"wheat",padding:"5px", margin:"2px",alignItems:"center" , border:"3px solid gray"}}>
                <Typography sx={{margin:"3px", fontSize:"1em" }}>TO: {item.to1}</Typography>
                <Typography sx={{ color:"white", fontSize:"1em", margin:"1px"}}>DATE: {item.date1}</Typography>
                </Box>
                
                
                
                <Box border="1px solid grey" margin="4px">
                
                <Typography sx={{ color:"wheat", margin:"3px"}}>{item.info1}</Typography>
                </Box>
                <Box color="red">
                <Delete onClick={() => deleteItem2(item.id)} size="20px"/>
                </Box>
              </Stack>
              </Box>
             </view>
        ))}
 
 
   </Box>
   
  )
}

export default CommAdmin