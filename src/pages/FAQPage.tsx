import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import './FAQPage.css';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is NextGenCampus?",
          answer: "NextGenCampus is a leading online education platform that offers comprehensive technology courses designed to help students and professionals advance their careers in the digital age. We provide industry-relevant training in web development, data science, cybersecurity, cloud computing, and more."
        },
        {
          question: "Who can enroll in your courses?",
          answer: "Our courses are designed for learners of all levels - from complete beginners to experienced professionals looking to upskill. Whether you're a student, working professional, or career changer, we have courses tailored to your needs and experience level."
        },
        {
          question: "Do I need any prior experience?",
          answer: "Most of our courses are designed to accommodate beginners, with clear prerequisites listed for each course. We provide foundational concepts and build up to advanced topics, ensuring everyone can follow along regardless of their background."
        },
        {
          question: "How long do I have access to the course materials?",
          answer: "You get lifetime access to all course materials once you enroll. This includes video lectures, downloadable resources, assignments, and any future updates to the course content."
        }
      ]
    },
    {
      title: "Course Information",
      faqs: [
        {
          question: "What types of courses do you offer?",
          answer: "We offer courses in Web Development (React, Node.js, Full Stack), Data Science & Machine Learning, Cybersecurity, Cloud Computing (AWS, Azure), Mobile Development, Blockchain & Web3, and AI & Machine Learning. Each course is designed with industry partnerships and real-world projects."
        },
        {
          question: "Are the courses self-paced or scheduled?",
          answer: "Our courses are primarily self-paced, allowing you to learn at your own speed. However, we also offer live sessions, Q&A sessions, and group projects to enhance your learning experience and provide real-time interaction with instructors."
        },
        {
          question: "What is included in each course?",
          answer: "Each course includes video lectures, hands-on projects, downloadable resources, assignments, quizzes, instructor support, peer community access, and a certificate of completion. Some courses also include live mentoring sessions and career guidance."
        },
        {
          question: "How long does it take to complete a course?",
          answer: "Course duration varies depending on the complexity and your learning pace. Most courses range from 3-8 months if you dedicate 5-10 hours per week. You can complete them faster or take longer based on your schedule and commitment."
        }
      ]
    },
    {
      title: "Payment & Pricing",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, UPI payments, net banking, and digital wallets. All payments are processed securely through Razorpay, ensuring your financial information is protected."
        },
        {
          question: "Do you offer any discounts or scholarships?",
          answer: "Yes, we regularly offer early bird discounts, seasonal promotions, and group discounts. We also provide scholarships for deserving students. Follow our social media channels and subscribe to our newsletter to stay updated on current offers."
        },
        {
          question: "Can I pay in installments?",
          answer: "Yes, we offer flexible payment options including EMI through our payment partners. You can choose to pay the full amount upfront or in monthly installments, making quality education more accessible."
        },
        {
          question: "What is your refund policy?",
          answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your course within the first 30 days and have accessed less than 20% of the content, you can request a full refund. Check our detailed refund policy for complete terms and conditions."
        }
      ]
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What if I face technical issues?",
          answer: "Our technical support team is available 24/7 to help you with any platform-related issues. You can reach us through email, phone, or live chat. We also have a comprehensive help center with troubleshooting guides and video tutorials."
        },
        {
          question: "What are the system requirements?",
          answer: "You need a computer or mobile device with internet connection. For coding courses, we recommend a laptop or desktop with at least 4GB RAM. Most courses work on Windows, Mac, and Linux operating systems. Specific requirements are listed for each course."
        },
        {
          question: "Can I access courses on mobile devices?",
          answer: "Yes, our platform is mobile-responsive and you can access course materials on smartphones and tablets. However, for hands-on coding exercises, we recommend using a computer for the best experience."
        },
        {
          question: "How do I download course materials?",
          answer: "Course materials can be downloaded from your course dashboard. Simply click on the download button next to each resource. Downloads are available for offline viewing and you can access them anytime during your course duration."
        }
      ]
    },
    {
      title: "Certificates & Career",
      faqs: [
        {
          question: "Do you provide certificates?",
          answer: "Yes, upon successful completion of a course, you'll receive a certificate of completion that you can share on LinkedIn and include in your resume. Our certificates are recognized by industry partners and add value to your professional profile."
        },
        {
          question: "Do you help with job placement?",
          answer: "While we don't guarantee job placement, we provide comprehensive career support including resume building, interview preparation, portfolio development, and job search guidance. We also have partnerships with companies that regularly hire our graduates."
        },
        {
          question: "Are your courses recognized by employers?",
          answer: "Yes, our courses are designed in collaboration with industry experts and leading companies. The skills you learn are directly applicable to real-world projects and are highly valued by employers in the technology sector."
        },
        {
          question: "Can I get career guidance?",
          answer: "Absolutely! We offer career counseling sessions, industry insights, and guidance on choosing the right career path. Our instructors and career advisors are available to help you make informed decisions about your professional development."
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <div className="faq-hero">
        <div className="faq-hero-content">
          <div className="faq-hero-icon">
            <div>
              <HelpCircle className="text-white" size={32} />
            </div>
          </div>
          <h1>
            Frequently Asked Questions
          </h1>
          <p>
            Find answers to common questions about our courses, platform, and services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="faq-content">
        <div className="faq-container">
          <div className="faq-categories">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category-card">
                <div className="faq-category-header">
                  <h2>{category.title}</h2>
                </div>
                <div className="faq-category-content">
                  <div className="faq-items">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <div key={faqIndex} className="faq-item">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="faq-question-button"
                          >
                            <h3 className="faq-question">{faq.question}</h3>
                            {isOpen ? (
                              <ChevronUp className="faq-chevron" size={24} />
                            ) : (
                              <ChevronDown className="faq-chevron" size={24} />
                            )}
                          </button>
                          {isOpen && (
                            <p className="faq-answer">{faq.answer}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Section */}
          <div className="faq-contact-section">
            <div className="faq-contact-header">
              <div className="faq-contact-icon">
                <div>
                  <MessageCircle className="text-green-600" size={32} />
                </div>
              </div>
              <h2>Still Have Questions?</h2>
              <p>
                Our support team is here to help you 24/7. Get in touch with us through any of the channels below.
              </p>
              
              <div className="faq-contact-grid">
                <div className="faq-contact-item">
                  <div className="faq-contact-icon-small blue">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <h3>Call Us</h3>
                  <p>Speak directly with our support team</p>
                  <a href="tel:+919555360325">
                    +91-9555360325
                  </a>
                </div>

                <div className="faq-contact-item green">
                  <div className="faq-contact-icon-small green">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <h3>Email Us</h3>
                  <p>Get detailed responses within 24 hours</p>
                  <a href="mailto:info@nextgencampus.in">
                    info@nextgencampus.in
                  </a>
                </div>

                <div className="faq-contact-item purple">
                  <div className="faq-contact-icon-small purple">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <h3>Visit Us</h3>
                  <p>Come meet us in person</p>
                  <p>
                    1016/2, Bhoor Colony,<br />
                    Opp. Sector 29, Faridabad,<br />
                    Haryana - 121002
                  </p>
                </div>
              </div>

              <div className="faq-business-hours">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
