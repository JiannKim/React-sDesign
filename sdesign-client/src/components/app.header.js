import React from 'react';
import '../style/app.header.css';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="Tab-wrapper">
          <button className="Tab-app-menu"><HiOutlineMenuAlt4 /></button>
          <a href="/">
            <img className="App-logo" src="https://i.ibb.co/FVRcqBh/s-Design-Logo.png" alt="s-Design-Logo" />
          </a>
          <button href="/" className="Tab-icon-BeSearch"><BsSearch /></button>
        </div>
          <div className="search-input">
            <img className="search-icon" src="https://i.ibb.co/5LmPhyS/serch-Icon.png" alt="serch-Icon" />
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
