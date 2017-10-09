import React from "react";

const Counter = ({
  sendCool,
  sendAwesome,
  sendNeato,
  onAddClick,
  onRemoveClick
}) => {
  return (
    <div>
      <button
        onClick={e => {
          sendCool();
        }}
      >
        say "cool"
      </button>
      <button
        onClick={e => {
          sendAwesome();
        }}
      >
        say "awesome"
      </button>
      <button
        onClick={e => {
          sendNeato();
        }}
      >
        say "neato"
      </button>
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
