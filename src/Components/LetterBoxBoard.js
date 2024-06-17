import {useState, useEffect} from 'react';
import { Button, Container } from 'react-bootstrap';
import words from '../words';

const LetterBoxBoard = (props) => {
  const [board, setBoard] = useState(new Array(12).fill(''));
  const [curr, setCurr] = useState(0);
  const [found, setFound] = useState([]);
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
        if (curr === 12) {
          solve();
        }
      }
      else {
        if (curr < 12) {
          setBoard((prevBoard) => {
            prevBoard[curr] = props.letter;
            setCurr(curr + 1);
            return prevBoard;
          });
        }
      }
    }
  }, [props.clicks]);

  const resetFound = () => {
    setFound([]);
  };

  useEffect(() => {
    if (curr === 12 && click === true) {
      resetFound();
      solve();
    }
    setClick(false);
  }, [curr, click]);

  function solve() {
    for (let i = 0; i < 12; ++i) {
      let visited = new Array(12).fill(false);
      solveHelper('', i, [], false, visited);
    }
    setSolved(true);
  }

  const checked = (arr, fn = Boolean) => arr.every(fn);

  function solveHelper(word, index, arr, firstWord, visited) {
    console.log(word);
    if (words.includes(word) && checked(visited) && firstWord === true) {
      arr.push(word);
      setFound((foundWords) => {
        if (!foundWords.some(arr1 => arr1.every(item => arr.includes(item)))) {
          foundWords.push([...arr]);
        }
        return [...foundWords];
      });
      arr.pop();
      return;
    }

    for (let i = 0; i < 12; ++i) {
      if (!visited[i] && Math.floor(i/3) != Math.floor(index/3)) {
        visited[i] = true;
        let check = word.concat(board[i]);
        if (check.length <= 9) {
          solveHelper(check, i, arr, firstWord, visited);
          if (words.includes(word) && !firstWord) {
            arr.push(word);
            solveHelper(board[i], i, arr, true, visited);
            arr.pop();
          }
        }
        visited[i] = false;
      }
    }
  }

  function displayColumns(words) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {words.map((arr, row) => (
          <div key={row} style={{ display: 'flex', flex: 1 }}>
            {arr.map((word, i) => (
              <div key={i}>{word}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="letterbox-game-board">
        <div className="letterbox-center"></div>
        <div className="letterbox-box" style={{ gridRow: '1 / 2', gridColumn: '2 / 3'}}>{board[0]}</div>
        <div className="letterbox-box" style={{ gridRow: '1 / 2', gridColumn: '3 / 4'}}>{board[1]}</div>
        <div className="letterbox-box" style={{ gridRow: '1 / 2', gridColumn: '4 / 5'}}>{board[2]}</div>
        <div className="letterbox-box" style={{ gridRow: '2 / 3', gridColumn: '5 / 6'}}>{board[3]}</div>
        <div className="letterbox-box" style={{ gridRow: '3 / 4', gridColumn: '5 / 6'}}>{board[4]}</div>
        <div className="letterbox-box" style={{ gridRow: '4 / 5', gridColumn: '5 / 6'}}>{board[5]}</div>
        <div className="letterbox-box" style={{ gridRow: '5 / 6', gridColumn: '4 / 5'}}>{board[6]}</div>
        <div className="letterbox-box" style={{ gridRow: '5 / 6', gridColumn: '3 / 4'}}>{board[7]}</div>
        <div className="letterbox-box" style={{ gridRow: '5 / 6', gridColumn: '2 / 3'}}>{board[8]}</div>
        <div className="letterbox-box" style={{ gridRow: '4 / 5', gridColumn: '1 / 2'}}>{board[9]}</div>
        <div className="letterbox-box" style={{ gridRow: '3 / 4', gridColumn: '1 / 2'}}>{board[10]}</div>
        <div className="letterbox-box" style={{ gridRow: '2 / 3', gridColumn: '1 / 2'}}>{board[11]}</div>
      </div>
      <Button className="button" onClick={() => setClick(true)}>
        SOLVE
      </Button>
      {solved ? (
        // If solved, display all words
        <Container style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', }}>
          <div>{displayColumns(found)}</div>
        </Container>
      ) : (
        // Otherwise, display instructions
        <div>
          <p>
            Type on your keyboard (no mobile implementation) the letters on the honeycomb and click "SOLVE" when ready.
          </p>
        </div>
      )}
    </div>
  );
}

export default LetterBoxBoard;