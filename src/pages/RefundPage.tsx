import React from 'react';
import { RefreshCw, Clock, CheckCircle, AlertCircle, CreditCard, Shield, FileText } from 'lucide-react';
import './RefundPage.css';

const RefundPage: React.FC = () => {
  return (
    <div className="refund-page">
      {/* Hero Section */}
      <div className="refund-hero">
        <div className="refund-hero-content">
          <div className="refund-hero-icon">
            <div>
              <RefreshCw className="text-white" size={32} />
            </div>
          </div>
          <h1>
            Refund Policy
          </h1>
          <p>
            We want you to be completely satisfied with your learning experience. Here's our comprehensive refund policy.
          </p>
          <p className="last-updated">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="refund-content">
        <div className="refund-container">
          <div className="refund-card">
            <div className="refund-card-content">
                
                <section className="refund-section">
                  <div className="refund-section-header">
                    <div className="refund-section-icon green">
                      <Shield size={20} />
                    </div>
                    <h2>30-Day Money-Back Guarantee</h2>
                  </div>
                  <p>
                    We offer a 30-day money-back guarantee for all our courses. If you're not completely satisfied with your learning experience, you can request a full refund within 30 days of your enrollment.
                  </p>
                  <div className="refund-highlight-box">
                    <h3>What's Covered:</h3>
                    <ul>
                      <li>Full refund of course fees</li>
                      <li>No questions asked policy</li>
                      <li>Quick processing within 5-7 business days</li>
                      <li>Available for all course types</li>
                    </ul>
                  </div>
                </section>

                <section className="refund-section">
                  <div className="refund-section-header">
                    <div className="refund-section-icon blue">
                      <Clock size={20} />
                    </div>
                    <h2>Refund Timeline</h2>
                  </div>
                  <div className="refund-timeline-grid">
                    <div className="refund-timeline-item blue">
                      <div className="refund-timeline-number">1</div>
                      <h3>Request Submitted</h3>
                      <p>Submit your refund request through our support portal</p>
                    </div>
                    <div className="refund-timeline-item yellow">
                      <div className="refund-timeline-number">2</div>
                      <h3>Review Process</h3>
                      <p>Our team reviews your request within 24 hours</p>
                    </div>
                    <div className="refund-timeline-item green">
                      <div className="refund-timeline-number">3</div>
                      <h3>Refund Processed</h3>
                      <p>Refund credited to your account in 5-7 days</p>
                    </div>
                  </div>
                </section>

                <section className="refund-section">
                  <div className="refund-section-header">
                    <div className="refund-section-icon purple">
                      <CheckCircle size={20} />
                    </div>
                    <h2>Eligibility Requirements</h2>
                  </div>
                  <p>
                    To be eligible for a refund, please ensure you meet the following criteria:
                  </p>
                  <div className="refund-eligibility-list">
                    <div className="refund-eligibility-item">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4>Time Limit</h4>
                        <p>Request must be made within 30 days of enrollment</p>
                      </div>
                    </div>
                    <div className="refund-eligibility-item">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4>Course Access</h4>
                        <p>Less than 20% of course content accessed</p>
                      </div>
                    </div>
                    <div className="refund-eligibility-item">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4>No Certificate</h4>
                        <p>Certificate of completion not issued</p>
                      </div>
                    </div>
                    <div className="refund-eligibility-item">
                      <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4>Valid Reason</h4>
                        <p>Provide a valid reason for the refund request</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="refund-section">
                  <div className="refund-section-header">
                    <div className="refund-section-icon orange">
                      <AlertCircle size={20} />
                    </div>
                    <h2>Non-Refundable Items</h2>
                  </div>
                  <p>
                    The following items are not eligible for refunds:
                  </p>
                  <div className="refund-non-refundable">
                    <ul>
                      <li>Courses with more than 20% completion</li>
                      <li>Issued certificates of completion</li>
                      <li>Downloaded course materials</li>
                      <li>Live session recordings</li>
                      <li>One-on-one mentoring sessions already conducted</li>
                      <li>Custom corporate training programs</li>
                    </ul>
                  </div>
                </section>

                <section className="refund-section">
                  <div className="refund-section-header">
                    <div className="refund-section-icon indigo">
                      <CreditCard size={20} />
                    </div>
                    <h2>Refund Methods</h2>
                  </div>
                  <p>
                    Refunds will be processed using the same payment method used for the original purchase:
                  </p>
                  <div className="refund-methods-grid">
                    <div className="refund-method-item blue">
                      <h3>Credit/Debit Cards</h3>
                      <p>Refund will appear on your statement within 5-7 business days</p>
                    </div>
                    <div className="refund-method-item green">
                      <h3>UPI Payments</h3>
                      <p>Refund will be credited to your UPI account within 3-5 business days</p>
                    </div>
                    <div className="refund-method-item purple">
                      <h3>Net Banking</h3>
                      <p>Refund will be credited to your bank account within 5-7 business days</p>
                    </div>
                    <div className="refund-method-item orange">
                      <h3>Digital Wallets</h3>
                      <p>Refund will be credited to your wallet within 2-3 business days</p>
                    </div>
                  </div>
                </section>

                <section className="refund-section">
                  <div className="refund-section-header">
                    <div className="refund-section-icon teal">
                      <FileText size={20} />
                    </div>
                    <h2>How to Request a Refund</h2>
                  </div>
                  <p>
                    Follow these simple steps to request a refund:
                  </p>
                  <div className="refund-steps-list">
                    <div className="refund-step-item">
                      <div className="refund-step-number">1</div>
                      <div className="refund-step-content">
                        <h4>Contact Support</h4>
                        <p>Email us at info@nextgencampus.in or call +91-9555360325</p>
                      </div>
                    </div>
                    <div className="refund-step-item">
                      <div className="refund-step-number">2</div>
                      <div className="refund-step-content">
                        <h4>Provide Details</h4>
                        <p>Include your enrollment ID, course name, and reason for refund</p>
                      </div>
                    </div>
                    <div className="refund-step-item">
                      <div className="refund-step-number">3</div>
                      <div className="refund-step-content">
                        <h4>Wait for Confirmation</h4>
                        <p>Our team will review and process your request within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="refund-section">
                  <div className="refund-section-header">
                    <div className="refund-section-icon gray">
                      <AlertCircle size={20} />
                    </div>
                    <h2>Contact Information</h2>
                  </div>
                  <p>
                    For any questions about our refund policy or to request a refund, please contact us:
                  </p>
                  <div className="refund-contact-info">
                    <p>NextGenCampus Support Team</p>
                    <p>Email: info@nextgencampus.in</p>
                    <p>Phone: +91-9555360325</p>
                    <p>Address: 1016/2, Bhoor Colony, Opp. Sector 29, Faridabad, Haryana - 121002</p>
                    <p>Business Hours: Mon-Fri 9AM-6PM IST</p>
                  </div>
                </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPage;
