import React from 'react';
import Board from './board.js';
import DisplayTurn from './displayTurn.js';
class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currTurn: 'O'
    }
  }

  changeTurn () {
    if (this.state.currTurn === 'O') {
      this.setState({
        currTurn: 'X'
      })
    } else {
      this.setState({
        currTurn: 'O'
      })
    }
  }

  render() {
    return (
      <div>
        <Board currTurn={this.state.currTurn} changeTurn={this.changeTurn.bind(this)}/>
        <DisplayTurn currTurn={this.state.currTurn}/>
      </div>
    );
  }
}

export default App;