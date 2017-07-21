'use strict';
import './node_modules/font-awesome/css/font-awesome.css';
import './style.less';

import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './tictactoe';

ReactDOM.render(<TicTacToe />, document.getElementById('tictactoe'));
