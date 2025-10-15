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
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links">
              <li><a href="tel:+919555360325">+91-9555360325</a></li>
              <li><a href="mailto:info@nextgencampus.in">info@nextgencampus.in</a></li>
              <li className="text-gray-300 text-sm leading-relaxed">
                1016/2, Bhoor Colony,<br />
                Opp. Sector 29, Faridabad,<br />
                Haryana - 121002
              </li>
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
              <Link to="/courses">Browse Courses</Link>
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
