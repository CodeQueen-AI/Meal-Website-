import React from "react";
import './page.css'

const Header = () => {
  return (
    <header>
      <div className="logo">M</div>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
      </ul>
      <div className="icon">
        <button className="login">Contact</button>
      </div>
    </header>
  );
};
export default Header;
