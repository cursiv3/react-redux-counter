import React from "react";

const Counter = ({ onAddClick, onRemoveClick }) => {
  return (
    <div>
      <button
        onClick={e => {
          onAddClick();
        }}
      >
        +
      </button>
      <button
        onClick={e => {
          onRemoveClick();
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
