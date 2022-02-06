import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Audio from './components/songs/sound.js';
import Dialog from './components/Dialog/Dialog.jsx';
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Routes> 
            <Route path='Profile' element={<Profile />} />
            <Route path='Dialog' element={<Dialog />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
