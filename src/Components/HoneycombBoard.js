import {useState, useEffect} from 'react';
import { Button, Container } from 'react-bootstrap';
import words from '../words';

const defaultBoard = new Array(7).fill('');
const solvedWords = Array.from({ length: 5 }, () => []);

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
    let visited = new Array(7).fill(false);
    solveHelper("", visited);
    setSolved(true);
    console.log(found);
  }

  function solveHelper(word, visited) {
    if (words.includes(word.toLowerCase()) && visited[3] === true) {
      setFound((foundWords) => {
        if (!foundWords[word.length - 3].includes(word)) {
          foundWords[word.length - 3].push(word);
        }
        return [...foundWords];
      });
    }

    for (let i = 0; i < 7; i++) {
      if (!visited[i]) {
        visited[i] = true;
        let check = word.concat(board[i]);
        if (check.length < 3 || !found[check.length - 3]?.includes(check)) {
          solveHelper(check, visited);
        }
        visited[i] = false;
      }
    }
  }

  return (
    <div>
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
      <Button className="button" onClick={() => setClick(true)}>
        SOLVE
      </Button>
    </div>
  );
}

export default HoneycombBoard;