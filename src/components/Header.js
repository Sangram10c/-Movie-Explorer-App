
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';
import '../pages/Home.js';

function Header({ onSearch }) {
  return (
    
    <header className="header">
      <div className="left-section">

        <div className="imdb-logo">MExp</div>

        <button className="menu-btn">☰ Menu</button>


        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search Movies"
            className="search-input"
            onChange={(e) => onSearch(e.target.value)}

          />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <div className="right-section">
        <button className="nav-link pro">MExpro</button>
        <Link to="/favorites">
          <button className="nav-link ">Favorites </button>
        </Link>
        <button className="nav-link ">Watchlist </button>
        <button className="nav-link">Sign In</button>
        <select className="language-dropdown">
          <option>EN</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
