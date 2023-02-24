import React, { useState, useEffect } from "react";
import { Timestamp, collection, addDoc,getFirestore,getDocs,doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase-config";
import { toast } from "react-toastify";
import app from "../firebase-config";
import {  Text, View } from 'react-native-web'
import { Box,Typography, Stack} from '@mui/material'



export default function AddArticle() {
    let db= getFirestore(app)
 
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
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
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
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
          title: "",
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
           
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };







  
     // Articles fetch
     const [data, setData] = useState([]);
     const getAlldata=()=> {
       getDocs(collection(db, "Articles")).then(docSnap => {
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
      
    
   
  return (
    <div className="border p-3 mt-3 bg-light" style={{ position: "fixed" }}>
      
       
    
        <>
          <h2>Create article</h2>
          <div className="form-group">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </div>

          {/* description */}
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={(e) => handleChange(e)}
          />

          {/* image */}
          <label htmlFor="">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="form-control"
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
          <button
            className="form-control btn-primary mt-2"
            onClick={handlePublish}
          >
            Publish
          </button>
        </>


<Typography>out put</Typography>

        <View>
  
  {data.map(item => (
    <View key={item.id}  getAlldata={getAlldata}>
      <Stack direction="row" gap="20px">
      
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <img src={item.imageUrl}
      alt="item.title"
       width="100px" height="100px"></img>
    
     
      {/* <button title="Delete" onClick={() => deleteItem(item.id)} >DELETE</button> */}
      </Stack>
     
    </View>
  ))}
</View>

      
    </div>
  );
}