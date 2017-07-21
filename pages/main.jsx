import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Footer from '../components/footer';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <Icon />
          <Logo/>
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          <h2>Welcome to TicTacToe. Press Game menu to start playing..!</h2>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Main;
