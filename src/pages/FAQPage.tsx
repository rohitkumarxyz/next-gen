import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <HelpCircle className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our courses, platform, and services. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <div key={faqIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                          >
                            <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                            {isOpen ? (
                              <ChevronUp className="text-indigo-600 flex-shrink-0" size={24} />
                            ) : (
                              <ChevronDown className="text-indigo-600 flex-shrink-0" size={24} />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
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
          <div className="mt-16 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="text-green-600" size={32} />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you 24/7. Get in touch with us through any of the channels below.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-3">Speak directly with our support team</p>
                  <a href="tel:+919555360325" className="text-blue-600 font-semibold hover:text-blue-700">
                    +91-9555360325
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-3">Get detailed responses within 24 hours</p>
                  <a href="mailto:info@nextgencampus.in" className="text-green-600 font-semibold hover:text-green-700">
                    info@nextgencampus.in
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-3">Come meet us in person</p>
                  <p className="text-purple-600 font-semibold text-sm">
                    1016/2, Bhoor Colony,<br />
                    Opp. Sector 29, Faridabad,<br />
                    Haryana - 121002
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM IST</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
