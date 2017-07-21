import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Main from './pages/main';
import About from './pages/about';
import Game from './pages/game';
import Err from './pages/error';

class TicTacToe extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main} />
        <Route path='/game' component={Game} />
        <Route path='/about' component={About} />
        <Route path='/*' component={Err} />
      </Router>
    );
  }
}

export default TicTacToe;
