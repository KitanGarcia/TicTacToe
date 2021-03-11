import React from "react";

const Cell = (props) => (
  <button
    className = "Cell"
    onClick = {props.onClick}
  >
  {props.value ? props.value : "L"}
  </button>
);

export default Cell;
