import React, { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Data Scientist",
      company: "TechCorp",
      image: "person1",
      quote: "Simplilearn's Data Science program transformed my career. The hands-on projects and expert guidance helped me land my dream job at a top tech company.",
      companies: ["NIIT", "Telus International"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Digital Marketing Manager",
      company: "MarketingPro",
      image: "person2",
      quote: "The Digital Marketing course gave me all the skills I needed to excel in my field. The live classes and real-world projects were incredibly valuable.",
      companies: ["Amazon", "Google"]
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Cloud Engineer",
      company: "CloudTech",
      image: "person3",
      quote: "Simplilearn's Cloud Computing program helped me transition from traditional IT to cloud technologies. The certification opened many doors for me.",
      companies: ["Microsoft", "AWS"]
    }
  ];

  const stats = [
    { number: "80%", label: "Career growth" },
    { number: "4.8/5", label: "Learner rating" },
    { number: "50%+", label: "Average salary hike" }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">Real Stories, Incredible Journeys</h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-carousel">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-image">
                <div className={`person-avatar ${testimonials[currentTestimonial].image}`}>
                  <div className="avatar-placeholder"></div>
                </div>
              </div>
              
              <div className="testimonial-text">
                <blockquote className="testimonial-quote">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{testimonials[currentTestimonial].name}</div>
                    <div className="author-role">{testimonials[currentTestimonial].role}</div>
                  </div>
                  
                  <div className="company-logos">
                    {testimonials[currentTestimonial].companies.map((company, index) => (
                      <div key={index} className="company-logo">{company}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
