import React from 'react';
import './RatingsSection.css';

const RatingsSection: React.FC = () => {
  return (
    <section className="ratings-section" aria-labelledby="ratings-heading">
      <div className="ratings-container">
        <h2 id="ratings-heading" className="section-title">Join 8 Million Learners Who Trust NextGenCampus</h2>

        <div className="ratings-grid" role="list">
          <div className="rating-card" role="listitem" aria-label="G2 rating">
            <div className="rating-logo g2-logo" aria-hidden>G2</div>
            <div className="rating-number">4.6</div>
            <div className="rating-stars" aria-hidden>★★★★☆</div>
            <div className="rating-meta">Based on 12k reviews</div>
          </div>

          <div className="rating-card" role="listitem" aria-label="Trustpilot rating">
            <div className="rating-logo trustpilot-logo" aria-hidden>Trustpilot</div>
            <div className="rating-number">4.5</div>
            <div className="rating-stars" aria-hidden>★★★★☆</div>
            <div className="rating-meta">Based on 9k reviews</div>
          </div>

          <div className="rating-card" role="listitem" aria-label="Course Report rating">
            <div className="rating-logo course-report-logo" aria-hidden>Course Report</div>
            <div className="rating-number">4.6</div>
            <div className="rating-stars" aria-hidden>★★★★☆</div>
            <div className="rating-meta">Based on 8k reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;
