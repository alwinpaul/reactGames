import React from "react";
import "./square.scss";

const Square = props => {
  return (
    <div className={"square"} onClick={() => props.squareClicked()}>
      {props.children} {(props.winningIndex.includes(props.index) ? "winnerSqaure" : null)}
    </div>
  );
};

export default Square;
