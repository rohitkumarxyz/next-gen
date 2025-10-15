import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AwardsSection.css';

const AwardsSection: React.FC = () => {
  const [currentAward, setCurrentAward] = useState(0);

  const awards = [
    {
      id: 1,
      year: "2023 Gold Winner",
      title: "Best Online Learning Platform",
      description: "Recognized for excellence in online education delivery",
      badge: "gold"
    },
    {
      id: 2,
      year: "2023 Silver Winner",
      title: "Best Career Development Program",
      description: "Awarded for outstanding career advancement support",
      badge: "silver"
    },
    {
      id: 3,
      year: "2023 Bronze Winner",
      title: "Best Industry Partnership",
      description: "Recognized for strong industry collaborations",
      badge: "bronze"
    }
  ];

  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="section-title">Recognized by Top Industry Bodies</h2>
        
        <div className="awards-carousel">
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={award.id} className={`award-card ${index === currentAward ? 'active' : ''}`}>
                <div className="award-badge">
                  <div className={`badge-icon ${award.badge}`}>
                    <div className="badge-content">
                      {award.badge === 'gold' && '🥇'}
                      {award.badge === 'silver' && '🥈'}
                      {award.badge === 'bronze' && '🥉'}
                    </div>
                  </div>
                </div>
                
                <div className="award-content">
                  <div className="award-year">{award.year}</div>
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-description">{award.description}</p>
                  <Link to="/about" className="view-more-btn">View More</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-dots">
            {awards.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentAward ? 'active' : ''}`}
                onClick={() => setCurrentAward(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
