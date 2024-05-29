import {useState, useEffect} from 'react';
import { Button, Container } from 'react-bootstrap';
import words from '../words';

let defaultBoard = [7];
for (let i = 0; i < 7; i++) {
  defaultBoard[i] = '';
}

let solvedWords = [5];
for (let i = 0; i < 5; i++) {
  solvedWords[i] = [];
}

const HoneycombBoard = (props) => {
  const [board, setBoard] = useState(defaultBoard);
  const [curr, setCurr] = useState(0);
  const [found, setFound] = useState(solvedWords);
  const [click, setClick] = useState(false);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    if (props.clicks !== 0) {
      if (props.letter === 'DEL') {
        if (curr > 0) {
          setBoard((prevBoard) => {
            setCurr(curr - 1);
            prevBoard[curr - 1] = '';
            return prevBoard;
          });
        }
      }
      else if (props.letter === 'ENTER') {
        if (curr === 7) {
          solve();
        }
      }
      else {
        if (curr < 7) {
          setBoard((prevBoard) => {
            prevBoard[curr] = props.letter;
            setCurr(curr + 1);
            return prevBoard;
          });
        }
      }
    }
  }, [props.clicks]);

  useEffect(() => {
    if (curr === 7 && click === true) {
      solve();
    }
    setClick(false);
  });

  function solve() {

  }

  return (
    <div className="layout">
      <div>
        <div className="honeycomb">
          <div className="honeycontent">{board[0]}</div>
        </div>
        <div className="honeycomb">
          <div className="honeycontent">{board[1]}</div>
        </div>
      </div>
      <div>
        <div className="honeycomb">
          <div className="honeycontent">{board[2]}</div>
        </div>
        <div className="center-honeycomb">
          <div className="honeycontent">{board[3]}</div>
        </div>
        <div className="honeycomb">
          <div className="honeycontent">{board[4]}</div>
        </div>
      </div>
      <div>
        <div className="honeycomb">
          <div className="honeycontent">{board[5]}</div>
        </div>
        <div className="honeycomb">
          <div className="honeycontent">{board[6]}</div>
        </div>
      </div>
    </div>
  );
}

export default HoneycombBoard;