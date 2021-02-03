import React, {useState} from 'react';

function Square(props) {
  return (
    <button className="square" onClick={()=>{props.onClick(props.value)}}>
      {props.value}
    </button>
  );
}

function Board(props){
  
  const handleClick = (value) =>{
    alert(value);
  };

  const renderSquare = (value) =>{
    return(
      <Square value={value} onClick={(value)=>handleClick(value)}/>
    );
  };

  return(
    <div>
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
