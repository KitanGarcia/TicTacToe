import React, { useState } from "react";

import Board from "./Board";

const Game = (props) => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  return (
    <div className = "Game">
      <Board />
    </div>
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
    const [a, b, c] = lines[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
}

export default Game;
