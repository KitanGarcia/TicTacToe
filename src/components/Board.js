import React from "react";

import Cell from "./Cell.js";

//Renders cell components, receiving squares and the onClick function from Game
const Board = ({ squares, onClick }) => (
  <div className = "Board">
    <div className = "row">
      <Cell value = "1" onClick = {() => onClick()}/>
      <Cell value = "2" onClick = {() => onClick()}/>
      <Cell value = "3" onClick = {() => onClick()}/>
    </div>
    <div className = "row">
      <Cell value = "4" onClick = {() => onClick()}/>
      <Cell value = "5" onClick = {() => onClick()}/>
      <Cell value = "6" onClick = {() => onClick()}/>
    </div>
    <div className = "row">
      <Cell value = "7" onClick = {() => onClick()}/>
      <Cell value = "8" onClick = {() => onClick()}/>
      <Cell value = "9" onClick = {() => onClick()}/>
    </div>
  </div>
);

export default Board;
