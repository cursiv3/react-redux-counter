import React from "react";

const Counter = ({ onAddClick, onRemoveClick }) => {
  return (
    <div>
      <button onClick={onAddClick}>+</button>
      <button onClick={onRemoveClick}>-</button>
    </div>
  );
};

export default Counter;
