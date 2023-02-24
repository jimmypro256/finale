import React, {useState} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField } from '@mui/material'
import app from '../firebase-config'
import {collection, addDoc,getFirestore} from 'firebase/firestore'
import { Link, useLocation, useNavigate  } from 'react-router-dom'

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";




function Login(){


  const db=getFirestore(app)



        // friendly username
  const [error, setError] =useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate =useNavigate()
    const registerForm= async(e) =>{
      e.preventDefault()
   
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          if(password==123456){
            navigate("/home")
          }
          else{
            navigate("/admin")
          }
     
        })
        .catch((error) => {
        setError(true)
        });
    }


     

    const [activeTab, setActiveTab]=useState("Login")


  return(

   
 <Box className="loginbg">
   
   <Box textAlign="center" marginTop="100px"  >

<Typography fontSize="1.7em" fontWeight="600" marginBottom="100px">Welcome| GU-guild-app</Typography>


    




<Box marginTop="30px">

<form onSubmit={registerForm}>
     
    <Stack backgoundColor="white" boxShadow="0 0 10 black" width="96%" margin="auto" gap="2em">
      <TextField className='login_input' label="username" value={email} onChange={(e)=>setEmail(e.target.value)}></TextField>
      
      <TextField className='login_input' label="password" value={password} onChange={(e)=>setPassword(e.target.value)}></TextField>
      <Button type="submit" variant='contained'>LOGIN</Button>

      <Typography>Don't have account?   <Box textAlign="center">
            <Link to="/signup">
              
              <p
              className={`${activeTab  === "Signup" ? "active" : ""}`}
              onClick={()=> setActiveTab("Signup")}
              >
        signup here
              </p>
            </Link>
      </Box></Typography>
<div className='error'>
  { error && <span>wrong longin details or check your network connection</span>}

  </div>
    </Stack>

  
</form>
</Box>



</Box>
 </Box>
 
   
  )
}

export default Login