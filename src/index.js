import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Honeycomb from './Honeycomb';
import NineLetter from './NineLetter';
import LetterBox from './LetterBox';
import reportWebVitals from './reportWebVitals';

const Routing = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/honeycomb" element={<Honeycomb />} />
          <Route path="/nineletter" element={<NineLetter />} />
          <Route path="/letterbox" element={<LetterBox />} />
        </Route>
      </Routes>
    </Router>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
