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
     navigate("/")
        })
        .catch((error) => {
        setError(true)
        });
    }


     

    


  return(

   
  
    <Box textAlign="center"  className="loginbg" >

      

      <Typography paddingTop="100px" textAlign="center"  fontFamily="Arial" fontSize="1.7em" fontWeight="700" color="purple" >REGISTER</Typography>
      
      <Box marginTop="30px">
     
      <form onSubmit={registerForm}>
           
          <Stack backgoundColor="white" boxShadow="0 0 10 black"  width="90%" margin="auto" gap="2em">
            <TextField className='login_input' label="email" inputProps={{ required: true }} autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}></TextField>
            
            <TextField className='login_input' type="password" label="password" inputProps={{ required: true }} autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)}></TextField>
            <Button type="submit" variant='contained'>REGISTER</Button>
           <Box>
           {error && <Typography color="red">Wrong email format. Please try again.</Typography>}
           </Box>
      <Typography>have account already?   <Box textAlign="center">
            <Link to="/">
              
              <Typography textDecoration="none" fontWeight="600">
                LOGIN
              </Typography>
            </Link>
      </Box></Typography>

          </Stack>

        
      </form>
      </Box>



    </Box>
 
   
  )
}

export default Signup