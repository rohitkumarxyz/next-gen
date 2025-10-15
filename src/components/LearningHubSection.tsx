import React from 'react';
import { Link } from 'react-router-dom';
import './LearningHubSection.css';

const LearningHubSection: React.FC = () => {
  const partners = [
    'BCG', 'Dell', 'Amazon', 'Vodafone', 'HP', 'Bosch', 'Mphasis', 'Airbus', 'PwC', 'Cisco'
  ];

  return (
    <section className="learning-hub-section">
      <div className="learning-hub-container">
        <div className="learning-hub-content">
          <div className="learning-hub-left">
            <h2 className="learning-hub-title">NextGenCampus Learning Hub+</h2>
            <p className="learning-hub-description">
              Self-learning, live virtual classes, 700+ courses, and industry-recognized certifications. 
              Everything you need to advance your career in one place.
            </p>
            <Link to="/courses" className="explore-hub-btn">Explore Learning Hub+</Link>
          </div>
          
          <div className="learning-hub-right">
            <div className="celebration-image">
              <div className="celebration-placeholder">
                <div className="people-group">
                  <div className="person person1"></div>
                  <div className="person person2"></div>
                  <div className="person person3"></div>
                </div>
                <div className="overlay-text">80%+</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="partner-companies">
          <div className="partner-title">Trusted by leading companies worldwide</div>
          <div className="companies-grid">
            {partners.map((company, index) => (
              <div key={index} className="company-logo">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningHubSection;
