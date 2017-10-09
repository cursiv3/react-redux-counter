import React from "react";

const Clicks = ({ message, clicks }) => {
  return (
    <div>
      Message: {message}
      <p>clicks: {clicks}</p>
    </div>
  );
};

export default Clicks;
