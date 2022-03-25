import React from 'react';
import Navegation from './Navegation';
import Slider from './Slider';
import Body from './Body';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <Navegation />
      <Slider />
      <Body/>
      <Footer/>
    </div>
  )
}
