import React, {useState} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField } from '@mui/material'
import app from '../firebase-config'
import {collection, addDoc,getFirestore} from 'firebase/firestore'
import { Link, useLocation, useNavigate  } from 'react-router-dom'

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";




function Signup(){


  const db=getFirestore(app)



        // friendly username
  const [error, setError] =useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate =useNavigate()
    const registerForm= async(e) =>{
      e.preventDefault()
   
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
     navigate("/login")
        })
        .catch((error) => {
        setError(true)
        });
    }


     

    const [activeTab, setActiveTab]=useState("Login")


  return(

   
  
    <Box textAlign="center" marginTop="100px" >
     

            <Box textAlign="center">
                  <Link to="/">
                    
                    <p
                    className={`${activeTab  === "Login" ? "active" : ""}`}
                    onClick={()=> setActiveTab("Login")}
                    >
                   LOGIN
                    </p>
                  </Link>
            </Box>

  

      <Typography marginTop="40px" textAlign="center" >REGISTER</Typography>
      
      <Box marginTop="30px">
     
      <form onSubmit={registerForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black" width="320px" margin="auto" gap="2em">
            <TextField label="username" value={email} onChange={(e)=>setEmail(e.target.value)}></TextField>
            
            <TextField label="password" value={password} onChange={(e)=>setPassword(e.target.value)}></TextField>
            <Button type="submit" variant='contained'>REGISTER</Button>
          { error && <span>wrong email and password</span>}

          </Stack>

        
      </form>
      </Box>



    </Box>
 
   
  )
}

export default Signup