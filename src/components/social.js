import React,{useState, useEffect} from 'react'
import '../App.css'

import CloseIcon from '@material-ui/icons/Close'
import Add from "@material-ui/icons/Add";
import { storage } from "../firebase-config";
import { toast } from "react-toastify";

import {FlatList,  Text, View } from 'react-native-web'
import ButtonAppBar from './appbar1'
import { Timestamp, collection, addDoc,getFirestore,getDocs,doc,deleteDoc,orderBy} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase-config";

import { Box,Typography, Stack, TextField,Button,Modal,Tooltip,Fab,CircularProgress,Backdrop,Snackbar, IconButton} from '@mui/material'

function Social(){
  const[open1, setOpen1]=useState(false)
  const[open2, setOpen2]=useState(false)
  const [progress, setProgress] = useState(0);

// students posts

 
const [formData3, setFormData3] = useState({
  name: "",
  info: "",
  createdAt: Timestamp.now().toDate(),
});



const handleChange3 = (e) => {
 setFormData3({ ...formData3, [e.target.name]: e.target.value });
};

const handleImageChange3 = (e) => {
  setFormData3({ ...formData3, image: e.target.files[0] });
};

const handlePublish3 = () => {
 setOpen1(true)
 setOpen(false)

  const storageRef = ref(
    storage,
    `/posts/${Date.now()}${formData3.image.name}`
  );

  const uploadImage = uploadBytesResumable(storageRef, formData3.image);

  uploadImage.on(
    "state_changed",
    (snapshot) => {
      const progressPercent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progressPercent);
    },
    (err) => {
      console.log(err);
    },
    () => {
      setFormData3({
          name: "",
          info: "",
        
      });

      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const articleRef = collection(db, "posts");
        addDoc(articleRef, {
          name: formData3.name,
          info: formData3.info,
         
          imageUrl: url,
          createdAt: Timestamp.now().toDate(),
         
        })
          .then(() => {
            toast("profile added successfully", { type: "success" });
            setProgress(0);
            setOpen1(false)
            setOpen2(true)
          })
          .catch((err) => {
            toast("Error adding profile", { type: "error" });
          });
      });
    }
  );
};
 
    const [open, setOpen] = useState(false)

    let db= getFirestore(app)

    // trending fetch
    const [data, setData] = useState([]);
    const getAlldata=()=> {
      getDocs(collection(db, "top_songs")).then(docSnap => {
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

   // movies fetch
   const [data1, setData1] = useState([]);
   const getAlldata1=()=> {
     getDocs(collection(db, "movies")).then(docSnap => {
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


    // birthday
    const [data2, setData2] = useState([]);
    const getAlldata2=()=> {
      getDocs(collection(db, "birthdays")).then(docSnap => {
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


     // posts
     const [data3, setData3] = useState([]);
     const getAlldata3=()=> {
       getDocs(collection(db, "posts")).then(docSnap => {
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

     const handleClose = ()=>{
      setOpen2(false)
      getAlldata3();

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

     const renderItem = ({ item }) => (
    <View key={item.id} getAlldata3={getAlldata3}>
      <Stack sx={{backgroundColor:" rgb(16, 16, 83)", color:"wheat",border:"2px solid white"}}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" marginRight="10px">
          <Stack direction="row" margin="10px" sx={{gap:"1em" , alignItems:"center"}}>
            <Box sx={{}} > <img style={{backgroundColor:"wheat", width:"50px", height:"50px", borderRadius:"25px"}} src={require('../images/aa.jpg')} alt="" /></Box>
            <Typography >{item.name}</Typography>
          </Stack>
          {/* <Typography color="#fff" fontSize=".5em">{item.createdAt}</Typography> */}
        </Stack>
        <Typography color="#fff" margin="10px">
          {item.info}
        </Typography>
        <Box height="60vh" sx={{backgroundColor:"gray", margin:"10px" ,border:"1px solid white"}} >
          <img style={{width:"100%", height:"60vh"}} src={item.imageUrl} alt="post" />
        </Box>
        <Box sx={{height:"70px", backgroundColor:"darkblue",border:"1px solid white", margin:"10px" , marginTop:"17px"}}>
          <Stack direction="row" justifyContent="space-between" margin="7px" alignItems="center">
            <Box>
              <Typography className="like" fontSize="30px" >💬</Typography>
            </Box>
            <button type='button' onClick={()=>setOpen(true)}>comment</button>
          </Stack>
        </Box>
      </Stack>
    </View>
  );
       
 

  return(

   
   <Box className="main" sx={{width:"100%", marginTop:"15px", background:"antiquewhite" , color:"black" }}>
    
    <ButtonAppBar/>
    <Box textAlign="center" marginTop="80px" ></Box>
    <Typography textAlign="center" fontSize="1.6em" fontWeight="600" marginBottom="10px">GU | SOCIAL HUB</Typography>
    <Typography textAlign="center" >TRENDING, ENTERTAINMENT, GOSSIP AND LIFESTYLE AROUND CAMPUS</Typography>
    
 
    
 

       <Box margin="5px">
       <Typography textAlign="center" boxShadow="0 0 10px white" backgroundColor="black" border="3px solid white" fontSize="1.2em" color="antiquewhite" padding="5px">CAMPUS TOP 10 SONGS</Typography>
       {data.map(item => (
           <view key={item.id}  getAlldata={getAlldata} >
            
          <Box >
          
          
            <Box height="14vh" border="1px solid white" backgroundColor="black" marginTop="7px" display="flex" alignItems="center" gap="2.7em">

                  <Box display="flex" alignItems="center" gap="1.3em">
                  <Typography color="white" fontSize="24px">{item.position}</Typography>
                  <Box height="12vh" margin="3px" width="100px" backgroundColor="gray" border="1px solid white"  >
                    <img style={{ width:"100%", height:"100%"}} src={item.imageUrl} alt="song"/>
                  </Box>
                  </Box>
                  <Typography color="lawngreen" marginRight="5px">{item.song}</Typography>
                

            </Box>


         
          </Box>
             </view>
        ))}




      
<br></br>
      {/* movies */}
      <Box backgroundColor="black" paddingTop="5px">
      <Typography textAlign="center" boxShadow="0 0 10px white" margin="3px" backgroundColor="black" border="1px solid white" fontSize="1.5em" color="antiquewhite" padding="5px">TRENDING MOVIES</Typography>
              
      {data1.map(item => (
           <view key={item.id}  getAlldata1={getAlldata1} >
              
            <Box marginTop="26px">
                <Box height="40vh" border="1px solid white" margin="5px" marginTop="16px">
                <img style={{ width:"100%", height:"100%"}} src={item.imageUrl} alt="url"/>

                </Box>
                <Typography margin="5px" color="hotpink">{item.name}:<Typography color="white">{item.description}</Typography></Typography>
               </Box>


           
             </view>
        ))}

      </Box>






<br></br>
<Typography textAlign="center" marginTop="10px" fontWeight="600">TODAYS BIRTHDAY WISHES</Typography>
                {/* BDS */}
                {data2.map(item => (
                        <view key={item.id}  getAlldata2={getAlldata2} >
                       <br></br>
                        <Box>
                              
                              <Box backgroundColor="black" height="100vh">
                              <Typography textAlign="center" fontSize="28px" fontWeight="bold" color="hotpink">🎂🎈HAPPY BIRTHDAY🎈🎂</Typography>
                                <Box margin="5px" height="75vh" border="3px solid hotpink" >
                                  <Box border="3px solid lawngreen" height="74vh" >
                                    <Box border="3px solid blue" height="73.1vh" >
                                    <img style={{ width:"100%", height:"100%"}} src={item.imageUrl} alt="bd"/>
                                    </Box>
                                  </Box>
                                </Box>

                                <Typography textAlign="center" fontSize="1.3em" fontWeight="bold" color="orange">🥰{item.name}🥰</Typography>
                                <Typography textAlign="center" fontSize="1.3em"  color="wheat">{item.faculty}</Typography>
                               
                              </Box>
                        </Box>

                        <br></br>
                          </view>
                      ))}





<Typography textAlign="center" marginBottom="5px" boxShadow="0 0 10px white" backgroundColor="black" border="1px solid white" fontSize="1.5em" color="antiquewhite" padding="5px" marginTop="50px">TRENDING & GOSSIP</Typography>
 {/* posts */}
            {/* posts */}
            <FlatList
      data={data3}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    
    <Tooltip title="add post" sx={{position:"fixed", bottom:"4em", right:"4em"}}>
                    <Fab onClick={()=>setOpen(true)} color="primary"><Add/></Fab>
            </Tooltip>

            <Modal open={open} onClose={()=>setOpen(false)} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexFlow:"column"}}>
                {/* ADD posts */}


<Box sx={{width:"85%", backgroundColor:"white", padding:"1em", border:"none", outline:"none", maxHeight: "90vh", overflow: "auto"}}>
           <Typography textAlign="center" marginTop="60px" fontWeight="bold">ADD POSTS</Typography>


           <Stack backgoundColor="white" boxShadow="0 0 10 black" width="94%" margin="auto" gap="2em">
            <TextField label="NAME"  type="text"
              name="name"
              value={formData3.name}
              onChange={(e) => handleChange3(e)}>
              </TextField>


            <TextField label="POST" multiline
               name="info"
               value={formData3.info}
               onChange={(e) => handleChange3(e)}>
            </TextField>

         
         
          <label htmlFor="">ADD PICTURE</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleImageChange3(e)}
            />


          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
            

            <Button variant='contained'  onClick={handlePublish3}>POST</Button>

          </Stack>
        </Box>

            </Modal>

       </Box>
    




    
       
    
   </Box>
   
  )
}

export default Social