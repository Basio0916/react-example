import React, {useState} from 'react';
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

  const status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  const handleClick = (value) =>{
    const newSquares = squares.slice();
    newSquares[value] = xIsNext? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (value) =>{
    return(
      <Square value={squares[value]} onClick={()=>handleClick(value)}/>
    );
  };

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

export default Board;
