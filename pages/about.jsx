import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Footer from '../components/footer';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header-about">
          <Icon />
          <Logo name="- About" />
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content-about">
          TicTacToe is the traditional fun game. Try to get three X or O s on vertically or horizontally or diagonally. Pic a friend and play.
          <br /><br />
          Enjoy...!
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Main;
