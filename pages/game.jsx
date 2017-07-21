import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Game from '../components/game';
import Footer from '../components/footer';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header-game">
          <Icon />
          <Logo name=" - Lets Play...!" />
        </header>
        <nav className="navigation-game">
          <Menu />
        </nav>
        <main className="content">
          <Game />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Main;
