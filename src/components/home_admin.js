import React, { useState, useEffect } from "react";
import { Timestamp, collection, addDoc,getFirestore,getDocs,doc,deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";
import { toast } from "react-toastify";
import app from "../firebase-config";
import {  Text, View } from 'react-native-web'
import { Box,Typography, Stack, TextField,Button} from '@mui/material'
import ButtonAppBar from './appbar1'
import { Delete } from "@material-ui/icons";




export default function HomeAdmin() {
    let db= getFirestore(app)



    // executives
 
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    tel: "",
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
    // if (!formData.title || !formData.description || !formData.image) {
    //   alert("Please fill all the fields");
    //   return;
    // }

    const storageRef = ref(
      storage,
      `/imagesExecutives/${Date.now()}${formData.image.name}`
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
            name: "",
            position: "",
            tel: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Executive_leaders");
          addDoc(articleRef, {
            name: formData.name,
            position: formData.position,
            tel: formData.tel,
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






  // cabinet loading

 
const [formData1, setFormData1] = useState({
  name: "",
  position: "",
  tel: "",
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
    `/imagesExecutives/${Date.now()}${formData1.image.name}`
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
          position: "",
          tel: "",
      });

      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const articleRef = collection(db, "Cabinet_leaders");
        addDoc(articleRef, {
          name: formData1.name,
          position: formData1.position,
          tel: formData1.tel,
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




  // State  loading

 
  const [formData2, setFormData2] = useState({
    name: "",
    position: "",
    tel: "",
    createdAt: Timestamp.now().toDate(),
  });
  
  
  
  const handleChange2 = (e) => {
   setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };
  
  const handleImageChange2 = (e) => {
    setFormData2({ ...formData2, image: e.target.files[0] });
  };
  
  const handlePublish2 = () => {
    // if (!formData.title || !formData.description || !formData.image) {
    //   alert("Please fill all the fields");
    //   return;
    // }
  
    const storageRef = ref(
      storage,
      `/imagesExecutives/${Date.now()}${formData2.image.name}`
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
            position: "",
            tel: "",
        });
  
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "State_leaders");
          addDoc(articleRef, {
            name: formData2.name,
            position: formData2.position,
            tel: formData2.tel,
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
  



  
  // Legislator loading

 
const [formData3, setFormData3] = useState({
  name: "",
  position: "",
  tel: "",
  createdAt: Timestamp.now().toDate(),
});



const handleChange3 = (e) => {
 setFormData3({ ...formData3, [e.target.name]: e.target.value });
};

const handleImageChange3 = (e) => {
  setFormData3({ ...formData3, image: e.target.files[0] });
};

const handlePublish3 = () => {
  // if (!formData.title || !formData.description || !formData.image) {
  //   alert("Please fill all the fields");
  //   return;
  // }

  const storageRef = ref(
    storage,
    `/imagesExecutives/${Date.now()}${formData3.image.name}`
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
          position: "",
          tel: "",
      });

      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        const articleRef = collection(db, "Legislator_leaders");
        addDoc(articleRef, {
          name: formData3.name,
          position: formData3.position,
          tel: formData3.tel,
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


  // change guild president

 
  const [formData4, setFormData4] = useState({
    name: "",
    createdAt: Timestamp.now().toDate(),
  });
  
  
  
  const handleChange4 = (e) => {
   setFormData4({ ...formData4, [e.target.name]:e.target.value });
  };
  
  const handleImageChange4 = (e) => {
    setFormData4({ ...formData4, image: e.target.files[0] });
  };
  
  const handlePublish4 = () => {
    
    const storageRef = ref(
      storage,
      `/guildpresident/${Date.now()}${formData4.image.name}`
    );
  
    const uploadImage = uploadBytesResumable(storageRef, formData4.image);
  
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
        setFormData4({
            name: "",
           
        });
  
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "guild_president");
          addDoc(articleRef, {
            name: formData4.name,
          
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
  











  
     // executives fetch
     const [data, setData] = useState([]);
     const getAlldata=()=> {
       getDocs(collection(db, "Executive_leaders")).then(docSnap => {
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

     // cabinet fetch
    const [data1, setData1] = useState([]);
    const getAlldata1=()=> {
      getDocs(collection(db, "Cabinet_leaders")).then(docSnap => {
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



     // State fetch
     const [data2, setData2] = useState([]);
     const getAlldata2=()=> {
       getDocs(collection(db, "State_leaders")).then(docSnap => {
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




      // Legislator fetch
    const [data3, setData3] = useState([]);
    const getAlldata3=()=> {
      getDocs(collection(db, "Legislator_leaders")).then(docSnap => {
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


         //  delete giuld president
    const deleteItem4=async(id)=>{
      await deleteDoc(doc(db, "guild_president", id));
      
      getAlldata4();
    }


    //  delete executive
    const deleteItem=async(id)=>{
      await deleteDoc(doc(db, "Executive_leaders", id));
      
      getAlldata();
    }


     //  delete cabinet minister
     const deleteItem1=async(id)=>{
      await deleteDoc(doc(db, "Cabinet_leaders", id));
      
      getAlldata1();
    }

      //  delete state minister
      const deleteItem2=async(id)=>{
        await deleteDoc(doc(db, "State_leaders", id));
        
        getAlldata2();
      }
        //  delete legislator minister
     const deleteItem3=async(id)=>{
      await deleteDoc(doc(db, "Legislator_leaders", id));
      
      getAlldata3();
    }

    
   
  return (

    <Box>
        <ButtonAppBar/>
        <Typography textAlign="center" paddingTop="100px" fontWeight="bold">HOME PAGE ADMIN</Typography>
        <Typography textAlign="center">Add, Update, View and Delete different leaders here</Typography>

        <Box>
           <Typography textAlign="center" marginTop="60px" fontWeight="bold">ADD EXECUTIVE LEADERS</Typography>


           <Stack backgoundColor="white" boxShadow="0 0 10 black" width="94%" margin="auto" gap="2em">
            <TextField label="FULL NAME"  type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}>
              </TextField>


            <TextField label="POSITION" 
               name="position"
               value={formData.position}
               onChange={(e) => handleChange(e)}>
            </TextField>

            <TextField label="PHONE NUMBER"  
              name="tel"
              value={formData.tel}
              onChange={(e) => handleChange(e)}>
            
            </TextField>

         
          <label htmlFor="">PROFILE PICTURE</label>
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




  {/* add cabinet MINISTERS */}

  <Box>
           <Typography textAlign="center" marginTop="60px" fontWeight="bold">ADD CABINET MINISTERS</Typography>


           <Stack backgoundColor="white" boxShadow="0 0 10 black" width="94%" margin="auto" gap="2em">
            <TextField label="FULL NAME"  type="text"
              name="name"
              value={formData1.name}
              onChange={(e) => handleChange1(e)}>
              </TextField>


            <TextField label="POSITION" 
               name="position"
               value={formData1.position}
               onChange={(e) => handleChange1(e)}>
            </TextField>

            <TextField label="PHONE NUMBER"  
              name="tel"
              value={formData1.tel}
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
add STATE MINISTERS */}
 <Box>
           <Typography textAlign="center" marginTop="60px" fontWeight="bold">ADD STATE MINISTERS</Typography>


           <Stack backgoundColor="white" boxShadow="0 0 10 black" width="94%" margin="auto" gap="2em">
            <TextField label="FULL NAME"  type="text"
              name="name"
              value={formData2.name}
              onChange={(e) => handleChange2(e)}>
              </TextField>


            <TextField label="POSITION" 
               name="position"
               value={formData2.position}
               onChange={(e) => handleChange2(e)}>
            </TextField>

            <TextField label="PHONE NUMBER"  
              name="tel"
              value={formData2.tel}
              onChange={(e) => handleChange2(e)}>
            
            </TextField>

         
          <label htmlFor="">PROFILE PICTURE</label>
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



{/* ADD LEGISLATORS */}


<Box>
           <Typography textAlign="center" marginTop="60px" fontWeight="bold">ADD LEGISLATORS</Typography>


           <Stack backgoundColor="white" boxShadow="0 0 10 black" width="94%" margin="auto" gap="2em">
            <TextField label="FULL NAME"  type="text"
              name="name"
              value={formData3.name}
              onChange={(e) => handleChange3(e)}>
              </TextField>


            <TextField label="POSITION" 
               name="position"
               value={formData3.position}
               onChange={(e) => handleChange3(e)}>
            </TextField>

            <TextField label="PHONE NUMBER"  
              name="tel"
              value={formData3.tel}
              onChange={(e) => handleChange3(e)}>
            
            </TextField>

         
          <label htmlFor="">PROFILE PICTURE</label>
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
            

            <Button variant='contained'  onClick={handlePublish3}>ADD</Button>

          </Stack>
        </Box>




        {/* ADD guild president */}


<Box>
           <Typography textAlign="center" marginTop="60px" fontWeight="bold">ADD GUILD PRESIDENT</Typography>


           <Stack backgoundColor="white" boxShadow="0 0 10 black" width="94%" margin="auto" gap="2em">
            <TextField label="FULL NAME"  type="text"
              name="name"
              value={formData4.name}
              onChange={(e) => handleChange4(e)}>
              </TextField>




         
          <label htmlFor="">PHOTO</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => handleImageChange4(e)}
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
            

            <Button variant='contained'  onClick={handlePublish4}>ADD</Button>

          </Stack>
        </Box>
        

          <Typography textAlign="center" marginTop="60px" fontWeight="bold">VIEW AND DELETE GUILD PRESIDENT</Typography>

            {/* GUILD PRESIDENT */}
            {data4.map(item => (
            <view key={item.id}  getAlldata4={getAlldata4} >
            <Box height="60vh" margin="5px" boxShadow="0 0 10px gray" paddingTop="10px" border="1px solid blue">

            <Stack border="1px solid white" height="55vh" margin="10px" >
              <Stack width="98%" margin="auto" alignItems="center" color="red">
             
             <img style={{width:"78%", height:"39vh", boxShadow:"0 0 20px black",border:"4px solid gray"}} src={item.imageUrl} alt="president" /> 
                <Typography height="10vh" boxShadow="0 0 5px black" backgroundColor="rgb(16, 16, 83)" color="white" sx={{width:"78%", textAlign:"center" ,border:"4px solid black"}}>GUILD PRESIDENT<br></br> H.E {item.name}</Typography>
                <Delete onClick={() => deleteItem4(item.id)} size="20px"/>
              </Stack>
            </Stack>
            </Box>
            </view>
            ))}





        {/* view and delete section */}

        <Typography textAlign="center" marginTop="60px" fontWeight="bold">VIEW AND DELETE EXECUTIVES</Typography>
        {data.map(item => (
           <view key={item.id}  getAlldata={getAlldata} >
             <Box border="2px solid darkblue" backgroundColor="darkblue" color="red" marginTop="10px" width="95%" margin="10px">
              <Stack direction="row" gap=".7em">
                <Box border="1px solid gray" height="20vh" backgroundColor="black" width="130px" margin="3px">
                  <img src={item.imageUrl}
                  alt="item.title"
                  width="100%" height="100%"></img>
              
                </Box>

                <Stack gap="1em" margin="3px">
                  <Typography color="white">{item.name}</Typography>
                  <Typography color="white">{item.position}</Typography>
                  <Typography color="white">{item.tel}</Typography>
                  <Delete onClick={() => deleteItem(item.id)} size="20px"/>
                </Stack>

              </Stack>
             </Box>
             </view>
        ))}



             <Typography textAlign="center" marginTop="60px" fontWeight="bold">VIEW AND DELETE CABINET MINISTERS</Typography>

             {/* CABINET */}
             {data1.map(item => (
           <view key={item.id}  getAlldata1={getAlldata1} >
             <Box border="4px solid gray" backgroundColor="rgb(1, 1, 26)"  marginTop="10px" width="95%" margin="10px">
              <Stack direction="row" gap=".7em">
                <Box border="1px solid gray" height="20vh" backgroundColor="black" width="130px" margin="3px">
                  <img src={item.imageUrl}
                  alt="item.title"
                  width="100%" height="100%"></img>
              
                </Box>

                <Stack gap="1em" margin="3px" color="red">
                  <Typography color="white">{item.name}</Typography>
                  <Typography color="white">{item.position}</Typography>
                  <Typography color="white">{item.tel}</Typography>
                  <Delete onClick={() => deleteItem1(item.id)} size="20px"/>
                </Stack>

              </Stack>
             </Box>
             </view>
        ))}





             <Typography textAlign="center" marginTop="60px" fontWeight="bold">VIEW AND DELETE STATE MINISTERS</Typography>
                {/* STATE MINISTERS */}
                {data2.map(item => (
                        <view key={item.id}  getAlldata2={getAlldata2} >
                          <Box border="4px solid gray" backgroundColor="rgb(1, 1, 26)"  marginTop="10px" width="95%" margin="10px">
                            <Stack direction="row" gap=".7em">
                              <Box border="1px solid gray" height="20vh" backgroundColor="black" width="130px" margin="3px">
                                <img src={item.imageUrl}
                                alt="item.title"
                                width="100%" height="100%"></img>
                            
                              </Box>

                              <Stack gap="1em" margin="3px" color="red">
                                <Typography color="white">{item.name}</Typography>
                                <Typography color="white">{item.position}</Typography>
                                <Typography color="white">{item.tel}</Typography>
                                <Delete onClick={() => deleteItem2(item.id)} size="20px"/>
                              </Stack>

                            </Stack>
                          </Box>
                          </view>
                      ))}





             <Typography textAlign="center" marginTop="60px" fontWeight="bold">VIEW AND DELETE LEGISLATORS</Typography>

              {/* LEGISLATORS */}
              {data3.map(item => (
           <view key={item.id}  getAlldata3={getAlldata3} >
             <Box border="4px solid gray" backgroundColor="rgb(1, 1, 26)"  marginTop="10px" width="95%" margin="10px">
              <Stack direction="row" gap=".7em">
                <Box border="1px solid gray" height="20vh" backgroundColor="black" width="130px" margin="3px">
                  <img src={item.imageUrl}
                  alt="item.title"
                  width="100%" height="100%"></img>
              
                </Box>

                <Stack gap="1em" margin="3px" color="red">
                  <Typography color="white">{item.name}</Typography>
                  <Typography color="white">{item.position}</Typography>
                  <Typography color="white">{item.tel}</Typography>
                  <Delete onClick={() => deleteItem3(item.id)} size="20px"/>
                </Stack>

              </Stack>
             </Box>
             </view>
        ))}



    </Box>
  );
}