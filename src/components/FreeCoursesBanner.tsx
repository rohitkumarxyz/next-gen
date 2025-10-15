import React from 'react';
import { Link } from 'react-router-dom';
import './FreeCoursesBanner.css';

const FreeCoursesBanner: React.FC = () => {
  return (
    <section className="free-courses-banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-left">
            <h2 className="banner-title">Level Up Your Skillset with Free, Industry Focused Courses</h2>
            <Link to="/courses" className="explore-courses-btn">Explore Free Courses</Link>
          </div>
          
          <div className="banner-right">
            <div className="banner-image">
              <div className="image-placeholder">
                <div className="people-group">
                  <div className="person person1"></div>
                  <div className="person person2"></div>
                </div>
                <div className="laptop-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeCoursesBanner;
