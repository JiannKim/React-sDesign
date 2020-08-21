import React from 'react';
import '../style/app.header.css';

function Header() {
  return (
    <div>
      <header className="App-header">
          <a href="/">
            <img className="App-logo" src="https://i.ibb.co/3y3zRr3/s-Design-Logo-1.png" alt="s-Design-Logo-1" border="0" />
          </a>
          <div className="search-input">
            <img className="search-icon" src="https://i.ibb.co/5LmPhyS/serch-Icon.png" alt="serch-Icon" border="0" />
            <input type="text" placeholder="Search for sound effects"></input>
          </div>
          <div className="App-menu">
            <a href="/" target="blank" className="header-menu">Pricing</a>
            <a href="/" target="blank" className="header-menu">FAQ</a>
            <a href="/" target="blank" className="header-menu">SFXHD</a>
            <a href="/" target="blank" className="header-menu">Login/Register</a>
          </div>
      </header>
    </div>
  );
}

export default Header;
