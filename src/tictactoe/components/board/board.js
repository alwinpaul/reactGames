import React, { Component } from "react";
import "./board.scss";
import Square from "./../squares/";

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }
  winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
  ];
  state = {
    squareValue: Array(9).fill(null),
    isX: true,
    winningIndex: Array(3).fill(null)
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

  checkForWinner(isX) {
    let playerValue = isX ? "X" : "O";
    let isWinner = false;
    debugger;
    for (let i = 0; i < this.winningCombos.length; i++) {
        const firstIndex = this.winningCombos[i][0];
        const secondIndex = this.winningCombos[i][1];
        const thirdIndex = this.winningCombos[i][2];
      if (
        this.state.squareValue[firstIndex] == playerValue &&
        this.state.squareValue[secondIndex] == playerValue &&
        this.state.squareValue[thirdIndex] == playerValue
      ) {
          const winnerIndexs = [firstIndex, secondIndex, thirdIndex];
          this.setState({
              winningIndex: winnerIndexs
          });
          isWinner = true;
          break;
      }
    };
    if(isWinner) {
        alert(playerValue + " Wins" )
    }
  }

  handleSquareClick(i) {
    const squares = this.state.squareValue.slice();
    if (this.state.isX) {
      squares[i] = "X";
    } else {
      squares[i] = "O";
    }
    this.setState({
      squareValue: squares
    });
    this.checkForWinner(this.state.isX);
    this.setState({
      isX: !this.state.isX
    });
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
