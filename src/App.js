import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import Profile from './components/Profile.jsx';
import Audio from './components/sound';
const App = () => {
  return (
    <div className='app-wrapper'>
      <Audio></Audio>
      <Header />
      <NavBar />
      <Profile />
      12-зачем импорт реатк+++++++
    </div>)
};

export default App;
