import React from 'react';
import './Header.css'; // 引入横幅样式
import logo from './logo.png'; // 引入logo

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="Logo" className="header-logo" />
      <div className="header-text">Spartan Light Metal Products Makerspace</div>
    </div>
  );
};

export default Header;
