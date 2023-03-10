import { Stack } from "@mui/system";
import React from "react"; 
import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from "./components/home";
import Hostels from "./components/hostels";
import Comm from "./components/comm";
import Social from "./components/social";
import Spirit from "./components/spirit";
import Sports from "./components/sports";
import Admin from "./components/admin"
import ButtonAppBar from "./components/appbar1"
import SportsAdmin from "./components/sports_admin";
import Suggest from "./components/suggest"
import Login from "./components/login"
import Signup from "./components/signup";


export default function Start(){

  const currentUser=false;

  const RequireAuth=({children}) =>{

    return currentUser ? children : <Navigate to="/login" />
  };
    return(
      
    <Stack>
   
       <BrowserRouter>
     
       <ButtonAppBar/>
    
     <Routes>
      
      <Route path='/home' element={<Home/>}/>
      <Route path='/communications' element={<Comm/>}/>
      <Route path='/hostels' element={<Hostels/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/spirit' element={<Spirit/>}/>
      <Route path='/social' element={<Social/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/sports_admin' element={<SportsAdmin/>}/>
      <Route path='/suggest' element={<Suggest/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    
    
   </BrowserRouter>
    </Stack>  

    )
}