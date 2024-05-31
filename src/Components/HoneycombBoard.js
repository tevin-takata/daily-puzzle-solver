import {useState, useEffect} from 'react';
import { Button, Container } from 'react-bootstrap';
import words from '../words';

const HoneycombBoard = (props) => {
  const [board, setBoard] = useState(new Array(7).fill(''));
  const [curr, setCurr] = useState(0);
  const [found, setFound] = useState(Array.from({ length: 5 }, () => []));
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

  const resetFound = () => {
    setFound(Array.from({ length: 5 }, () => []));
  };

  useEffect(() => {
    if (curr === 7 && click === true) {
      resetFound();
      solve();
    }
    setClick(false);
  }, [curr, click]);

  function solve() {
    let visited = new Array(7).fill(false);
    solveHelper("", visited);
    setSolved(true);
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

export default HoneycombBoard;