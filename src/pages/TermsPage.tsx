import React from 'react';
import { Shield, FileText, AlertCircle, Users, CreditCard, Globe } from 'lucide-react';
import './TermsPage.css';

const TermsPage: React.FC = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <div className="terms-hero">
        <div className="terms-hero-content">
          <div className="terms-hero-icon">
            <div>
              <FileText className="text-white" size={32} />
            </div>
          </div>
          <h1>
            Terms & Conditions
          </h1>
          <p>
            Please read these terms and conditions carefully before using our services. By accessing or using NextGenCampus, you agree to be bound by these terms.
          </p>
          <p className="last-updated">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="terms-content">
        <div className="terms-container">
          <div className="terms-card">
            <div className="terms-card-content">
                
                <section className="terms-section">
                  <div className="terms-section-header">
                    <div className="terms-section-icon blue">
                      <Shield size={20} />
                    </div>
                    <h2>1. Acceptance of Terms</h2>
                  </div>
                  <p>
                    By accessing and using NextGenCampus ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p>
                    These Terms of Service apply to all visitors, users, and others who access or use the Service.
                  </p>
                </section>

                <section className="terms-section">
                  <div className="terms-section-header">
                    <div className="terms-section-icon green">
                      <Users size={20} />
                    </div>
                    <h2>2. User Accounts</h2>
                  </div>
                  <p>
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times.
                  </p>
                  <p>
                    You are responsible for safeguarding the password and for all activities that occur under your account.
                  </p>
                  <p>
                    You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                  </p>
                </section>

                <section className="terms-section">
                  <div className="terms-section-header">
                    <div className="terms-section-icon purple">
                      <CreditCard size={20} />
                    </div>
                    <h2>3. Payment and Refunds</h2>
                  </div>
                  <p>
                    All course fees are payable in advance. We accept major credit cards, debit cards, and other payment methods as specified on our payment page.
                  </p>
                  <p>
                    Refunds are subject to our Refund Policy, which is available separately on our website.
                  </p>
                  <p>
                    We reserve the right to change our pricing at any time, but any price changes will not affect existing enrollments.
                  </p>
                </section>

                <section className="terms-section">
                  <div className="terms-section-header">
                    <div className="terms-section-icon orange">
                      <Globe size={20} />
                    </div>
                    <h2>4. Intellectual Property</h2>
                  </div>
                  <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of NextGenCampus and its licensors.
                  </p>
                  <p>
                    Course materials, including but not limited to videos, documents, and assessments, are protected by copyright and other intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, or create derivative works of our content without explicit written permission.
                  </p>
                </section>

                <section className="terms-section">
                  <div className="terms-section-header">
                    <div className="terms-section-icon red">
                      <AlertCircle size={20} />
                    </div>
                    <h2>5. Prohibited Uses</h2>
                  </div>
                  <p>You may not use our Service:</p>
                  <ul>
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                  </ul>
                </section>

                <section className="terms-section">
                  <div className="terms-section-header">
                    <div className="terms-section-icon indigo">
                      <Shield size={20} />
                    </div>
                    <h2>6. Limitation of Liability</h2>
                  </div>
                  <p>
                    In no event shall NextGenCampus, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
                  <p>
                    Our total liability to you for all damages shall not exceed the amount you paid us for the Service in the 12 months preceding the claim.
                  </p>
                </section>

                <section className="terms-section">
                  <div className="terms-section-header">
                    <div className="terms-section-icon teal">
                      <FileText size={20} />
                    </div>
                    <h2>7. Changes to Terms</h2>
                  </div>
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                  </p>
                  <p>
                    If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p>
                    Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                  </p>
                </section>

                <section className="terms-section">
                  <div className="terms-section-header">
                    <div className="terms-section-icon gray">
                      <AlertCircle size={20} />
                    </div>
                    <h2>8. Contact Information</h2>
                  </div>
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="terms-contact-info">
                    <p>NextGenCampus</p>
                    <p>Email: info@nextgencampus.in</p>
                    <p>Phone: +91-9555360325</p>
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

export default TermsPage;
