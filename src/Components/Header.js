import React from 'react';
import logo from '../Assets/logo.svg';

function Header() {
  return (
    <header className="nav">
      <div class="max-area nav-flex">
        <a class="nav-link" href="/">
            <img class="nav-logo" src="{logo}" height="64"></img>
            <h2 class="hdn">Dragon List</h2>
        </a>
        <div>
          <a class="nav-link" href="/create-dragon">New Dragon</a> |
          <a class="nav-link" href="/edit-dragon">Edit Area</a> |
          <button>Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
