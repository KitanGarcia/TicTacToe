import React from "react";

//Renders cell component taking in a destructured value and onClick function
const Cell = ({ value, onClick }) => (
  <button
    className = "Cell"
    onClick = {onClick}
  >
  {value ? value : null}
  </button>
);

export default Cell;
