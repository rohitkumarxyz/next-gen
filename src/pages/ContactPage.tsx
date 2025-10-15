import React, { useState } from 'react';
import { Mail, Phone, Clock, Send, User, MessageSquare, Building } from 'lucide-react';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Our expert will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Talk to an Expert</h1>
            <p>Get personalized guidance from our tech education experts. We're here to help you choose the right course and accelerate your learning journey.</p>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Our team of education experts is ready to help you succeed. Reach out to us through any of the channels below.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-content">
                    <h3>Phone</h3>
                    <p>+91-9555360325</p>
                    <span>Mon-Fri 9AM-6PM EST</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <p>info@nextgencampus.in</p>
                    <span>Response within 24 hours</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Clock size={24} />
                  </div>
                  <div className="method-content">
                    <h3>Live Chat</h3>
                    <p>Available 24/7</p>
                    <span>Instant expert support</span>
                  </div>
                </div>
              </div>

              <div className="expert-stats">
                <h3>Why Choose Our Experts?</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50K+</div>
                    <div className="stat-label">Students Helped</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <div className="contact-form-card">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and our expert will get back to you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">
                      <Building size={16} />
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      <MessageSquare size={16} />
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="course-recommendation">Course Recommendation</option>
                      <option value="career-guidance">Career Guidance</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <MessageSquare size={16} />
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
