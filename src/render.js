import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './Redux/State.js';
import { addPost } from './Redux/State.js';
import {updateNewPostText} from './Redux/State.js';

let rerenderEntireTree = () => {

    ReactDOM.render(
      <React.StrictMode>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
 
export default rerenderEntireTree;