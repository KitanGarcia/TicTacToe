import React, { useState } from "react";

import Board from "./Board";

const Game = (props) => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);


  //this is the handleClick that will be passed down to the other components
  const handleClick = i => {
    //create copy of board
    const boardCopy = [...board];

    //if user clicks an occupied square or if the game is over
    if (winner || boardCopy[i]) {
      return;
    }

    console.log(i);
    //put an X or O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    console.log(boardCopy);
    setBoard(boardCopy); //set board to new state
    setXIsNext(!xIsNext); //switch players
  }

  const jumpTo = () => {
  }

  const renderMoves = () => {
    return (
      <button onClick = {() => setBoard(Array(9).fill(null))}>
        Start Game
      </button>
    );
  }

  //Should return X, O, or null as winner
  const calculateWinner = (board) => {
    const winningRows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningRows.length; i++) {
      const [a, b, c] = winningRows[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
  }


  const winner = calculateWinner(board);

  console.log("hi")
  console.log(board)

  return (
    <div className = "Game">
      <Board cells = {board} onClick = {handleClick} />
      <p>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
      {renderMoves()}
    </div>
  );
}


export default Game;
