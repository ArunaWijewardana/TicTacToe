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
          <Logo name="Page not found - 404" />
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
          Page not found.
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Main;
