import React from 'react';
import '../style/app.header.css';
import '../style/menu.motion.css';
import '../style/search.motion.css';
import { BsSearch } from 'react-icons/bs';

function Header() {
  return (
    <div>
      <header className="App-header">
        <div className="Tab-wrapper">
          <nav id="menuToggle">
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
            {/* 가운데스펜 없는척 */}
            <span id="hiddenSpan"></span>
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
          </nav>
          <a href="/">
            <img className="App-logo" src="https://i.ibb.co/FVRcqBh/s-Design-Logo.png" alt="s-Design-Logo" />
          </a>
          <div id="searchToggle">
            <input type="checkbox" className="search-bnt" />
            <BsSearch className="Tab-icon-BeSearch" />
            
            <div id="search">
              <span>
                <img src="https://i.ibb.co/5LmPhyS/serch-Icon.png" alt="serch-Icon" />
              </span>
              <input type="text" placeholder="Search for sound effects" />
            </div>
          </div>
          {/* <button href="/" className="Tab-icon-BeSearch"><BsSearch /></button> */}
        </div>
        <div className="search-input">
          <img className="search-icon" src="https://i.ibb.co/5LmPhyS/serch-Icon.png" alt="serch-Icon" />
          <input type="text" placeholder="Search for sound effects"></input>
        </div>
        <nav>
          <ul className="App-menu">
            <a href="/" target="blank" className="header-menu"><li>Pricing</li></a>
            <a href="/" target="blank" className="header-menu"><li>FAQ</li></a>
            <a href="/" target="blank" className="header-menu"><li>SFXHD</li></a>
            <a href="/" target="blank" className="header-menu"><li>Login/Register</li></a>
            {/* <a href="/" target="blank" className="header-menu">FAQ</a>
            <a href="/" target="blank" className="header-menu">SFXHD</a>
            <a href="/" target="blank" className="header-menu">Login/Register</a> */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
