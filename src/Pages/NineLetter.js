import {useState, useEffect} from 'react';
import '../App.css';
import NineLetterBoard from '../Components/NineLetterBoard';

function isLetter(key) {
  return key.length === 1 && key.match(/[a-z]/i);
};

function solve() {

};

const NineLetter = () => {
  const [letters, setLetters] = useState({});
  const [letter, setLetter] = useState();
  const [clicked, setClicked] = useState(0);
  const onKeyDown = (e) => {
    const key = e.key;

    if (key === 'Enter') {
      setLetter("ENTER");
      setClicked(clicked + 1);
    }
    if (key === 'Backspace') {
      setLetter("DEL");
      setClicked(clicked + 1);
    }
    if (isLetter(key)) {
      setLetter(key.toUpperCase());
      setClicked(clicked + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div className="App">
      <NineLetterBoard
        letter = {letter}
        clicks = {clicked}
      />
    </div>
  );
}

export default NineLetter;
