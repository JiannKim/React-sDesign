import React from 'react';
import '../style/app.header.css';
import '../style/menu.motion.css';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="Tab-wrapper">
          <div id="menuToggle">
            {/* <!--
            A fake / hidden checkbox is used as click reciever,
            so you can use the :checked selector on it.
            --> */}
            <input type="checkbox" />
            
            {/* <!--
            Some spans to act as a hamburger.
            
            They are acting like a real hamburger,
            not that McDonalds stuff.
            --> */}
            <span></span>
            <span id="span"></span>
            <span></span>
            
            {/* <!--
            Too bad the menu has to be inside of the button
            but hey, it's pure CSS magic.
            --> */}
            <ul id="menu">
              <a href="#"><li>Pricing</li></a>
              <a href="#"><li>FAQ</li></a>
              <a href="#"><li>SFXHD</li></a>
              <a href="#"><li>Login</li></a>
              <a href="/"><li>Register</li></a>
            </ul>
          </div>
          {/* <button className="Tab-app-menu"><HiOutlineMenuAlt4 /></button> */}
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
