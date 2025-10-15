import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">About</h3>
            <ul className="footer-links">
              <li><Link to="/about">Who we are</Link></li>
              <li><Link to="/about">Our mission</Link></li>
              <li><Link to="/about">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Courses</h3>
            <ul className="footer-links">
              <li><Link to="/courses">All courses</Link></li>
              <li><Link to="/courses">Data Science</Link></li>
              <li><Link to="/courses">AI &amp; ML</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links">
              <li><a href="tel:+919555360325">+91-9555360325</a></li>
              <li><a href="mailto:info@nextgencampus.in">info@nextgencampus.in</a></li>
              <li><Link to="/contact">Contact form</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="social-links" aria-label="Follow us on social media">
              <a href="#" className="social-link" aria-label="Facebook" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <span>Mon–Fri: 9am–6pm</span>
              </div>
            </div>

            <div className="legal-links">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© 2025 Mdm madhubani technologies pvt ltd All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
