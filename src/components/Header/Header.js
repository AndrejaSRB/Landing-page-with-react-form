import React from "react";
import Logo from "../../assets/logo.png";

const Header = () => (
  <header className="header">
    <div className='logo'>
      <a href="https://www.greensettlements.com/">
        <img alt="Logo" src={Logo} />
      </a>
    </div>
    <div>The Life Settlement Experts</div>
  </header>
);

export default Header;
