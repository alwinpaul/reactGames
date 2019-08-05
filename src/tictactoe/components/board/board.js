import React, { Component } from "react";
import "./board.scss";
import Square from "./../squares/";

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }
  state = {
    squareValue: Array(9).fill(null),
    isX: true
  };

  renderRow(i) {
    return (
      <Square
        squareClicked={() => this.handleSquareClick(i)}
        value={this.state.squareValue[i]}
      >
        {this.state.squareValue[i]}
      </Square>
    );
  }

  handleSquareClick(i) {
    const squares = this.state.squareValue.slice();
    if (this.state.isX) {
        squares[i] = 'X'
    } else {
        squares[i] = 'O'
    }
    this.setState({
        squareValue: squares,
        isX: !this.state.isX
    })
  }

  render() {
    return (
      <div className="board">
        <div className="row">
          {this.renderRow(0)}
          {this.renderRow(1)}
          {this.renderRow(2)}
        </div>
        <div className="row">
          {this.renderRow(3)}
          {this.renderRow(4)}
          {this.renderRow(5)}
        </div>
        <div className="row">
          {this.renderRow(6)}
          {this.renderRow(7)}
          {this.renderRow(8)}
        </div>
      </div>
    );
  }
}

export default Board;
