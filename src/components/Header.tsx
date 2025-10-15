import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Bell, User, ChevronDown, Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-right">
          <ShoppingCart className="header-icon" />
          <Bell className="header-icon" />
          <User className="header-icon" />
        </div>
      </div>
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo" onClick={closeMobileMenu}>
              <span className="logo-text">NextGenCampus</span>
            </Link>
            <Link to="/courses" className="courses-btn desktop-only">
              Courses
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-right desktop-only">
            <Link to="/instructors" className="nav-link">Instructors</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="expert-btn">Talk to an Expert</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn mobile-only"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-content">
            {/* Close Button */}
            <div className="mobile-drawer-header">
              <button 
                className="mobile-drawer-close"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="mobile-nav-links">
              <Link to="/courses" className="mobile-nav-link" onClick={closeMobileMenu}>
                Courses
              </Link>
              <Link to="/instructors" className="mobile-nav-link" onClick={closeMobileMenu}>
                Instructors
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
                About Us
              </Link>
              <Link to="/blog" className="mobile-nav-link" onClick={closeMobileMenu}>
                Blog
              </Link>
              <Link to="/contact" className="mobile-nav-link expert" onClick={closeMobileMenu}>
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
      </nav>
    </header>
  );
};

export default Header;
