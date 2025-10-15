import React from 'react';
import { AlertTriangle, FileText, Shield, Users, Globe, AlertCircle } from 'lucide-react';
import './DisclaimerPage.css';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="disclaimer-page">
      {/* Hero Section */}
      <div className="disclaimer-hero">
        <div className="disclaimer-hero-content">
          <div className="disclaimer-hero-icon">
            <div>
              <AlertTriangle className="text-white" size={32} />
            </div>
          </div>
          <h1>
            Disclaimer
          </h1>
          <p>
            Important information about the use of our platform, services, and educational content.
          </p>
          <p className="last-updated">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="disclaimer-content">
        <div className="disclaimer-container">
          <div className="disclaimer-card">
            <div className="disclaimer-card-content">
                
                <section className="disclaimer-section">
                  <div className="disclaimer-section-header">
                    <div className="disclaimer-section-icon orange">
                      <FileText size={20} />
                    </div>
                    <h2>General Disclaimer</h2>
                  </div>
                  <p>
                    The information provided on NextGenCampus and through our courses is for general educational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on our platform.
                  </p>
                  <div className="disclaimer-highlight-box">
                    <h3>Important Notice:</h3>
                    <p>
                      Any reliance you place on such information is therefore strictly at your own risk. In no event will NextGenCampus be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of our platform.
                    </p>
                  </div>
                </section>

                <section className="disclaimer-section">
                  <div className="disclaimer-section-header">
                    <div className="disclaimer-section-icon blue">
                      <Users size={20} />
                    </div>
                    <h2>Educational Content Disclaimer</h2>
                  </div>
                  <p>
                    Our courses and educational materials are designed to provide general knowledge and skills in various technology fields. However, please note the following:
                  </p>
                  <div className="disclaimer-content-box">
                    <h3>Course Content:</h3>
                    <ul>
                      <li>Course materials are for educational purposes only</li>
                      <li>Content may not reflect the most current industry practices</li>
                      <li>Individual results may vary based on effort and application</li>
                      <li>We do not guarantee job placement or career advancement</li>
                    </ul>
                  </div>
                  <div className="disclaimer-content-box">
                    <h3>Certificates:</h3>
                    <ul>
                      <li>Certificates indicate course completion, not professional certification</li>
                      <li>Industry recognition may vary by employer and region</li>
                      <li>Additional professional certifications may be required for certain roles</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Shield className="text-green-600" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Third-Party Content</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      Our platform may contain links to third-party websites, tools, or services that are not owned or controlled by NextGenCampus:
                    </p>
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-green-800 mb-3">Third-Party Services:</h3>
                      <ul className="list-disc list-inside space-y-2 text-green-700">
                        <li>We have no control over third-party content or services</li>
                        <li>We assume no responsibility for third-party websites or services</li>
                        <li>Your use of third-party services is at your own risk</li>
                        <li>Third-party terms and conditions apply to their services</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Globe className="text-purple-600" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Platform Availability</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      While we strive to maintain continuous platform availability, we cannot guarantee uninterrupted access:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-purple-800 mb-3">Scheduled Maintenance</h3>
                        <p className="text-purple-700 text-sm">We may perform scheduled maintenance that temporarily affects platform access</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-red-800 mb-3">Technical Issues</h3>
                        <p className="text-red-700 text-sm">Unforeseen technical issues may cause temporary service interruptions</p>
                      </div>
                      <div className="bg-yellow-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-yellow-800 mb-3">Internet Connectivity</h3>
                        <p className="text-yellow-700 text-sm">Platform access depends on your internet connection and device compatibility</p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-xl">
                        <h3 className="font-semibold text-blue-800 mb-3">Force Majeure</h3>
                        <p className="text-blue-700 text-sm">Events beyond our control may affect service availability</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <AlertCircle className="text-indigo-600" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Limitation of Liability</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      To the maximum extent permitted by law, NextGenCampus shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                    </p>
                    <div className="bg-indigo-50 p-6 rounded-xl">
                      <ul className="list-disc list-inside space-y-2 text-indigo-700">
                        <li>Loss of profits, data, or business opportunities</li>
                        <li>Service interruptions or platform downtime</li>
                        <li>Errors or omissions in course content</li>
                        <li>Third-party actions or content</li>
                        <li>Technical issues or security breaches</li>
                        <li>Any other damages arising from the use of our platform</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                      <FileText className="text-teal-600" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Changes to Disclaimer</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on our platform. Your continued use of our services after any changes constitutes acceptance of the updated disclaimer.
                    </p>
                    <div className="bg-teal-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-teal-800 mb-3">Notification of Changes:</h3>
                      <ul className="list-disc list-inside space-y-2 text-teal-700">
                        <li>Material changes will be communicated via email</li>
                        <li>Updated disclaimer will be posted on our platform</li>
                        <li>Last updated date will be modified accordingly</li>
                        <li>Continued use implies acceptance of changes</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      <AlertCircle className="text-gray-600" size={20} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      If you have any questions about this disclaimer, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <p className="text-gray-700 font-medium">NextGenCampus</p>
                      <p className="text-gray-600">Email: info@nextgencampus.in</p>
                      <p className="text-gray-600">Phone: +91-9555360325</p>
                      <p className="text-gray-600">Address: 1016/2, Bhoor Colony, Opp. Sector 29, Faridabad, Haryana - 121002</p>
                      <p className="text-gray-600">Company: Mdm madhubani technologies pvt ltd</p>
                    </div>
                  </div>
                </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
