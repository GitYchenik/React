import logo from './logo.svg';
import './App.css';
import React from 'react';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2302e4d-a204-4ed6-9272-bb52396160ed/dc78oq-53b8ec18-c9ea-44a3-8485-d15bf797f90f.jpg/v1/fill/w_1024,h_768,q_75,strp/manhunt_smiley_by_p_m.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9iMjMwMmU0ZC1hMjA0LTRlZDYtOTI3Mi1iYjUyMzk2MTYwZWQvZGM3OG9xLTUzYjhlYzE4LWM5ZWEtNDRhMy04NDg1LWQxNWJmNzk3ZjkwZi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCIsImhlaWdodCI6Ijw9NzY4In1dXX0.iVwBpitjva-8YOeJ2uUCL1RxJSirz6qgRLtAZdClANQ'></img>
      </header>

      <nav className='nav'>
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
      </nav>

      <div className='content'>
        Main content
      </div>

    </div>)
};

export default App;
