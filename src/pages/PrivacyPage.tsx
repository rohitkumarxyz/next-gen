import React from 'react';
import { Shield, Eye, Lock, Database, UserCheck, Globe, AlertCircle } from 'lucide-react';
import './PrivacyPage.css';

const PrivacyPage: React.FC = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <div className="privacy-hero">
        <div className="privacy-hero-content">
          <div className="privacy-hero-icon">
            <div>
              <Shield className="text-white" size={32} />
            </div>
          </div>
          <h1>
            Privacy Policy
          </h1>
          <p>
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="last-updated">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="privacy-content">
        <div className="privacy-container">
          <div className="privacy-card">
            <div className="privacy-card-content">
                
                <section className="privacy-section">
                  <div className="privacy-section-header">
                    <div className="privacy-section-icon blue">
                      <Eye size={20} />
                    </div>
                    <h2>1. Information We Collect</h2>
                  </div>
                  <p>
                    We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us for support.
                  </p>
                  <div className="privacy-highlight-box">
                    <h3>Personal Information:</h3>
                    <ul>
                      <li>Name and contact information (email, phone number)</li>
                      <li>Account credentials and profile information</li>
                      <li>Payment and billing information</li>
                      <li>Course progress and completion data</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                </section>

                <section className="privacy-section">
                  <div className="privacy-section-header">
                    <div className="privacy-section-icon green">
                      <Database size={20} />
                    </div>
                    <h2>2. How We Use Your Information</h2>
                  </div>
                  <p>
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul>
                    <li>Process course enrollments and payments</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Send important updates about your courses</li>
                    <li>Improve our platform and develop new features</li>
                    <li>Comply with legal obligations</li>
                    <li>Prevent fraud and ensure platform security</li>
                  </ul>
                </section>

                <section className="privacy-section">
                  <div className="privacy-section-header">
                    <div className="privacy-section-icon purple">
                      <Lock size={20} />
                    </div>
                    <h2>3. Information Sharing</h2>
                  </div>
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <div className="privacy-highlight-box">
                    <h3>Limited Sharing:</h3>
                    <ul>
                      <li>With service providers who assist in our operations</li>
                      <li>When required by law or to protect our rights</li>
                      <li>In case of business transfers or mergers</li>
                      <li>With your explicit consent</li>
                    </ul>
                  </div>
                </section>

                <section className="privacy-section">
                  <div className="privacy-section-header">
                    <div className="privacy-section-icon orange">
                      <Shield size={20} />
                    </div>
                    <h2>4. Data Security</h2>
                  </div>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <div className="privacy-grid">
                    <div className="privacy-grid-item">
                      <h4>Encryption</h4>
                      <p>All data is encrypted in transit and at rest</p>
                    </div>
                    <div className="privacy-grid-item">
                      <h4>Access Controls</h4>
                      <p>Limited access to authorized personnel only</p>
                    </div>
                    <div className="privacy-grid-item">
                      <h4>Regular Audits</h4>
                      <p>Continuous monitoring and security assessments</p>
                    </div>
                    <div className="privacy-grid-item">
                      <h4>Secure Payments</h4>
                      <p>PCI DSS compliant payment processing</p>
                    </div>
                  </div>
                </section>

                <section className="privacy-section">
                  <div className="privacy-section-header">
                    <div className="privacy-section-icon indigo">
                      <UserCheck size={20} />
                    </div>
                    <h2>5. Your Rights</h2>
                  </div>
                  <p>
                    You have certain rights regarding your personal information:
                  </p>
                  <div className="privacy-rights-list">
                    <div className="privacy-right-item">
                      <div className="privacy-right-number">1</div>
                      <div className="privacy-right-content">
                        <h4>Access</h4>
                        <p>Request a copy of your personal data</p>
                      </div>
                    </div>
                    <div className="privacy-right-item">
                      <div className="privacy-right-number">2</div>
                      <div className="privacy-right-content">
                        <h4>Correction</h4>
                        <p>Update or correct inaccurate information</p>
                      </div>
                    </div>
                    <div className="privacy-right-item">
                      <div className="privacy-right-number">3</div>
                      <div className="privacy-right-content">
                        <h4>Deletion</h4>
                        <p>Request deletion of your personal data</p>
                      </div>
                    </div>
                    <div className="privacy-right-item">
                      <div className="privacy-right-number">4</div>
                      <div className="privacy-right-content">
                        <h4>Portability</h4>
                        <p>Export your data in a machine-readable format</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="privacy-section">
                  <div className="privacy-section-header">
                    <div className="privacy-section-icon teal">
                      <Globe size={20} />
                    </div>
                    <h2>6. Cookies and Tracking</h2>
                  </div>
                  <p>
                    We use cookies and similar technologies to enhance your experience on our platform:
                  </p>
                  <div className="privacy-highlight-box">
                    <h3>Cookie Types:</h3>
                    <ul>
                      <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                      <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                      <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                      <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                    </ul>
                  </div>
                </section>

                <section className="privacy-section">
                  <div className="privacy-section-header">
                    <div className="privacy-section-icon red">
                      <AlertCircle size={20} />
                    </div>
                    <h2>7. Contact Information</h2>
                  </div>
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="privacy-contact-info">
                    <p>NextGenCampus</p>
                    <p>Email: info@nextgencampus.in</p>
                    <p>Phone: +91-9555360325</p>
                    <p>Address: 1016/2, Bhoor Colony, Opp. Sector 29, Faridabad, Haryana - 121002</p>
                    <p>Company: Mdm madhubani technologies pvt ltd</p>
                  </div>
                </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;