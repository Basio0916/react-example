import React, {useState, useEffect} from 'react';
import './App.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props){
  
  // stateの実装
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(value){
    if (calculateWinner(squares) || squares[value]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[value] = xIsNext? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  function renderSquare(value){
    return(
      <Square value={squares[value]} onClick={()=>handleClick(value)}/>
    );
  };

  useEffect(()=>{
    const winner = calculateWinner(squares);
    if(winner){
      setStatus("Winner : " + winner);
    }
    else{
      setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
    }
  })

  return(
    <div>
      <div>{status}</div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function Game(){
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  const [xIsNext, setXIsNext] = useState(true);
  return(
    <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
