import React from "react";

//Renders cell component taking in a destructured key, value, and onClick function
//key is to keep track of which index maps to which element on the page
//value is the value of the cell
const Cell = ({ value, onClick }) => (
  <button
    className = "Cell"
    onClick = {onClick}
  >
  {value ? value : null}
  </button>
);

/*
 * onClick passed from Game and then from Board:
 *
  const handleClick = i => {
    //create copy of board
    const boardCopy = [...board];

    //if user clicks an occupied square or if the game is over
    if (winner || boardCopy[i]) {
      return;
    }

    //put an X or O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy); //set board to new state
    setXIsNext(!xIsNext); //switch players
  }
 */

export default Cell;
