
import React from 'react';
import './App.css';
import './index.css'
import { Route, Routes } from 'react-router-dom';

import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact'; 
import NotFound from './Components/NotFound';
 // The last version of Router V6 it's not necessary to use <Switch> so in my proyect I haven't use it. I add a new page where it is 404 not page founded

function App() {
  /* La APP The app renders the routes that can be taken from the Navigation component 
  The css framework that I have used mainly is that of Taiwlling that are rendered in all the components.
  */
   
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
