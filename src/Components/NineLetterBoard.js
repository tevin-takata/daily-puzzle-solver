import {useState, useEffect} from 'react';

let defaultBoard = [9];
for (let i = 0; i < 9; i++) {
  defaultBoard[i] = '';
}

function NineLetterBoard(props) {
  const [board, setBoard] = useState(defaultBoard);
  const [curr, setCurr] = useState(0);

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

  function solve() {

  }

  return (
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
  );
}

export default NineLetterBoard;