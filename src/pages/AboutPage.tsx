import React from 'react';
import { Users, Award, Globe, Target, CheckCircle, TrendingUp } from 'lucide-react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About NextGenCampus</h1>
          <p>Empowering learners worldwide with cutting-edge technology education</p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                At NextGenCampus, we believe that quality education should be accessible to everyone. 
                Our mission is to bridge the gap between traditional education and the rapidly evolving 
                technology landscape by providing comprehensive, industry-relevant courses taught by 
                world-class instructors.
              </p>
              <p>
                We're committed to helping learners develop the skills they need to succeed in today's 
                digital economy, whether they're just starting their journey or looking to advance 
                their careers.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder mission"></div>
            </div>
          </div>

          <div className="stats-section">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <Users size={48} />
                <h3>50,000+</h3>
                <p>Students Enrolled</p>
              </div>
              <div className="stat-card">
                <Award size={48} />
                <h3>25,000+</h3>
                <p>Certificates Issued</p>
              </div>
              <div className="stat-card">
                <Globe size={48} />
                <h3>150+</h3>
                <p>Countries Reached</p>
              </div>
              <div className="stat-card">
                <TrendingUp size={48} />
                <h3>95%</h3>
                <p>Job Placement Rate</p>
              </div>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <Target size={32} />
                </div>
                <h3>Excellence</h3>
                <p>We maintain the highest standards in our curriculum, instructors, and learning experience.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <Users size={32} />
                </div>
                <h3>Accessibility</h3>
                <p>Quality education should be available to everyone, regardless of their background or location.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <CheckCircle size={32} />
                </div>
                <h3>Practical Learning</h3>
                <p>Our courses focus on real-world applications and hands-on experience.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <TrendingUp size={32} />
                </div>
                <h3>Innovation</h3>
                <p>We continuously evolve our content to stay current with industry trends and technologies.</p>
              </div>
            </div>
          </div>

          <div className="team-section">
            <h2>Leadership Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder ceo">JD</div>
                </div>
                <h3>John Davis</h3>
                <p className="member-title">CEO & Founder</p>
                <p className="member-bio">
                  Former Google engineer with 15+ years of experience in technology education and product development.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder cto">SM</div>
                </div>
                <h3>Sarah Miller</h3>
                <p className="member-title">Chief Technology Officer</p>
                <p className="member-bio">
                  Technology leader with expertise in scalable learning platforms and educational technology.
                </p>
              </div>
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder cfo">MJ</div>
                </div>
                <h3>Michael Johnson</h3>
                <p className="member-title">Chief Financial Officer</p>
                <p className="member-bio">
                  Financial strategist with experience in edtech startups and global education markets.
                </p>
              </div>
            </div>
          </div>

          <div className="partners-section">
            <h2>Trusted Partners</h2>
            <p>We collaborate with leading technology companies and educational institutions</p>
            <div className="partners-grid">
              <div className="partner-logo">Google</div>
              <div className="partner-logo">Microsoft</div>
              <div className="partner-logo">Amazon Web Services</div>
              <div className="partner-logo">IBM</div>
              <div className="partner-logo">Netflix</div>
              <div className="partner-logo">Stanford University</div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Join thousands of students who have transformed their careers with NextGenCampus</p>
            <div className="cta-buttons">
              <button className="btn-primary">Browse Courses</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
