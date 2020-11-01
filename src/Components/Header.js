import React from 'react';
import logo from '../Assets/logo.svg';
 
function Header() {
  return (
    <header className="nav">
      <div className="max-area nav-flex">
        <a className="nav-link" href="/">
            <img className="nav-logo" src={logo} height="64" alt="Dragon List - Logo"/>
            <h2 className="hdn">Dragon List</h2>
        </a>
        <div>
          <a className="nav-link" href="/create-dragon">New Dragon</a> |
          <a className="nav-link" href="/edit-dragon">Edit Area</a> |
          <button>Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
