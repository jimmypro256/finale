import React, {useState, useEffect} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField,CircularProgress,Backdrop,Snackbar, IconButton ,TableContainer, Table, TableHead, TableBody, TableRow, TableCell} from '@mui/material'
import app from '../firebase-config'
import { Delete } from "@material-ui/icons";
import CloseIcon from '@material-ui/icons/Close'
import { Link} from 'react-router-dom'
import {collection, getDocs,addDoc, getFirestore,deleteDoc,doc} from 'firebase/firestore'
import ButtonAppBar from './appbar1'
import {  Text, View } from 'react-native-web'






function SportsAdmin(){
  
  const[open1, setOpen1]=useState(false)
  const[open2, setOpen2]=useState(false)
    const db=getFirestore(app)
 // friendly match

 const [match, setMatch] = useState("")
 const [time, setTime] = useState("")



   const noticeForm= async(e) =>{
     e.preventDefault()

 
   let data3={match, time}
 
   let store3=await addDoc(collection(db, "match_day"), {match:data3.match, time:data3.time})
    
     if(store3){
      setOpen1(false)
      setOpen2(true)
       setMatch("");
       setTime("")
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
      setOpen1(false)
      setOpen2(true)
      setMatch1("")
      setTime1("")
      setWhen("")
      setVenue("")
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
      setOpen1(false)
      setOpen2(true)
      setMatch2("")
      setTime2("")
      setWhen1("")
      setVenue1("")
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
      setOpen1(false)
      setOpen2(true)
      setMatch3("")
      setTime3("")
      setWhen2("")
      setVenue2("")
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
      setOpen1(false)
      setOpen2(true)
      setMatch4("")
      setWhen3("")
   
     }
 
     else{
       console.log("not sent")
     }
   }




   //table standings
       // group A

 const [position, setPosition] = useState("")
 const [team, setTeam] = useState("")
 const [goals, setGoals] = useState("")
 const [points, setPoints] = useState("")

   const groupA= async(e) =>{
     e.preventDefault()
  
 
   let data4={position, points, goals, team}
 
   let store4=await addDoc(collection(db, "tableA"), {position:data4.position,points:data4.points,goals:data4.goals, team:data4.team})
    
     if(store4){
      setOpen1(false)
      setOpen2(true)
      setPosition("")
      setTeam("")
      setGoals("")
      setPoints("")
     }
 
     else{
       console.log("not sent")
     }
   }


      // group B

 const [position1, setPosition1] = useState("")
 const [team1, setTeam1] = useState("")
 const [goals1, setGoals1] = useState("")
 const [points1, setPoints1] = useState("")

   const groupB= async(e) =>{
     e.preventDefault()
  
 
   let data4={position1, points1, goals1, team1}
 
   let store4=await addDoc(collection(db, "tableB"), {position1:data4.position1,points1:data4.points1,goals1:data4.goals1, team1:data4.team1})
    
     if(store4){
      setOpen1(false)
      setOpen2(true)
      setPosition("")
      setTeam("")
      setGoals("")
      setPoints("")
     }
 
     else{
       console.log("not sent")
     }
   }



    // delete match day
    const deleteItem=async(id)=>{
        await deleteDoc(doc(db, "match_day", id));
        
        getAlldata();
      }
  
   // delete football fixtures
    const deleteItem1=async(id)=>{
        await deleteDoc(doc(db, "football_fixtures", id));
        
        getAlldata1();
      }
        // delete netball
    const deleteItem2=async(id)=>{
      await deleteDoc(doc(db, "netball_fixtures", id));
      
      getAlldata2();
    }

 // delete volleyball
  const deleteItem3=async(id)=>{
      await deleteDoc(doc(db, "volleyball_fixtures", id));
      
      getAlldata3();
    }
    // delete match results
  const deleteItem4=async(id)=>{
    await deleteDoc(doc(db, "match_results", id));
    
    getAlldata4();
  }
    // delete table A
    const deleteItem5=async(id)=>{
      await deleteDoc(doc(db, "tableA", id));
      
      getAlldata5();
    }
  
   // delete table B
   const deleteItem6=async(id)=>{
    await deleteDoc(doc(db, "tableB", id));
    
    getAlldata6();
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
         // view netball
   
    const [data2, setData2] = useState([]);
    const getAlldata2=()=> {
      getDocs(collection(db, "netball_fixtures")).then(docSnap => {
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


      // view volleyball
   
      const [data3, setData3] = useState([]);
      const getAlldata3=()=> {
        getDocs(collection(db, "volleyball_fixtures")).then(docSnap => {
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

      // view match results
   
      const [data4, setData4] = useState([]);
      const getAlldata4=()=> {
        getDocs(collection(db, "match_results")).then(docSnap => {
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


      // table standing
      // groupA
   
      const [data5, setData5] = useState([]);
      const getAlldata5=()=> {
        getDocs(collection(db, "tableA")).then(docSnap => {
          let users = [];
          docSnap.forEach((doc)=> {
              users.push({ ...doc.data(), id:doc.id })
          });
          setData5(users);
        });
      };
      
      useEffect(()=>{
        getAlldata5()
      }, []);

      // view groupB
   
      const [data6, setData6] = useState([]);
      const getAlldata6=()=> {
        getDocs(collection(db, "tableB")).then(docSnap => {
          let users = [];
          docSnap.forEach((doc)=> {
              users.push({ ...doc.data(), id:doc.id })
          });
          setData6(users);
        });
      };
      
      useEffect(()=>{
        getAlldata6()
      }, []);

    
   //feed back
   const handleClose = ()=>{
    setOpen2(false)
    getAlldata();
    getAlldata1();
    getAlldata2();
    getAlldata3();
    getAlldata4();
    getAlldata5();
    getAlldata6();
    

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

   
  
   <Box className="commadminbg" backgoundColor="lavenderblush">
     <Backdrop open={open1} sx={{color:"fff"}}>
        <CircularProgress sx={{color:"white"}}/>
    </Backdrop>
    <Snackbar action={action} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}  open={open2} message="sent   successfully!!"></Snackbar>

     <ButtonAppBar/>
     <Box textAlign="center" marginTop="100px" >

     
  

    <Typography marginTop="40px" textAlign="center" >SPORTS AT CAMPUS</Typography>
      
      <Box marginTop="30px">
      <Typography textAlign="center">FRIENDLY MATCHES AROUND CAMPUS</Typography>
      <form >
    
      
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="match" inputProps={{ required: true }} autoComplete='off' value={match} onChange={(e)=>setMatch(e.target.value)}></TextField>
            
            <TextField label="date and time" inputProps={{ required: true }} autoComplete='off' value={time} onChange={(e)=>setTime(e.target.value)}></TextField>
            <Button type="submit" onClick={ noticeForm} variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>



      <Box marginTop="30px">
      <Typography textAlign="center">FOOTBALL FIXTURES</Typography>
      <form onSubmit={  footballForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="match" inputProps={{ required: true }} autoComplete='off' value={match1} onChange={(e)=>setMatch1(e.target.value)}></TextField>
            
            <TextField label="venue" inputProps={{ required: true }} autoComplete='off' value={venue} onChange={(e)=>setVenue(e.target.value)}></TextField>

            <TextField label="date" inputProps={{ required: true }} autoComplete='off' value={when} onChange={(e)=>setWhen(e.target.value)}></TextField>
            
            <TextField label="time" inputProps={{ required: true }} autoComplete='off' value={time1} onChange={(e)=>setTime1(e.target.value)}></TextField>
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>




      <Box marginTop="30px">
      <Typography textAlign="center">NETBALL FIXTURES</Typography>
      <form onSubmit={  netballForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="match" inputProps={{ required: true }} autoComplete='off' value={match2} onChange={(e)=>setMatch2(e.target.value)}></TextField>
            
            <TextField label="venue" inputProps={{ required: true }} autoComplete='off' value={venue1} onChange={(e)=>setVenue1(e.target.value)}></TextField>

            <TextField label="date" inputProps={{ required: true }} autoComplete='off' value={when1} onChange={(e)=>setWhen1(e.target.value)}></TextField>
            
            <TextField label="time" inputProps={{ required: true }} autoComplete='off' value={time2} onChange={(e)=>setTime2(e.target.value)}></TextField>
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>

      <Box marginTop="30px">
      <Typography textAlign="center">VOLLEYBALL FIXTURES</Typography>
      <form onSubmit={  volleyballForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="match" inputProps={{ required: true }} autoComplete='off' value={match3} onChange={(e)=>setMatch3(e.target.value)}></TextField>
            
            <TextField label="venue" inputProps={{ required: true }} autoComplete='off' value={venue2} onChange={(e)=>setVenue2(e.target.value)}></TextField>

            <TextField label="date" inputProps={{ required: true }} autoComplete='off' value={when2} onChange={(e)=>setWhen2(e.target.value)}></TextField>
            
            <TextField label="time" inputProps={{ required: true }} autoComplete='off' value={time3} onChange={(e)=>setTime3(e.target.value)}></TextField>
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>




      <Box marginTop="30px">
      <Typography textAlign="center">MATCH RESULTS</Typography>
      <form onSubmit={  resultsForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="match" inputProps={{ required: true }} autoComplete='off' value={match4} onChange={(e)=>setMatch4(e.target.value)}></TextField>
            
           

            <TextField label="date" inputProps={{ required: true }} autoComplete='off' value={when3} onChange={(e)=>setWhen3(e.target.value)}></TextField>
            
           
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>


      {/* table A */}
      
      <Box marginTop="30px">
      <Typography textAlign="center">GROUP A TABLE STANDING</Typography>
      <form onSubmit={groupA}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="position" inputProps={{ required: true }} autoComplete='off' value={position} onChange={(e)=>setPosition(e.target.value)}></TextField>
            
            <TextField label="team" inputProps={{ required: true }} autoComplete='off' value={team} onChange={(e)=>setTeam(e.target.value)}></TextField>

            <TextField label="goals" inputProps={{ required: true }} autoComplete='off' value={goals} onChange={(e)=>setGoals(e.target.value)}></TextField>
            
            <TextField label="points" inputProps={{ required: true }} autoComplete='off' value={points} onChange={(e)=>setPoints(e.target.value)}></TextField>
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>

          {/* table B */}
      
          <Box marginTop="30px">
      <Typography textAlign="center">GROUP B TABLE STANDING</Typography>
      <form onSubmit={groupB}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
            <TextField label="position" inputProps={{ required: true }} autoComplete='off' value={position1} onChange={(e)=>setPosition1(e.target.value)}></TextField>
            
            <TextField label="team" inputProps={{ required: true }} autoComplete='off' value={team1} onChange={(e)=>setTeam1(e.target.value)}></TextField>

            <TextField label="goals" inputProps={{ required: true }} autoComplete='off' value={goals1} onChange={(e)=>setGoals1(e.target.value)}></TextField>
            
            <TextField label="points" inputProps={{ required: true }} autoComplete='off' value={points1} onChange={(e)=>setPoints1(e.target.value)}></TextField>
            <Button type="submit" variant='contained'>POST</Button>

          </Stack>

        
      </form>
      </Box>



    <Typography textAlign="center" marginTop="60px">MATCH DAY</Typography>
   
      {data.length === 0 ?
  <Typography textAlign="center" color="red" >no game currently</Typography>

  :
     data.map(item => (
           <View key={item.id}  getAlldata={getAlldata} >
              <Box
      sx={{
        backgroundColor: "rgb(16, 16, 83)",
        padding:"10px",
        margin: "5px",
        paddingTop: "5px",
        marginTop: "20px",
      }}
    >
      <Stack sx={{ margin: "15px", gap: "1em" }}>
        <Typography
          sx={{
            backgroundColor: "darkblue",
            color: "wheat",
            border: "1px solid white",
            height: "5vh",
            padding: "4px",
            margin: "3px",
            textAlign: "center",
            fontSize: "22px",
          }}
        >
          NOTICE
        </Typography>
        <Box sx={{ border: "4px solid grey", padding:"12px" }}>
          <Typography
            sx={{
              margin: "2px",
              fontSize: "1.4em",
              textAlign: "center",
              fontWeight: "bold",
              color: "lawngreen",
            }}
          >
            {item.match}
          </Typography>
          <Box width="95%" margin="auto" marginTop="15px">
            <Typography
              sx={{ color: "wheat", margin: "7px", fontSize: "1.1em" ,  textAlign: "center"}}
            >
              {item.time}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
         </View>
        ))
     }
 
   </Box>


   {/* TOURNAMENTS */}

   
<Typography textAlign="center" fontSize="20px" fontWeight="bold" marginTop="20px">TOURNAMENTS AND FIXTURES</Typography>
<Box color="white" sx={{backgroundColor:"rgb(16, 16, 83)", paddingBottom:"20px", margin:"7px"}}>
  <Stack>
    <Stack justifyContent="space-between" alignItems="center" gap="1em" padding="10px" sx={{margin:"7px", border:"1px solid grey"}} >
      <Typography textAlign="center" fontSize="22px" fontWeight="bold">INTERFACULTY GAMES</Typography>
      
    </Stack>

{/* football_fixtures */}
<Typography textAlign="center" margin="4px" marginTop="20px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">FOOTBALL FIXTURES</Typography>
    
<Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" >



            {data1.length === 0 ?
              <Typography textAlign="center" color="red" >no game currently</Typography>

              :
                data1.map(item => (
                      <View key={item.id}  getAlldata1={getAlldata1} >
                          <Box backgroundColor="lavenderblush" margin="4px" border="1px solid black">

            <Stack direction="row" justifyContent="space-between" margin="5px">
              <Box>
              <Typography>{item.match1}</Typography>
              <Typography>{item.venue}</Typography>
              </Box>

              <Box>
              <Typography>{item.when}</Typography>
              <Typography>{item.time1}</Typography>
              </Box>

            </Stack>
                           <Box color="red" textAlign="center">
                              <Delete onClick={() => deleteItem1(item.id)} size="20px"/>
                            </Box>
            </Box>
                    </View>
                    ))
                }

    </Box>            

     {/* netball_fixtures */}

<Typography textAlign="center" margin="4px" marginTop="20px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">NETBALL FIXTURES</Typography>
    
<Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" >



            {data2.length === 0 ?
              <Typography textAlign="center" color="red" >no game currently</Typography>

              :
                data2.map(item => (
                      <View key={item.id}  getAlldata2={getAlldata2} >
                          <Box backgroundColor="lavenderblush" margin="4px" border="1px solid black">

            <Stack direction="row" justifyContent="space-between" margin="5px">
              <Box>
              <Typography>{item.match2}</Typography>
              <Typography>{item.venue1}</Typography>
              </Box>

              <Box>
              <Typography>{item.when1}</Typography>
              <Typography>{item.time2}</Typography>
              </Box>

            </Stack>
                           <Box color="red" textAlign="center">
                              <Delete onClick={() => deleteItem2(item.id)} size="20px"/>
                            </Box>
            </Box>
                    </View>
                    ))
                }

    </Box>      
     
          {/*volley*/}
<Typography textAlign="center" margin="4px" marginTop="20px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">VOLLEYBALL FIXTURES</Typography>
    
<Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" >



            {data3.length === 0 ?
              <Typography textAlign="center" color="red" >no game currently</Typography>

              :
                data3.map(item => (
                      <View key={item.id}  getAlldata3={getAlldata3} >
                          <Box backgroundColor="lavenderblush" margin="4px" border="1px solid black">

            <Stack direction="row" justifyContent="space-between" margin="5px">
              <Box>
              <Typography>{item.match3}</Typography>
              <Typography>{item.venue2}</Typography>
              </Box>

              <Box>
              <Typography>{item.when2}</Typography>
              <Typography>{item.time3}</Typography>
              </Box>

            </Stack>
                           <Box color="red" textAlign="center">
                              <Delete onClick={() => deleteItem3(item.id)} size="20px"/>
                            </Box>
            </Box>
                    </View>
                    ))
                }

    </Box>      
    



          {/* data results*/}
          <Typography textAlign="center" margin="4px" marginTop="20px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">MATCH RESULTS</Typography>
    
<Box backgroundColor="lightgray" border="2px solid darkblue" color="black" margin="5px" >



            {data4.length === 0 ?
              <Typography textAlign="center" color="red" >no game currently</Typography>

              :
                data4.map(item => (
                      <View key={item.id}  getAlldata4={getAlldata4} >
                          <Box backgroundColor="lavenderblush" margin="4px" border="1px solid black">

                          <Stack direction="row" justifyContent="space-between" margin="5px">
                            <Box>
                            <Typography>{item.match4}</Typography>

                            </Box>

                            <Box>
                            <Typography>{item.when3}</Typography>

                            </Box>

                          </Stack>

                          <Box color="red" textAlign="center">
                              <Delete onClick={() => deleteItem4(item.id)} size="20px"/>
                            </Box>
                          </Box>
                    </View>
                    ))
                }

    </Box>      
    



{/* data card end*/}


     <Typography textAlign="center" margin="4px" marginTop="30px" padding="4px" backgroundColor="darkblue" color="white" border="1px solid gray">TABLE STANDING</Typography>
     <Box backgroundColor="lavenderblush" border="2px solid darkblue" color="black" margin="5px" >

       {/* table */}
       <Typography marginTop="19px"   textAlign="center">GROUP A</Typography>

         <Box backgroundColor="lightblue" margin="5px">
         <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell sx={{textAlign:"center" }}>S/N</TableCell>
        <TableCell sx={{textAlign:"justify"}}>TEAM</TableCell>
        <TableCell sx={{textAlign:"center"}}>GOALS</TableCell>
        <TableCell sx={{textAlign:"center"}}>PTS</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data5.length === 0 ? (
        <Typography textAlign="center" color="red">no matches currently</Typography>
      ) : (
        data5.map((item) => (
          <TableRow key={item.id} getAlldata5={getAlldata5}>
            <TableCell sx={{textAlign:"center" }}>{item.position}</TableCell>
            <TableCell sx={{textAlign:"justify"}}>{item.team}</TableCell>
            <TableCell sx={{textAlign:"center"}}>{item.goals}</TableCell>
            <TableCell sx={{textAlign:"center"}}>{item.points}</TableCell>
            <Box color="red" textAlign="center" marginTop="16px">
            <Delete onClick={() => deleteItem5(item.id)} size="20px"/>
          </Box>
          </TableRow>
         
        ))
      )}
    </TableBody>
  </Table>
</TableContainer>

       </Box>



           {/* table */}
           <Typography margin="7"   textAlign="center">GROUP B</Typography>

<Box backgroundColor="lightblue" margin="5px">
  <TableContainer >
     <Table>
        <TableHead>
           <TableRow >
               <TableCell sx={{textAlign:"center" }}>S/N</TableCell>
 
               <TableCell sx={{textAlign:"justify"}}>TEAM</TableCell>
               <TableCell sx={{textAlign:"center"}}>GOALS</TableCell>
               <TableCell sx={{textAlign:"center"}}>PTS</TableCell>
             </TableRow>

         </TableHead>

            <TableBody>

            {data6.length === 0 ?
            <Box>
                <Typography sx={{textAlign:"center" }} color="red" >no matches currently</Typography>
            </Box>

              :
                data6.map(item => (
                    
                       <TableRow key={item.id}  getAlldata6={getAlldata6} >
                          <TableCell sx={{textAlign:"center" }}>{item.position1}</TableCell>
                          <TableCell sx={{textAlign:"justify"}}>{item.team1}</TableCell>
                          <TableCell sx={{textAlign:"center"}}>{item.goals1}</TableCell>
                          <TableCell sx={{textAlign:"center"}}>{item.points1}</TableCell>
                          <Box color="red" textAlign="center" marginTop="16px">
                          <Delete onClick={() => deleteItem6(item.id)} size="20px"/>
                        </Box>
                        </TableRow>
                  
                    ))
                }

            </TableBody>

       </Table>
  </TableContainer >
</Box>

     </Box>
    
  </Stack>
</Box>

</Box>

   
  )
}

export default SportsAdmin