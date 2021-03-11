import React from "react";

import Cell from "./Cell.js";

//Renders cell components, receiving the cell clicked and the onClick function from Game
const Board = ({ cells, onClick }) => (
  <div className = "Board">
    {console.log(cells)}
    <div className = "row">
      {cells.map((cell, i) => {
        if (i < 3) {
          return <Cell key = {i} value = {cell} onClick = {() => onClick(i)} />
        }
      })}
    </div>

    <div className = "row">
      {cells.map((cell, i) => {
        if (i > 2 && i < 6) {
          return <Cell key = {i} value = {cell} onClick = {() => onClick(i)} />
        }
      })}
    </div>

    <div className = "row">
      {cells.map((cell, i) => {
        if (i > 5 && i < 9) {
          return <Cell key = {i} value = {cell} onClick = {() => onClick(i)} />
        }
      })}

    </div>
  </div>
);

export default Board;
