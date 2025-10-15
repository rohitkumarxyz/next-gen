import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Clock,  UserCircle } from 'lucide-react';
import './HeroSection.css';

// Import company logos
import googleLogo from '../assets/google.png';
import microsoftLogo from '../assets/microsoft.png';
import amazonLogo from '../assets/amazon.png';
import netflixLogo from '../assets/netflix.png';
import ibmLogo from '../assets/ibm.png';
import stanfordLogo from '../assets/stanford.png';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">Master Technology Skills with Expert-Led Courses</h1>
            <p className="hero-subtitle">
              Join thousands of learners advancing their careers with our comprehensive tech courses. 
              Learn from industry professionals and build real-world projects.
            </p>
            <div className="hero-features">
              <div className="feature-item">
                <Users size={20} />
                <span style={{color:"black"}}>50,000+ Students Enrolled</span>
              </div>
              <div className="feature-item">
                <Award size={20} />
                <span style={{color:"black"}}>Industry-Recognized Certificates</span>
              </div>
              <div className="feature-item">
                <Clock size={20} />
                <span style={{color:"black"}} >Flexible Learning Schedule</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/courses" className="btn-primary">
                Explore Courses
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                  <UserCircle size={20} />
                </Link>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="floating-card card-1">
                  <div className="card-icon">💻</div>
                  <div className="card-text">Full Stack Development</div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">🤖</div>
                  <div className="card-text">AI & Machine Learning</div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">☁️</div>
                  <div className="card-text">Cloud Computing</div>
                </div>
                <div className="hero-graphic">
                  <div className="laptop-screen">
                    <div className="screen-content">
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                      <div className="code-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="partner-logos">
          <div className="partner-title">Trusted by leading companies and universities</div>
          <div className="logos-container">
            <div className="partner-logo">
              <img src={googleLogo} alt="Google" />
            </div>
            <div className="partner-logo">
              <img src={microsoftLogo} alt="Microsoft" />
            </div>
            <div className="partner-logo">
              <img src={amazonLogo} alt="Amazon" />
            </div>
            <div className="partner-logo">
              <img src={netflixLogo} alt="Netflix" />
            </div>
            <div className="partner-logo">
              <img src={ibmLogo} alt="IBM" />
            </div>
            <div className="partner-logo">
              <img src={stanfordLogo} alt="Stanford" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
