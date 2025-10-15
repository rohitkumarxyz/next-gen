import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import './ProgramsSection.css';

// Import company logos
import googleLogo from '../assets/google.png';
import microsoftLogo from '../assets/microsoft.png';
import amazonLogo from '../assets/amazon.png';
import netflixLogo from '../assets/netflix.png';
import ibmLogo from '../assets/ibm.png';
import stanfordLogo from '../assets/stanford.png';

const ProgramsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Top Programs');

  const categories = [
    'Top Programs',
    'Data Science',
    'AI & Machine Learning',
    'Cyber Security',
    'Cloud Computing',
    'Digital Marketing',
    'Project Management',
    'Business Analytics'
  ];

  // Use the first 2 courses from the actual courses data
  const programs = courses.slice(0, 2).map(course => ({
    id: course.id,
    title: course.title,
    description: course.description,
    duration: course.duration,
    university: course.university,
    company: course.company,
    image: course.image,
    features: course.features
  }));

  return (
    <section className="programs-section">
      <div className="programs-container">
        <div className="section-header">
          <h2 className="section-title">Why Our Programs Stand Out</h2>
          <p className="section-subtitle">
            Industry-leading programs designed with top companies to give you the skills that matter most in today's job market
          </p>
        </div>
        
        <div className="programs-content">
          <div className="programs-sidebar">
            <h3 className="sidebar-title">Browse by Category</h3>
            <div className="sidebar-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  <span className="category-text">{category}</span>
                  <span className="category-count">
                    {category === 'Top Programs' 
                      ? courses.length 
                      : courses.filter(c => c.category.toLowerCase().includes(category.toLowerCase())).length
                    }
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="programs-main">
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-image">
                  <div className={`image-placeholder ${program.image}`}>
                      <div className="image-overlay"></div>
                      <div className="university-badge">
                        {program.company && (
                          <img 
                            src={
                              program.company === 'google' ? googleLogo :
                              program.company === 'microsoft' ? microsoftLogo :
                              program.company === 'amazon' ? amazonLogo :
                              program.company === 'netflix' ? netflixLogo :
                              program.company === 'ibm' ? ibmLogo :
                              program.company === 'stanford' ? stanfordLogo : ''
                            }
                            alt={program.university}
                            className="company-logo"
                          />
                        )}
                        <span className="university-name">{program.university}</span>
                      </div>
                      <div className="program-badges">
                        <span className="popular-badge">Popular</span>
                        <span className="new-badge">New</span>
                      </div>
                    </div>
                </div>
                <div className="program-content">
                    <div className="program-header">
                  <h3 className="program-title">{program.title}</h3>
                      <div className="program-rating">
                        <div className="stars">★★★★★</div>
                        <span className="rating-text">4.8 (2,341 reviews)</span>
                      </div>
                    </div>
                    
                  <p className="program-description">{program.description}</p>
                    
                    {program.features && (
                      <div className="program-features">
                        {program.features.map((feature, index) => (
                          <span key={index} className="feature-badge">
                            <span className="feature-icon">✓</span>
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="program-footer">
                      <div className="program-duration">
                        <span className="duration-icon">⏱️</span>
                        {program.duration}
                      </div>
                      <Link to={`/course/${program.id}`} className="view-program-btn">
                        <span>View Program</span>
                        <span className="btn-arrow">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="view-all-container">
              <Link to="/courses" className="view-all-btn">
                <span>View All Programs</span>
                <span className="btn-arrow">→</span>
              </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
