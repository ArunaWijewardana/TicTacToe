import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <h1 className="tictactoe-logo">TicTacToe {this.props.name}</h1>
      </div>
    );
  }
}

export default Logo;
