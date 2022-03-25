
import React from 'react';
import './App.css';
import './index.css'
import { Route, Routes } from 'react-router-dom';

import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact'; 
import NotFound from './Components/NotFound';

function App() {
    // The last version of Router V6 it's not necessary to use <Switch> so in my proyect I haven't use it. I add a new page where it is 404 not page founded

  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
