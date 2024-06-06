import {useState, useEffect} from 'react';
import { Button, Container } from 'react-bootstrap';
import words from '../words';

const LetterBoxBoard = (props) => {
  const [board, setBoard] = useState(new Array(7).fill(''));
  const [curr, setCurr] = useState(0);
  const [found, setFound] = useState(Array.from({ length: 7 }, () => []));
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

  const resetFound = () => {
    setFound(Array.from({ length: 7 }, () => []));
  };

  useEffect(() => {
    if (curr === 9 && click === true) {
      resetFound();
      solve();
    }
    setClick(false);
  }, [curr, click]);

  const moves = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [1, -1], [0, 1], [1, 1]];

  function to2d(index) {
    return [index % 3, Math.floor(index / 3)];
  }

  function toIndex(x, y) {
    return (y * 3) + x;
  }

  function validIndex(x, y) {
    return (x >= 0 && x < 3 && y >= 0 && y < 3);
  }

  function solve() {
    for (let i = 0; i < 9; ++i) {
      let visited = new Array(9).fill(false);
      solveHelper('', i, visited);
    }
    setSolved(true);
  }

  function solveHelper(word, index, visited) {
    if (words.includes(word.toLowerCase()) && visited[4] === true) {
      setFound((foundWords) => {
        if (!foundWords[word.length - 3].includes(word)) {
          foundWords[word.length - 3].push(word);
        }
        return [...foundWords];
      });
    }

    for (let [dx, dy] of moves) {
      let [x, y] = to2d(index);
      let curr = [x + dx, y + dy];
      let ind = toIndex(curr[0], curr[1]);
      if (validIndex(curr[0], curr[1]) && !visited[ind]) {
        visited[ind] = true;
        let check = word.concat(board[ind]);
        solveHelper(check, ind, visited);
        visited[ind] = false;
      }
    }
  }

  function displayColumns(words) {
    const noWords = Math.ceil(words.length/4)
    const columns = [];
    for (let i = 0; i < 4; i++) {
      columns.push(words.slice(i * noWords, (i + 1) * noWords));
    }

    return (
      <div style={{ display: 'flex' }}>
        {columns.map((column, index) => (
          <div key={index} style={{ flex: 1 }}>
            {column.map((word, i) => (
              <div key={i}>{word}</div>
            ))}
          </div>
        ))}
      </div>
    );
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
      {solved ? (
        // If solved, display all words
        <Container style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', }}>
          <div className="solved">3-Letter Words</div>
          <div>{displayColumns(found[0])}</div>
          <div className="solved">4-Letter Words</div>
          <div>{displayColumns(found[1])}</div>
          <div className="solved">5-Letter Words</div>
          <div>{displayColumns(found[2])}</div>
          <div className="solved">6-Letter Words</div>
          <div>{displayColumns(found[3])}</div>
          <div className="solved">7-Letter Words</div>
          <div>{displayColumns(found[4])}</div>
          <div className="solved">8-Letter Words</div>
          <div>{displayColumns(found[5])}</div>
          <div className="solved">9-Letter Words</div>
          <div>{displayColumns(found[6])}</div>
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