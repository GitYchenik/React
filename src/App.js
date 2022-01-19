import logo from './logo.svg';
import './App.css';
import React from 'react';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://i.pinimg.com/originals/15/43/a5/1543a57ceedae82fa44dd86602dc2e50.jpg'></img>
      </header>

      <nav className='nav'>
        <div>
          Profile
        </div>
        <div className='content'>
          Messages
        </div>
      </nav>

      <div>
        Main content
      </div>

    </div>)
};

export default App;
