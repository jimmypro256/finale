import React, { useState, useEffect } from "react";
import { Timestamp, collection, addDoc,getFirestore,getDocs,doc,deleteDoc,orderBy} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";
import { toast } from "react-toastify";
import app from "../firebase-config";
import {FlatList,  Text, View } from 'react-native-web'
import { Box,Typography, Stack, TextField,Button,Modal,Tooltip,Fab,CircularProgress,Backdrop,Snackbar, IconButton} from '@mui/material'
import ButtonAppBar from './appbar1'
import { Delete } from "@material-ui/icons";
import CloseIcon from '@material-ui/icons/Close'
import Add from "@material-ui/icons/Add";
import {motion} from 'framer-motion'

export default function SocialAdmin() {

  const [open, setOpen] = useState(false)
  const[open1, setOpen1]=useState(false)
  const[open2, setOpen2]=useState(false)
    let db= getFirestore(app)



    // trending songs
 
  const [formData, setFormData] = useState({
    song: "",
    position: "",

    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
  

    const storageRef = ref(
      storage,
      `/trendingsongs/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

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
        setFormData({
            song: "",
            position: "",
          
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "top_songs");
          addDoc(articleRef, {
            song: formData.song,
            position: formData.position,
         
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
           
          })
            .then(() => {
              toast("profile added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding profile", { type: "error" });
            });
        });
      }
    );
  };






  // add movies

 
const [formData1, setFormData1] = useState({
  name: "",
  description: "",
 
  createdAt: Timestamp.now().toDate(),
});



const handleChange1 = (e) => {
 setFormData1({ ...formData1, [e.target.name]: e.target.value });
};

const handleImageChange1 = (e) => {
  setFormData1({ ...formData1, image: e.target.files[0] });
};

const handlePublish1 = () => {
  // if (!formData.title || !formData.description || !formData.image) {
  //   alert("Please fill all the fields");
  //   return;
  // }

  const storageRef = ref(
    storage,
    `/movies/${Date.now()}${formData1.image.name}`
  );

  const uploadImage = uploadBytesResumable(storageRef, formData1.image);

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
      setFormData1({
          name: "",
          description: "",
        
      });

      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const articleRef = collection(db, "movies");
        addDoc(articleRef, {
          name: formData1.name,
          description: formData1.description,
        
          imageUrl: url,
          createdAt: Timestamp.now().toDate(),
         
        })
          .then(() => {
            toast("profile added successfully", { type: "success" });
            setProgress(0);
          })
          .catch((err) => {
            toast("Error adding profile", { type: "error" });
          });
      });
    }
  );
};




  // BDS

 
  const [formData2, setFormData2] = useState({
    name: "",
    faculty: "",
   
    createdAt: Timestamp.now().toDate(),
  });
  
  
  
  const handleChange2 = (e) => {
   setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };
  
  const handleImageChange2 = (e) => {
    setFormData2({ ...formData2, image: e.target.files[0] });
  };
  
  const handlePublish2 = () => {
   
    const storageRef = ref(
      storage,
      `/birthdays/${Date.now()}${formData2.image.name}`
    );
  
    const uploadImage = uploadBytesResumable(storageRef, formData2.image);
  
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
        setFormData2({
            name: "",
            faculty: "",
          
        });
  
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "birthdays");
          addDoc(articleRef, {
            name: formData2.name,
            faculty: formData2.faculty,
           
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
           
          })
            .then(() => {
              toast("profile added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding profile", { type: "error" });
            });
        });
      }
    );
  };
  



  
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


  
     // trending fetch
     const [data, setData] = useState([]);
     const getAlldata=()=> {
       getDocs(collection(db, "top_songs"), orderBy("position", "asc")).then(docSnap => {
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
      



    //  delete songs
    const deleteItem=async(id)=>{
      await deleteDoc(doc(db, "top_songs", id));
      
      getAlldata();
    }


     //  delete movies
     const deleteItem1=async(id)=>{
      await deleteDoc(doc(db, "movies", id));
      
      getAlldata1();
    }

      //  delete bd
      const deleteItem2=async(id)=>{
        await deleteDoc(doc(db, "birthdays", id));
        
        getAlldata2();
      }
        //  delete posts
     const deleteItem3=async(id)=>{
      await deleteDoc(doc(db, "posts", id));
      
      getAlldata3();
    }

    


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
          <Typography color="wheat" fontSize=".8em">{item.createdAt.toDate().toDateString()}</Typography>
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
             <motion.div className='social'>

                    <motion.button whileTap={{ scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],}} >👍🏻 like</motion.button>
                    
                    </motion.div>

                  
                    
                  
                  <motion.img  whileTap={{ scale: [1, 3, 3, 1, 1],
                    rotate: [0, 0, 270, 270, 0],}} style={{width:"35px", height:"35px"}} src={require('../images/laf.jpg')} alt="" />
                  
                  
                  <motion.img whileTap={{ scale: [1, 3, 3, 1, 1],
                    rotate: [0, 0, 270, 270, 0],}} style={{width:"35px", height:"35px"}} src={require('../images/angry.png')} alt="" />
                   
                   <motion.img whileTap={{ scale: [1, 3, 3, 1, 1],
                    rotate: [0, 0, 270, 270, 0],}} style={{width:"35px", height:"35px"}} src={require('../images/lav.png')} alt="" />
                 
            <button type='button' onClick={()=>setOpen(true)}>comment</button>
          </Stack>
        </Box>
      </Stack>
    </View>
  );
   
  return (

    <Box>

    <Backdrop open={open1} sx={{color:"fff"}}>
    <CircularProgress sx={{color:"white"}}/>
    </Backdrop>
    <Snackbar action={action} autoHideDuration={3000} open={open2} message="sent   successfully!!"></Snackbar>


        <ButtonAppBar/>
        <Typography textAlign="center" paddingTop="100px" fontWeight="bold">HOME PAGE ADMIN</Typography>
        <Typography textAlign="center">Add, Update, View and Delete different leaders here</Typography>

        <Box>
           <Typography textAlign="center" marginTop="60px" fontWeight="bold">ADD TOP SONGS</Typography>


           <Stack backgoundColor="white" boxShadow="0 0 10 black" width="94%" margin="auto" gap="2em">
            <TextField label="SONG AND ARTIST"  type="text"
              name="song"
              value={formData.name}
              onChange={(e) => handleChange(e)}>
              </TextField>


            <TextField label="POSITION"   type="number"
               name="position"
               value={formData.position}
               onChange={(e) => handleChange(e)}>
            </TextField>

           

         
          <label htmlFor="">COVER PHOTO</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleImageChange(e)}
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
            

            <Button variant='contained'  onClick={handlePublish}>ADD</Button>

          </Stack>
        </Box>




  {/* add movies */}

  <Box>
           <Typography textAlign="center" marginTop="60px" fontWeight="bold">ADD MOVIES</Typography>


           <Stack backgoundColor="white" boxShadow="0 0 10 black" width="94%" margin="auto" gap="2em">
            <TextField label="MOVIE TITLE"  type="text"
              name="name"
              value={formData1.name}
              onChange={(e) => handleChange1(e)}>
              </TextField>


            <TextField label="DESCRIPTION" 
               name="description"
               value={formData1.description}
               onChange={(e) => handleChange1(e)}>
            </TextField>

          
         
          <label htmlFor="">PROFILE PICTURE</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleImageChange1(e)}
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
            

            <Button variant='contained'  onClick={handlePublish1}>ADD</Button>

          </Stack>
        </Box>

{/* 
add birthday*/}
 <Box>
           <Typography textAlign="center" marginTop="60px" fontWeight="bold">ADD BIRTHDAY</Typography>


           <Stack backgoundColor="white" boxShadow="0 0 10 black" width="94%" margin="auto" gap="2em">
            <TextField label="FULL NAME"  type="text"
              name="name"
              value={formData2.name}
              onChange={(e) => handleChange2(e)}>
              </TextField>


            <TextField label="FACULTY" 
               name="faculty"
               value={formData2.faculty}
               onChange={(e) => handleChange2(e)}>
            </TextField>

            

         
          <label htmlFor="">PICTURE</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleImageChange2(e)}
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
            

            <Button variant='contained'  onClick={handlePublish2}>ADD</Button>

          </Stack>
        </Box>







       
      
        {/* view and delete section */}

        <Typography textAlign="center" marginTop="60px" fontWeight="bold">VIEW AND DELETE TOP SONGS</Typography>
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
                 <Box color="red">
                 <Delete onClick={() => deleteItem(item.id)} size="20px"/>
                 </Box>

            </Box>


         
          </Box>
             </view>
        ))}



             <Typography textAlign="center" marginTop="60px" fontWeight="bold">VIEW AND DELETE MOVIES</Typography>

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


                 <Box color="red">
                 <Delete onClick={() => deleteItem1(item.id)} size="20px"/>
                 </Box>
           
             </view>
        ))}

        </Box>



             <Typography textAlign="center" marginTop="60px" fontWeight="bold">VIEW AND DELETE BIRTHDAY</Typography>
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
                                <Box color="red" textAlign="center">
                                  <Delete onClick={() => deleteItem2(item.id)} size="20px"/>
                                  </Box>
                              </Box>
                        </Box>

                        <br></br>
                          </view>
                      ))}





             <Typography textAlign="center" marginTop="60px" fontWeight="bold">VIEW AND DELETE POSTS</Typography>
             <Typography textAlign="center" marginBottom="5px" boxShadow="0 0 10px white" backgroundColor="black" border="1px solid white" fontSize="1.5em" color="antiquewhite" padding="5px" marginTop="50px">TRENDING & GOSSIP</Typography>
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
  );
}