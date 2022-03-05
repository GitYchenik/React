import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'It My first post', likesCount: 0 },
  { id: 2, message: 'Hi, how are you ?', likesCount: -155 },
  { id: 3, message: 'Ты че забыл тут?', likesCount: 2000000 },
]

let dialogs = [
  { id: 1, name: 'Dimych' }, 
  { id: 2, name: 'Albert' },
  { id: 3, name: 'Peter' },
]

let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'I am Progromist' },
  { id: 3, message: 'I am Peter Parker' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
