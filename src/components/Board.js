import React from "react";

import Cell from "./Cell.js"

const Board = (props) => (
  <div className = "Board">
    <div className = "row">
      <Cell value = "1"/>
      <Cell value = "2"/>
      <Cell value = "3"/>
    </div>
    <div className = "row">
      <Cell value = "4"/>
      <Cell value = "5"/>
      <Cell value = "6"/>
    </div>
    <div className = "row">
      <Cell value = "7"/>
      <Cell value = "8"/>
      <Cell value = "9"/>
    </div>
  </div>
);

export default Board;
