import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Honeycomb from './Honeycomb';
import NineLetter from './NineLetter';
import LetterBox from './LetterBox';
import React from 'react';

const App = () => {
  return (
    <div className="App">
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
