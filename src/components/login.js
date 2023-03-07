import React, {useState} from 'react'
import '../App.css'
import { Box,Typography, Stack, Button, TextField,Backdrop, CircularProgress } from '@mui/material'
import app from '../firebase-config'
import {collection, addDoc,getFirestore} from 'firebase/firestore'
import { Link, useLocation, useNavigate  } from 'react-router-dom'

import { signInWithEmailAndPassword, getAuth } from "firebase/auth";




function Login(){


  const db=getFirestore(app)


  const [loader, setLoader] = useState(false)
        // friendly username
  const [error, setError] =useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate =useNavigate()

    const loginForm= async(e) =>{
      e.preventDefault()
   setLoader(true)
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
          setLoader(false)
     
        })
        .catch((error) => {
        setError(true)
        setLoader(false)
        });
    }


     

    const [activeTab, setActiveTab]=useState("Login")


  return(



   
 <Box className="loginbg">
     <Backdrop open={loader}>
        <CircularProgress />
      </Backdrop>
   
   <Box textAlign="center" marginTop="100px"  >

<Typography fontSize="1.7em" fontWeight="600" marginBottom="100px">Welcome| GU-guild-app</Typography>


<Box>

<form onSubmit={loginForm}>
     
    <Stack backgoundColor="white" boxShadow="0 0 10 black" width="90%" margin="auto" gap="2em">
      <TextField className='login_input' inputProps={{ required: true }} autoComplete='off' label="email" value={email} onChange={(e)=>setEmail(e.target.value)}></TextField>
      
      <TextField className='login_input' type="password" inputProps={{ required: true }} autoComplete='off' label="password" value={password} onChange={(e)=>setPassword(e.target.value)}></TextField>
      <Button type="submit" variant='contained'>LOGIN</Button>
    
  { error && <Typography color="red" textAlign="center" margin="5px">Wrong email and password </Typography>}

  
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

    </Stack>

  
</form>
</Box>



</Box>
 </Box>
 
   
  )
}

export default Login