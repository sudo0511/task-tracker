import React from "react";

const Button = ({ text, onclick, color }) => {
  return (
    <button
      onClick={onclick}
      style={{ backgroundColor: color, color: "white" }}
      className="btn btn-x"
    >
      {text}
    </button>
  );
};

export default Button;
