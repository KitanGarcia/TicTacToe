import React, { useState } from "react";

import Board from "./Board";

const Game = (props) => {
  //history will be an array of arrays (with each element being a board state)
  const [history, setHistory] = useState([new Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0); //what turn we are on so we can jump to/from it
  const [xIsNext, setXIsNext] = useState(true);


  //this is the handleClick that will be passed down to the other components
  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1); //get the most recent or last jumped to board state
    const current = timeInHistory[stepNumber]; //get the current or jumped to move

    const cells = [...current]; //copy the current state we are mutating

    //if user clicks an occupied square or if the game is over
    if (winner || cells[i]) {
      return;
    }

    //put an X or O in the clicked square
    cells[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, cells]); //set history to time in history and add the most recent state.
    setStepNumber(timeInHistory.length); //get which step we are on
    setXIsNext(!xIsNext); //switch players
  }

  const jumpTo = (move) => {
    setStepNumber(move);
    setXIsNext(move % 2 === 0); //set to true or false if turn is even or odd (so we know to use X or O
  }

  const renderMoves = () => {
    //_step since we are not using steps, just move
    return (
      <ul>
        {history.map((_step, move) => {
          const destination = move ? `Go to move #${move}` : "Go to start";
          return (
            <li key = {move} className = "moves">
              <button onClick = {() => jumpTo(move)}>
                {destination}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  //Should return X, O, or null as winner
  //takes in the last step element of history, which is the most recent board state
  const calculateWinner = (boardState) => {
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

      if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
        return boardState[a];
      }
    }
    return null;
  }


  const winner = calculateWinner(history[stepNumber]);

  return (
    <div className = "Game">
      <Board cells = {history[stepNumber]} onClick = {handleClick} />
      <p>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
      {renderMoves()}
    </div>
  );
}

export default Game;
