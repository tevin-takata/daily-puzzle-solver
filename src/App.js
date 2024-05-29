import './index';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Honeycomb from './Pages/Honeycomb';
import NineLetter from './Pages/NineLetter';
import LetterBox from './Pages/LetterBox';
import React from 'react';

const App = () => {
  return (
    <div className='home'>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/honeycomb" element={<Honeycomb/>} />
        <Route path="/nineletter" element={<NineLetter/>} />
        <Route path="/letterbox" element={<LetterBox/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
