import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import "./index.css";  // custom styles here

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header shadow fixed-top">
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Logo */}
        <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="header-logo">
          <img src={Logo} alt="Logo" />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="d-none d-md-flex header-nav justify-content-center flex-grow-1">
          <a href="#about" className="nav-link mx-4">About</a>
          <a href="#skills" className="nav-link mx-4">Skills</a>
          <a href="#projects" className="nav-link mx-4">Projects</a>
        </nav>

        {/* CTA Button */}
        <div className="d-none d-md-block">
        <a href="#contact" className="cta-button">
            Let’s Collaborate
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="btn d-md-none hamburger-btn" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle menu"
        >
          <div className={`hamburger-icon ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mobile-menu d-md-none bg-white shadow p-3">
          <a href="#about" className="mobile-nav-link mb-2" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="mobile-nav-link mb-2" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="mobile-nav-link mb-2" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="cta-button w-100" id="hamburger-cta" onClick={() => setMenuOpen(false)}>Let’s Collaborate</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
