import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ]
    }
  }

nextPlayer() {
  if (this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL) {
    return this.state.PLAYER_TWO_SYMBOL
  } else {
    return this.state.PLAYER_ONE_SYMBOL
  }
}

handleClick(index) {
  if(this.state.board[index] === "" ) {
    this.state.board[index] = this.state.currentTurn
    this.setState({
      board: this.state.board,
      currentTurn: this.nextPlayer()
    })
  }
}

  render() {
    return (
      <div className="board">
        {this.state.board.map((cell, index) => {
          return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
        })}
      </div>
    )
  }

}

export default App;
