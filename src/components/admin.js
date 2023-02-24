import React, {useState} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField } from '@mui/material'
import app from '../firebase-config'
import {collection, addDoc,getFirestore} from 'firebase/firestore'
import { Link, useLocation  } from 'react-router-dom'
import { FlatList } from 'react-native-web'
import ButtonAppBar from './appbar1'
import { getStorage, ref, uploadBytes } from 'firebase/storage';


const storage = getStorage();
const storageRef = ref(storage, 'image');



function Admin(){
  const [hname, setHname] = useState("")
const [single, setSingle] = useState("")
const [double, setDouble] = useState("")
const [contact, setContact] = useState("")

const [file, setFile] = useState(null);

  const db=getFirestore(app)

  const SubmitForm= async(e) =>{
    e.preventDefault()
 

  let data={hname, single, double, contact}

  let store=await addDoc(collection(db, "hostels"), {hname:data.hname, single:data.single, double:data.double, contact:data.contact})
   
    if(store){
      console.log("sent")
    }

    else{
      console.log("not sent")
    }
  }


  
  // general comm

  const [to, setTo] = useState("")
  const [date, setDate] = useState("")
  const [info, setInfo] = useState("")

  
    
  
    const commForm= async(e) =>{
      e.preventDefault()
   
  
    let data={to, date, info, contact}
  
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


        // friendly match

  const [match, setMatch] = useState("")
  const [time, setTime] = useState("")


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
    

    const noticeForm= async(e) =>{
      e.preventDefault()




      uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log('Uploaded an image!');
      })
      .catch((error) => {
        console.error(error);
      });
   
  
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




    const [activeTab, setActiveTab]=useState("Home")


  return(

   
  
   <Box>
     <ButtonAppBar/>
     <Box textAlign="center" marginTop="100px" >
      <Stack direction="row" gap="10px" width="90%" margin="auto" className='links' >
              <Box textAlign="center">
                  <Link to="/suggest" >
                    
                    <p
                    className={`${activeTab  === "Suggest" ? "active" : ""}`}
                    onClick={()=> setActiveTab("Suggest")} 
                    >
                      Suggest
                    </p>
                  </Link>
            </Box>


            <Box textAlign="center">
                  <Link to="/login">
                    
                    <p
                    className={`${activeTab  === "Login" ? "active" : ""}`}
                    onClick={()=> setActiveTab("Login")}
                    >
                   LOGIN
                    </p>
                  </Link>
            </Box>



            <Box textAlign="center">
                  <Link to="/signup">
                    
                    <p
                    className={`${activeTab  === "Signup" ? "active" : ""}`}
                    onClick={()=> setActiveTab("Signup")}
                    >
                   Signup
                    </p>
                  </Link>
            </Box>



            <Box textAlign="center">
                  <Link to="/comm_admin">
                    
                    <p
                    className={`${activeTab  === "Comm" ? "active" : ""}`}
                    onClick={()=> setActiveTab("Comm")}
                    >
                      comm
                    </p>
                  </Link>
            </Box>


            <Box textAlign="center">
                  <Link to="/sports_admin">
                    
                    <p
                    className={`${activeTab  === "Sports" ? "active" : ""}`}
                    onClick={()=> setActiveTab("Sports")}
                    >
                      Sports
                    </p>
                  </Link>
            </Box>



            <Box textAlign="center">
                  <Link to="/social">
                    
                    <p
                    className={`${activeTab  === "Social" ? "active" : ""}`}
                    onClick={()=> setActiveTab("Social")}
                    >
                      Social
                    </p>
                  </Link>
            </Box>


            <Box textAlign="center">
                  <Link to="/home">
                    
                    <p
                    className={`${activeTab  === "Home" ? "active" : ""}`}
                    onClick={()=> setActiveTab("Home")}
                    >
                      Home
                    </p>
                  </Link>
            </Box>


      </Stack>
   

    <Typography textAlign="center">ADMIN CONSOLE</Typography>
    <Typography textAlign="center" marginTop="60px">POST AND VIEW DATA</Typography>
    <Typography textAlign="center">ADD HOSTEL WITH FREE ROOMS</Typography>
      <form onSubmit={SubmitForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="270px" margin="auto" gap="2em">
            <TextField label="hostel name" value={hname} onChange={(e)=>setHname(e.target.value)}></TextField>
            <TextField label="Single rooms" value={single} onChange={(e)=>setSingle(e.target.value)}></TextField>
            <TextField label="Double rooms" value={double} onChange={(e)=>setDouble(e.target.value)}></TextField>
            <TextField label="tel no" value={contact} onChange={(e)=>setContact(e.target.value)}></TextField>

            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>



      <Box marginTop="30px">
      <Typography textAlign="center">MAKE A GENERAL COMMUNICATION</Typography>
      <form onSubmit={commForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="270px" margin="auto" gap="2em">
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
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="270px" margin="auto" gap="2em">
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
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="270px" margin="auto" gap="2em">
            <TextField label="Event/Activity" value={event} onChange={(e)=>setEvent(e.target.value)}></TextField>
            <TextField label="date" value={date2} onChange={(e)=>setDate2(e.target.value)}></TextField>
          
           

            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>






      <Typography marginTop="40px" textAlign="center" >SPORTS AT CAMPUS</Typography>
      
      <Box marginTop="30px">
      <Typography textAlign="center">FRIENDLY MATCHES AROUND CAMPUS</Typography>
      <form >
      <input type="file" onChange={handleFileChange} />
      
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="270px" margin="auto" gap="2em">
            <TextField label="match" value={match} onChange={(e)=>setMatch(e.target.value)}></TextField>
            
            <TextField label="date and time" value={time} onChange={(e)=>setTime(e.target.value)}></TextField>
            <Button type="submit" onClick={ noticeForm} variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>



      <Box marginTop="30px">
      <Typography textAlign="center">FOOTBALL FIXTURES</Typography>
      <form onSubmit={  footballForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="270px" margin="auto" gap="2em">
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
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="270px" margin="auto" gap="2em">
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
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="270px" margin="auto" gap="2em">
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
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="270px" margin="auto" gap="2em">
            <TextField label="match" value={match4} onChange={(e)=>setMatch4(e.target.value)}></TextField>
            
           

            <TextField label="date" value={when3} onChange={(e)=>setWhen3(e.target.value)}></TextField>
            
           
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>



  
    </Box>
 
   </Box>
   
  )
}

export default Admin