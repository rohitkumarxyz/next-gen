import React from 'react';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Cutting-edge Curriculum",
      description: "Stay ahead with industry-relevant content designed by experts",
      image: "curriculum"
    },
    {
      id: 2,
      title: "Taught Live by Industry Experts",
      description: "Learn from professionals who work at top companies",
      image: "experts"
    },
    {
      id: 3,
      title: "Hands-On Projects to Get Job Ready",
      description: "Build real-world projects that showcase your skills",
      image: "projects"
    },
    {
      id: 4,
      title: "Dedicated Career Guidance",
      description: "Get personalized support for your career journey",
      image: "guidance"
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="section-title">Why Our Programs Stand Out</h2>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-image">
                <div className={`image-placeholder ${feature.image}`}>
                  <div className="feature-icon"></div>
                </div>
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
