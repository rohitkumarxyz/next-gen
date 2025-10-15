import React, { useState } from 'react';
import './AlumniSection.css';

const AlumniSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const imageTestimonial = {
    title: "Cracking a New Job as a Product Manager",
    author: "Pratishtha Thakur",
    image: "testimonial"
  };

  const textTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Data Scientist",
      company: "Amazon",
      image: "sarah",
      quote: "Simplilearn's program gave me the confidence to transition into data science. The hands-on projects were exactly what I needed."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Cloud Architect",
      company: "Jio",
      image: "michael",
      quote: "The cloud computing course was comprehensive and practical. I landed my dream job within 3 months of completion."
    }
  ];

  return (
    <section className="alumni-section">
      <div className="alumni-container">
        <h2 className="section-title">Hear from NextGenCampus Alumni at Top Companies</h2>
        
        <div className="alumni-content">
          <div className="image-testimonial">
            <div className="image-card">
              <div className="image-container">
                <div className={`image-placeholder ${imageTestimonial.image}`}>
                  <div className="nextgencampus-logo">NextGenCampus</div>
                </div>
              </div>
              <div className="image-info">
                <h3 className="image-title">{imageTestimonial.title}</h3>
                <p className="image-author">- {imageTestimonial.author}</p>
              </div>
            </div>
          </div>
          
          <div className="text-testimonials">
            <div className="testimonials-carousel">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="author-avatar">
                    <div className={`avatar ${textTestimonials[currentTestimonial].image}`}>
                      <div className="avatar-initial">
                        {textTestimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-text">
                    <blockquote className="quote">
                      "{textTestimonials[currentTestimonial].quote}"
                    </blockquote>
                    
                    <div className="author-info">
                      <div className="author-name">{textTestimonials[currentTestimonial].name}</div>
                      <div className="author-role">{textTestimonials[currentTestimonial].role}</div>
                      <div className="company-badge">{textTestimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="carousel-dots">
                {textTestimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
