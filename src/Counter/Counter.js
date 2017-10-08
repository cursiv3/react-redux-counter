import React from "react";

const Counter = props => {
  return (
    <div>
      <button onClick={props.onAddClick}>+</button>
      <button onClick={props.onRemoveClick}>-</button>
    </div>
  );
};

export default Counter;
