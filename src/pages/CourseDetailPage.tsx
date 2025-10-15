import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Users, 
  Clock, 
  CheckCircle, 
  Award,
  ArrowLeft,
  Globe,
  BookOpen,
  Target,
  Play,
  ChevronDown,
  ChevronUp,
  Heart,
  Zap,
  Shield,
  Trophy,
  MessageCircle,
  ThumbsUp,
} from 'lucide-react';
import { courses } from '../data/courses';
import './CourseDetailPage.css';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="course-not-found">
        <div className="not-found-content">
          <div className="not-found-icon">📚</div>
          <h2>Course Not Found</h2>
          <p>The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses" className="back-to-courses-btn">
            <ArrowLeft size={20} />
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum', icon: Target },
    { id: 'instructor', label: 'Instructor', icon: Users },
    { id: 'reviews', label: 'Reviews', icon: MessageCircle }
  ];

  const toggleModule = (index: number) => {
    setExpandedModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <div className="course-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/courses" className="breadcrumb-link">Courses</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{course.title}</span>
          </div>

          <div className="hero-content">
            <div className="hero-left">
              <div className="course-badges">
                {course.isPopular && <span className="badge popular">🔥 Popular</span>}
                {course.isNew && <span className="badge new">✨ New</span>}
                <span className="badge level">{course.level}</span>
                {discountPercentage > 0 && <span className="badge discount">{discountPercentage}% OFF</span>}
              </div>
              
              <h1 className="course-title">{course.title}</h1>
              <p className="course-subtitle">{course.description}</p>
              
              <div className="course-meta">
                <div className="meta-item">
                  <div className="meta-icon">
                    <Star size={20} fill="#ffd700" color="#ffd700" />
                  </div>
                  <div className="meta-content">
                    <span className="meta-value">{course.rating}</span>
                    <span className="meta-label">Rating</span>
                  </div>
                </div>
                <div className="meta-item">
                  <div className="meta-icon">
                    <Users size={20} />
                  </div>
                  <div className="meta-content">
                    <span className="meta-value">{course.studentsCount.toLocaleString()}</span>
                    <span className="meta-label">Students</span>
                  </div>
                </div>
                <div className="meta-item">
                  <div className="meta-icon">
                    <Clock size={20} />
                  </div>
                  <div className="meta-content">
                    <span className="meta-value">{course.duration}</span>
                    <span className="meta-label">Duration</span>
                  </div>
                </div>
                <div className="meta-item">
                  <div className="meta-icon">
                    <Award size={20} />
                  </div>
                  <div className="meta-content">
                    <span className="meta-value">{course.certificate ? 'Yes' : 'No'}</span>
                    <span className="meta-label">Certificate</span>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <button className="btn-primary">
                  <Play size={20} />
                  Preview Course
                </button>
                <button 
                  className={`btn-secondary ${isWishlisted ? 'wishlisted' : ''}`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart size={20} fill={isWishlisted ? "#ff4757" : "none"} />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </button>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="course-card">
                <div className="course-image">
                  <div className={`image-placeholder ${course.image}`}>
                    <div className="play-overlay">
                      <Play size={48} />
                    </div>
                  </div>
                </div>
                
                <div className="course-pricing">
                  <div className="price-section">
                    <div className="current-price">₹{course.price.toLocaleString()}</div>
                    {course.originalPrice && (
                      <div className="original-price">₹{course.originalPrice.toLocaleString()}</div>
                    )}
                  </div>
                  {discountPercentage > 0 && (
                    <div className="discount-badge">Save ₹{(course.originalPrice! - course.price).toLocaleString()}</div>
                  )}
                </div>
                
                <button className="enroll-btn">
                  <Zap size={20} />
                  Enroll Now
                </button>
                
                <div className="course-guarantees">
                  <div className="guarantee">
                    <Shield size={16} />
                    <span>30-day money-back guarantee</span>
                  </div>
                  <div className="guarantee">
                    <Trophy size={16} />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="guarantee">
                    <Globe size={16} />
                    <span>Lifetime access</span>
                  </div>
                </div>

                <div className="course-stats">
                  <div className="stat">
                    <BookOpen size={16} />
                    <span>{course.curriculum.length} Modules</span>
                  </div>
                  <div className="stat">
                    <Clock size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="stat">
                    <Users size={16} />
                    <span>{course.studentsCount.toLocaleString()}+ Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="course-content">
        <div className="container">
          <div className="content-layout">
            <div className="content-main">
              <div className="course-tabs">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <Icon size={18} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              
              <div className="tab-content">
                {activeTab === 'overview' && (
                  <div className="overview-content">
                    <div className="content-section">
                      <h3>About This Course</h3>
                      <p className="course-description">{course.longDescription}</p>
                    </div>
                    
                    <div className="content-section">
                      <h3>What You'll Learn</h3>
                      <div className="learning-objectives">
                        {course.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="objective-item">
                            <CheckCircle size={20} className="objective-icon" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="content-section">
                      <h3>Course Features</h3>
                      <div className="features-grid">
                        {course.features.map((feature, index) => (
                          <div key={index} className="feature-card">
                            <CheckCircle size={16} className="feature-icon" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="content-section">
                      <h3>Requirements</h3>
                      <div className="requirements-list">
                        {course.requirements.map((req, index) => (
                          <div key={index} className="requirement-item">
                            <div className="requirement-bullet"></div>
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'curriculum' && (
                  <div className="curriculum-content">
                    <div className="curriculum-header">
                      <h3>Course Curriculum</h3>
                      <div className="curriculum-stats">
                        <span>{course.curriculum.length} Modules</span>
                        <span>•</span>
                        <span>{course.curriculum.reduce((acc, module) => acc + module.lessons, 0)} Lessons</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <div className="curriculum-list">
                      {course.curriculum.map((module, index) => (
                        <div key={index} className="curriculum-module">
                          <div 
                            className="module-header"
                            onClick={() => toggleModule(index)}
                          >
                            <div className="module-info">
                              <div className="module-number">{index + 1}</div>
                              <div className="module-details">
                                <h4>{module.module}</h4>
                                <div className="module-meta">
                                  <span>{module.lessons} lessons</span>
                                  <span>•</span>
                                  <span>{module.duration}</span>
                                </div>
                              </div>
                            </div>
                            <div className="module-toggle">
                              {expandedModules.includes(index) ? 
                                <ChevronUp size={20} /> : 
                                <ChevronDown size={20} />
                              }
                            </div>
                          </div>
                          
                          {expandedModules.includes(index) && (
                            <div className="module-content">
                              <div className="lesson-list">
                                {Array.from({ length: module.lessons }, (_, i) => (
                                  <div key={i} className="lesson-item">
                                    <div className="lesson-icon">
                                      <Play size={16} />
                                    </div>
                                    <div className="lesson-info">
                                      <span>Lesson {i + 1}: Introduction to {module.module}</span>
                                      <span className="lesson-duration">15 min</span>
                                    </div>
                                    <div className="lesson-status">
                                      <CheckCircle size={16} />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'instructor' && (
                  <div className="instructor-content">
                    <div className="instructor-card">
                      <div className="instructor-avatar">
                        <div className={`avatar-placeholder ${course.instructor.image}`}></div>
                        <div className="instructor-badge">
                          <Award size={16} />
                          <span>Expert Instructor</span>
                        </div>
                      </div>
                      <div className="instructor-info">
                        <h3>{course.instructor.name}</h3>
                        <p className="instructor-title">{course.instructor.title}</p>
                        <p className="instructor-experience">{course.instructor.experience}</p>
                        <p className="instructor-bio">
                          Expert instructor with extensive industry experience. 
                          Passionate about teaching and helping students achieve their goals.
                        </p>
                        <div className="instructor-stats">
                          <div className="instructor-stat">
                            <Users size={16} />
                            <span>{course.studentsCount.toLocaleString()}+ Students</span>
                          </div>
                          <div className="instructor-stat">
                            <BookOpen size={16} />
                            <span>5+ Courses</span>
                          </div>
                          <div className="instructor-stat">
                            <Star size={16} />
                            <span>{course.rating} Rating</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'reviews' && (
                  <div className="reviews-content">
                    <div className="reviews-header">
                      <div className="rating-overview">
                        <div className="rating-score">
                          <span className="score">{course.rating}</span>
                          <div className="stars">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={24} 
                                fill={i < Math.floor(course.rating) ? "#ffd700" : "#e5e5e5"} 
                                color={i < Math.floor(course.rating) ? "#ffd700" : "#e5e5e5"} 
                              />
                            ))}
                          </div>
                          <span className="rating-count">Based on {course.studentsCount.toLocaleString()} reviews</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="reviews-list">
                      <div className="review-item">
                        <div className="review-header">
                          <div className="reviewer-info">
                            <div className="reviewer-avatar">JD</div>
                            <div className="reviewer-details">
                              <h4>John Doe</h4>
                              <div className="review-rating">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={16} fill="#ffd700" color="#ffd700" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="review-date">2 weeks ago</span>
                        </div>
                        <p className="review-text">
                          Excellent course! The instructor explains everything clearly and the projects are very practical. 
                          I learned a lot and feel confident in my new skills.
                        </p>
                        <div className="review-actions">
                          <button className="review-action">
                            <ThumbsUp size={16} />
                            <span>Helpful</span>
                          </button>
                          <button className="review-action">
                            <MessageCircle size={16} />
                            <span>Reply</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="review-item">
                        <div className="review-header">
                          <div className="reviewer-info">
                            <div className="reviewer-avatar">SM</div>
                            <div className="reviewer-details">
                              <h4>Sarah Miller</h4>
                              <div className="review-rating">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={16} fill="#ffd700" color="#ffd700" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="review-date">1 month ago</span>
                        </div>
                        <p className="review-text">
                          Great content and structure. The hands-on projects really helped me understand the concepts. 
                          Highly recommended for anyone looking to learn this technology.
                        </p>
                        <div className="review-actions">
                          <button className="review-action">
                            <ThumbsUp size={16} />
                            <span>Helpful</span>
                          </button>
                          <button className="review-action">
                            <MessageCircle size={16} />
                            <span>Reply</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="content-sidebar">
              <div className="sidebar-card">
                <h4>Course Information</h4>
                <div className="info-list">
                  <div className="info-item">
                    <BookOpen size={16} />
                    <span>Language: {course.language}</span>
                  </div>
                  <div className="info-item">
                    <Clock size={16} />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="info-item">
                    <Target size={16} />
                    <span>Level: {course.level}</span>
                  </div>
                  <div className="info-item">
                    <Award size={16} />
                    <span>Certificate: {course.certificate ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="info-item">
                    <Globe size={16} />
                    <span>Access: Lifetime</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card">
                <h4>Related Courses</h4>
                <div className="related-courses">
                  {courses.slice(1, 4).map((relatedCourse) => (
                    <Link key={relatedCourse.id} to={`/course/${relatedCourse.id}`} className="related-course">
                      <div className={`related-image ${relatedCourse.image}`}></div>
                      <div className="related-info">
                        <h5>{relatedCourse.title}</h5>
                        <div className="related-meta">
                          <Star size={14} fill="#ffd700" color="#ffd700" />
                          <span>{relatedCourse.rating}</span>
                          <span>•</span>
                          <span>₹{relatedCourse.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;