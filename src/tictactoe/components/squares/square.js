import React from "react";
import "./square.scss";

const Square = props => {
  return (
    <div className="square" onClick={() => props.squareClicked()}>
      {props.children}
    </div>
  );
};

export default Square;
