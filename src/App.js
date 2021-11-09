import React from 'react';

import {Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './Components/nav-bar/NavBar'
function App() {
  return (
    <div className="App">
    <Routes>
      <NavBar />
    {/* <Route path='/' element={<Dashboard/>}/> */}
    </Routes>
    </div>

  );
}

export default App;
