import React from 'react';
import Navegation from './Navegation';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

 function Home(){
   /* 
   This is the main body from which all components are rendered.
   
    It is separated by 4 main components that describe the web page
   */
  return (
    <div>
      <Navegation />
       <Header />
      <Body/>
      <Footer/>
    </div>
  )
}
export default Home; 