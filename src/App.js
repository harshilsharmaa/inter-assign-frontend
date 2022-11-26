import React,{useEffect, useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {loadUser} from './Actions/user'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Profile from './Components/Profile/Profile';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  },[dispatch])
  const {isAuthenticate} = useSelector(state=>state.user)


  return (

    <Router>

      <Routes>

        <Route path="/" element={isAuthenticate?<Profile />:<Login/>} />
        <Route path="/login" element={isAuthenticate?<Profile />:<Login/>} />
        <Route path="/signup" element={isAuthenticate?<Profile />:<Signup />} />
        <Route path="/profile" element={isAuthenticate?<Profile />:<Login/>} />
        
      </Routes>

    </Router>
  );
}

export default App;
