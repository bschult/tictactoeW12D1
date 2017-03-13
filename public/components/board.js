import React from 'react';

class Board extends React.Component {  
  constructor (props) {
    super(props);
    this.state = {
      topLeft: '',
      topMid: '',
      topRight: '',
      midLeft: '',
      mid: '',
      midRight: '',
      bottomLeft: '',
      bottomMid: '',
      bottomRight: '',
      winner: '',
    }
    this.makeMove.bind(this);
  }

  makeMove (position) {
    if (this.state[position] === '' && this.state.winner === '') {
      this.setState({
        [position]: this.props.currTurn
      }, ()=>{this.checkIfWon(this.props.currTurn)})
    }
  }

  checkIfWon (piece) {
    var winningMessage = 'The winner are the: ' + piece + '\'s';
    //ROWS
    if (this.state.topLeft === piece && this.state.topMid === piece && this.state.topRight === piece) {
      this.setState({
        winner: winningMessage
      })
    }
    if (this.state.midLeft === piece && this.state.mid === piece && this.state.midRight === piece) {
      this.setState({
        winner: winningMessage
      })
    }
    if (this.state.bottomLeft === piece && this.state.bottomMid === piece && this.state.bottomRight === piece) {
      this.setState({
        winner: winningMessage
      })
    }
    //DIAGONALS
    if (this.state.topLeft === piece && this.state.mid === piece && this.state.bottomRight === piece) {
      this.setState({
        winner: winningMessage
      })
    }
    if (this.state.topRight === piece && this.state.mid === piece && this.state.bottomLeft === piece) {
      this.setState({
        winner: winningMessage
      })
    }
    //COLUMNS
    if (this.state.topLeft === piece && this.state.midLeft === piece && this.state.bottomLeft === piece) {
      this.setState({
        winner: winningMessage
      })
    }
    if (this.state.topMid === piece && this.state.mid === piece && this.state.bottomMid === piece) {
      this.setState({
        winner: winningMessage
      })
    }
    if (this.state.topRight === piece && this.state.midRight === piece && this.state.bottomRight === piece) {
      this.setState({
        winner: winningMessage
      })
    }
    this.props.changeTurn();
  }

  resetBoard () {
    this.setState({
      topLeft: '',
      topMid: '',
      topRight: '',
      midLeft: '',
      mid: '',
      midRight: '',
      bottomLeft: '',
      bottomMid: '',
      bottomRight: '',
      winner: '',
    })
  }

  render() {
    return (
      <div>
        <div className='topRow'>
          <button onClick={() => {this.makeMove('topLeft')}}>{this.state.topLeft}</button>
          <span>|</span>
          <button onClick={() => {this.makeMove('topMid')}}>{this.state.topMid}</button>
          <span>|</span>
          <button onClick={() => {this.makeMove('topRight')}}>{this.state.topRight}</button>
        </div>
        <div className='midRow'>
          <button onClick={() => {this.makeMove('midLeft')}}>{this.state.midLeft}</button>
          <span>|</span>
          <button onClick={() => {this.makeMove('mid')}}>{this.state.mid}</button>
          <span>|</span>
          <button onClick={() => {this.makeMove('midRight')}}>{this.state.midRight}</button>
        </div>
        <div className='botRow'>
          <button onClick={() => {this.makeMove('bottomLeft')}}>{this.state.bottomLeft}</button>
          <span>|</span>
          <button onClick={() => {this.makeMove('bottomMid')}}>{this.state.bottomMid}</button>
          <span>|</span>
          <button onClick={() => {this.makeMove('bottomRight')}}>{this.state.bottomRight}</button>
        </div>
        <button onClick={this.resetBoard.bind(this)}>RESET BOARD</button>
        <div>{this.state.winner}</div>
      </div>
    );
  }
}

export default Board;