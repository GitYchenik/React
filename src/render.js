import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './Redux/State.js';
import { addPost } from './Redux/State.js';

let rerenderEntireTree = () => {

    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
 
export default rerenderEntireTree;