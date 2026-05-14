import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="logo-icon">🎬</span>
          <span className="logo-text">
            Cine<span className="logo-accent">Verse</span>
          </span>
        </div>
        <div className="navbar-tagline">Discover Your Next Favorite Film</div>
      </div>
    </nav>
  );
};

export default Navbar;
