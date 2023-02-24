import React, {useState, useEffect} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField } from '@mui/material'
import app from '../firebase-config'

import { Link} from 'react-router-dom'
import {collection, getDocs,addDoc, getFirestore,deleteDoc,doc} from 'firebase/firestore'
import ButtonAppBar from './appbar1'
import {  Text, View } from 'react-native-web'






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
        <Stack gap="20px" backgoundColor="darkblue" color="white"  sx={{margin:"20px", backgoundColor:"darkblue"}}>
      
        <Text border="1px solid gray" margin="5px" padding="5px">{item.to}</Text>
        <Text border="1px solid gray" margin="5px" padding="5px">{item.date}</Text>
        <Text border="1px solid gray" margin="5px" padding="5px">{item.info}</Text>
       
        <button title="Delete" onClick={() => deleteItem(item.id)} >DELETE</button>
        </Stack>
       
      </View>
    ))}
  </View>
 
   </Box>
   
  )
}

export default CommAdmin