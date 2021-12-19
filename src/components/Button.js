import React from "react";

const Button = ({ onclick, color }) => {
  return (
    <button
      onClick={onclick}
      style={{ backgroundColor: color, color: "white" }}
      className="btn"
    >
      Add
    </button>
  );
};

export default Button;
