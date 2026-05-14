import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          🎬 <span className="logo-text">Cine<span className="logo-accent">Verse</span></span>
        </div>
        <p className="footer-text">
          Powered by <a href="https://www.omdbapi.com/" target="_blank" rel="noreferrer" className="footer-link">OMDB API</a>
          {' '}· Built with <span className="footer-heart">❤️</span> using React & Tailwind CSS
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} CineVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
