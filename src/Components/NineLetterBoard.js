import {useState, useEffect} from 'react';
import { Button, Container } from 'react-bootstrap';
import words from '../words';

let defaultBoard = [9];
for (let i = 0; i < 9; i++) {
  defaultBoard[i] = '';
}

let solvedWords = [7];
for (let i = 0; i < 7; i++) {
  solvedWords[i] = [];
}

function NineLetterBoard(props) {
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
    let visited = [9];
    for (let i = 0; i < 9; ++i) {
      visited[i] = false;
    }
    solveHelper('', visited);
    setSolved(true);
  }

  function solveHelper(word, visited) {
    if (words.includes(word.toLowerCase())) {
      setFound((foundWords) => {
        foundWords[word.length - 3].push(word);
        return foundWords;
      });
    }
  }

  return (
    <div>
      <div className="game-board">
        <div className="box">{board[0]}</div>
        <div className="box">{board[1]}</div>
        <div className="box">{board[2]}</div>
        <div className="box">{board[3]}</div>
        <div className="center-box">{board[4]}</div>
        <div className="box">{board[5]}</div>
        <div className="box">{board[6]}</div>
        <div className="box">{board[7]}</div>
        <div className="box">{board[8]}</div>
      </div>
      <Button className="button" onClick={() => setClick(true)}>
        SOLVE
      </Button>
      <div>{solved === true &&
        <div>
          {board}
        </div>
      }</div>
    </div>
  );
}

export default NineLetterBoard;