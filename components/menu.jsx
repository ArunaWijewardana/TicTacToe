import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {
  render() {
    return (
      <div className="navigation-core">
        <div className="navigation-item"><Link to="/">Home</Link></div>
        <div className="navigation-item"><Link to="/game">Game</Link></div>
        <div className="navigation-item"><Link to="/about">About</Link></div>
      </div>
    );
  }
}

export default Menu;
