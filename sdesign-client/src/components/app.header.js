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
            <input type="checkbox" />
            
            {/* 
             햄버거 메뉴 버튼을 만드는 스펜태그 가운데 스펜은
             보이지 않게 한다.
            */}
            <span></span>
            {/* 가운데스펜 없는척 */}
            <span id="hiddenSpan"></span>
            <span></span>
            
            {/* 
             버튼이 체크되면 나타나는 메뉴박스
            */}
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
        </div>
        <div className="search-input">
          <img className="search-icon" src="https://i.ibb.co/5LmPhyS/serch-Icon.png" alt="serch-Icon" />
          <input type="text" placeholder="Search for sound effects"></input>
        </div>
          <ul className="App-menu">
            <a href="/" target="blank" className="header-menu"><li>Pricing</li></a>
            <a href="/" target="blank" className="header-menu"><li>FAQ</li></a>
            <a href="/" target="blank" className="header-menu"><li>SFXHD</li></a>
            <a href="/" target="blank" className="header-menu"><li>Login/Register</li></a>
          </ul>
      </header>
    </div>
  );
}

export default Header;
