import React, {useState, useEffect} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField } from '@mui/material'
import app from '../firebase-config'

import { Link} from 'react-router-dom'
import {collection, getDocs,addDoc, getFirestore,deleteDoc,doc} from 'firebase/firestore'
import ButtonAppBar from './appbar1'
import {  Text, View } from 'react-native-web'






function SportsAdmin(){
  

    const db=getFirestore(app)
 // friendly match

 const [match, setMatch] = useState("")
 const [time, setTime] = useState("")



   const noticeForm= async(e) =>{
     e.preventDefault()

 
   let data3={match, time}
 
   let store3=await addDoc(collection(db, "match_day"), {match:data3.match, time:data3.time})
    
     if(store3){
       console.log("sent")
     }
 
     else{
       console.log("not sent")
     }
   }


    // football fixtures match

 const [match1, setMatch1] = useState("")
 const [time1, setTime1] = useState("")
 const [when, setWhen] = useState("")
 const [venue, setVenue] = useState("")

   const footballForm= async(e) =>{
     e.preventDefault()
  
 
   let data4={match1, venue, when, time1}
 
   let store4=await addDoc(collection(db, "football_fixtures"), {match1:data4.match1,venue:data4.venue,when:data4.when, time1:data4.time1})
    
     if(store4){
       console.log("sent")
     }
 
     else{
       console.log("not sent")
     }
   }


       // netballball fixtures match

 const [match2, setMatch2] = useState("")
 const [time2, setTime2] = useState("")
 const [when1, setWhen1] = useState("")
 const [venue1, setVenue1] = useState("")

   const netballForm= async(e) =>{
     e.preventDefault()
  
 
   let data4={match2, venue1, when1, time2}
 
   let store4=await addDoc(collection(db, "netball_fixtures"), {match2:data4.match2,venue1:data4.venue1,when1:data4.when1, time2:data4.time2})
    
     if(store4){
       console.log("sent")
     }
 
     else{
       console.log("not sent")
     }
   }


       // volleyball fixtures match

 const [match3, setMatch3] = useState("")
 const [time3, setTime3] = useState("")
 const [when2, setWhen2] = useState("")
 const [venue2, setVenue2] = useState("")

   const volleyballForm= async(e) =>{
     e.preventDefault()
  
 
   let data4={match3, venue2, when2, time3}
 
   let store4=await addDoc(collection(db, "volleyball_fixtures"), {match3:data4.match3,venue2:data4.venue2,when2:data4.when2, time3:data4.time3})
    
     if(store4){
       console.log("sent")
     }
 
     else{
       console.log("not sent")
     }
   }

       // match results

 const [match4, setMatch4] = useState("")
 
 const [when3, setWhen3] = useState("")


   const resultsForm= async(e) =>{
     e.preventDefault()
  
 
   let data4={match4, when3}
 
   let store4=await addDoc(collection(db, "match_results"), {match4:data4.match4,when3:data4.when3})
    
     if(store4){
       console.log("sent")
     }
 
     else{
       console.log("not sent")
     }
   }





    // delete matvh day
    const deleteItem=async(id)=>{
        await deleteDoc(doc(db, "match_day", id));
        
        getAlldata();
      }
  
   // delete football fixtures
    const deleteItem2=async(id)=>{
        await deleteDoc(doc(db, "football_fixtures", id));
        
        getAlldata1();
      }
   
  
  
    // view match day 
   
    const [data, setData] = useState([]);
    const getAlldata=()=> {
      getDocs(collection(db, "match_day")).then(docSnap => {
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


      // view football fixtures
   
      const [data1, setData1] = useState([]);
      const getAlldata1=()=> {
        getDocs(collection(db, "football_fixtures")).then(docSnap => {
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
    


  return(

   
  
   <Box className="commadminbg" backgoundColor="lavenderblush">
     <ButtonAppBar/>
     <Box textAlign="center" marginTop="100px" >

      <Stack direction="row" gap="10px" width="50%" margin="auto" className='links' >
             
            <Box textAlign="center">
                  <Link to="/admin">
                    
                    <p
                   
                    >
                      <Typography textAlign="center">ADMIN CONSOLE</Typography>
                    </p>
                  </Link>
            </Box>
      </Stack>
   

  
    <Typography textAlign="center" marginTop="60px">POST AND VIEW DATA</Typography>
  

    <Typography marginTop="40px" textAlign="center" >SPORTS AT CAMPUS</Typography>
      
      <Box marginTop="30px">
      <Typography textAlign="center">FRIENDLY MATCHES AROUND CAMPUS</Typography>
      <form >
    
      
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="match" value={match} onChange={(e)=>setMatch(e.target.value)}></TextField>
            
            <TextField label="date and time" value={time} onChange={(e)=>setTime(e.target.value)}></TextField>
            <Button type="submit" onClick={ noticeForm} variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>



      <Box marginTop="30px">
      <Typography textAlign="center">FOOTBALL FIXTURES</Typography>
      <form onSubmit={  footballForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="match" value={match1} onChange={(e)=>setMatch1(e.target.value)}></TextField>
            
            <TextField label="venue" value={venue} onChange={(e)=>setVenue(e.target.value)}></TextField>

            <TextField label="date" value={when} onChange={(e)=>setWhen(e.target.value)}></TextField>
            
            <TextField label="time" value={time1} onChange={(e)=>setTime1(e.target.value)}></TextField>
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>




      <Box marginTop="30px">
      <Typography textAlign="center">NETBALL FIXTURES</Typography>
      <form onSubmit={  netballForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="match" value={match2} onChange={(e)=>setMatch2(e.target.value)}></TextField>
            
            <TextField label="venue" value={venue1} onChange={(e)=>setVenue1(e.target.value)}></TextField>

            <TextField label="date" value={when1} onChange={(e)=>setWhen1(e.target.value)}></TextField>
            
            <TextField label="time" value={time2} onChange={(e)=>setTime2(e.target.value)}></TextField>
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>

      <Box marginTop="30px">
      <Typography textAlign="center">VOLLEYBALL FIXTURES</Typography>
      <form onSubmit={  volleyballForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="match" value={match3} onChange={(e)=>setMatch3(e.target.value)}></TextField>
            
            <TextField label="venue" value={venue2} onChange={(e)=>setVenue2(e.target.value)}></TextField>

            <TextField label="date" value={when2} onChange={(e)=>setWhen2(e.target.value)}></TextField>
            
            <TextField label="time" value={time3} onChange={(e)=>setTime3(e.target.value)}></TextField>
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>




      <Box marginTop="30px">
      <Typography textAlign="center">MATCH RESULTS</Typography>
      <form onSubmit={  resultsForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="match" value={match4} onChange={(e)=>setMatch4(e.target.value)}></TextField>
            
           

            <TextField label="date" value={when3} onChange={(e)=>setWhen3(e.target.value)}></TextField>
            
           
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>




      



    <Typography textAlign="center" marginTop="60px">MATCH DAY</Typography>
    <View>

    {data.map(item => (
      <View key={item.id}  getAlldata={getAlldata}>
        <Stack gap="20px" backgoundColor="darkblue" color="white"  sx={{margin:"20px", backgoundColor:"darkblue"}}>
      
        <Text border="1px solid gray" margin="5px" padding="5px">{item.match}</Text>
        <Text border="1px solid gray" margin="5px" padding="5px">{item.time}</Text>
     
       
        <button title="Delete" onClick={() => deleteItem(item.id)} >DELETE</button>
        </Stack>
       
      </View>
    ))}
  </View>








  <Typography textAlign="center" marginTop="60px">FOOTBALL INTERFACULTY GAMES</Typography>
    <View>

    {data1.map(item => (
      <View key={item.id}  getAlldata1={getAlldata1}>
        <Stack gap="20px" backgoundColor="darkblue" color="white"  sx={{margin:"20px", backgoundColor:"darkblue"}}>
      
        <Text border="1px solid gray" margin="5px" padding="5px">{item.match1}</Text>
        <Text border="1px solid gray" margin="5px" padding="5px">{item.venue}</Text>
        <Text border="1px solid gray" margin="5px" padding="5px">{item.when}</Text>
        <Text border="1px solid gray" margin="5px" padding="5px">{item.time1}</Text>
       
        <button title="Delete" onClick={() => deleteItem2(item.id)} >DELETE</button>
        </Stack>
       
      </View>
    ))}
  </View>
 
   </Box>
   </Box>
   
  )
}

export default SportsAdmin