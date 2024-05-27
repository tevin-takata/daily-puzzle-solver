import {useState, useEffect} from 'react';
import { Button, Container } from 'react-bootstrap';
import words from '../words';

let defaultBoard = [9];
for (let i = 0; i < 9; i++) {
  defaultBoard[i] = '';
}


const HoneycombBoard = (props) => {
  /**const [board, setBoard] = useState(defaultBoard);
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
        if (curr === 9) {
          solve();
        }
      }
      else {
        if (curr < 9) {
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
    if (curr === 9 && click === true) {
      solve();
    }
    setClick(false);
  });

  function solve() {

  }
  **/

  return (
    <div className="layout">
      <div>
        <div className="honeycomb">
          <div className="honeycontent">Z</div>
        </div>
        <div className="honeycomb"></div>
      </div>
      <div>
        <div className="honeycomb"></div>
        <div className="center-honeycomb"></div>
        <div className="honeycomb"></div>
      </div>
      <div>
        <div className="honeycomb"></div>
        <div className="honeycomb"></div>
      </div>
    </div>
  );
}

export default HoneycombBoard;