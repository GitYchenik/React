import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Audio from './components/songs/sound.js';
import Dialog from './components/Dialog/Dialog.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Audio></Audio>
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Dialog />
      </div>
      {/* <Profile /> */}

    </div>)
};

export default App;
