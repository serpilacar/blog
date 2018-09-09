import React from 'react';
import avatar from '../assets/img/avatar.jpg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <a href="/" className="navbar-item site-title">
          <img src={avatar} />
          <h1>Serpil Acar</h1>
        </a>
      </div>
      
    </div>
  </nav>
)

export default Navbar;
