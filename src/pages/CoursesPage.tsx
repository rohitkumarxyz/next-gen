import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Search, Grid, List } from 'lucide-react';
import { courses, categories } from '../data/courses';
import './CoursesPage.css';

// Import company logos
import googleLogo from '../assets/google.png';
import microsoftLogo from '../assets/microsoft.png';
import amazonLogo from '../assets/amazon.png';
import netflixLogo from '../assets/netflix.png';
import ibmLogo from '../assets/ibm.png';
import stanfordLogo from '../assets/stanford.png';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Courses');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [levelFilter, setLevelFilter] = useState<string[]>([]);

  const filteredCourses = useMemo(() => {
    let filtered = courses;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All Courses') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Level filter
    if (levelFilter.length > 0) {
      filtered = filtered.filter(course => levelFilter.includes(course.level));
    }

    // Price filter
    filtered = filtered.filter(course => 
      course.price >= priceRange[0] && course.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'students':
        filtered.sort((a, b) => b.studentsCount - a.studentsCount);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
        break;
      default:
        // Popular (default)
        filtered.sort((a, b) => {
          if (a.isPopular && !b.isPopular) return -1;
          if (!a.isPopular && b.isPopular) return 1;
          return b.studentsCount - a.studentsCount;
        });
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, priceRange, levelFilter]);

  const handleLevelChange = (level: string) => {
    setLevelFilter(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  return (
    <div className="courses-page">
      <div className="courses-header">
        <div className="container">
          <h1>All Courses</h1>
          <p>Discover the perfect course for your learning journey</p>
          
          <div className="search-section">
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="courses-content">
        <div className="container">
          <div className="courses-layout">
            <div className="courses-sidebar">
              <div className="filter-section">
                <h3>Filters</h3>
                
                <div className="filter-group">
                  <h4>Category</h4>
                  <div className="filter-options">
                    {categories.map(category => (
                      <button
                        key={category}
                        className={`filter-option ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Level</h4>
                  <div className="filter-options">
                    {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                      <label key={level} className="filter-checkbox">
                        <input
                          type="checkbox"
                          checked={levelFilter.includes(level)}
                          onChange={() => handleLevelChange(level)}
                        />
                        <span>{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Price Range</h4>
                  <div className="price-range">
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    />
                    <div className="price-labels">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="courses-main">
              <div className="courses-toolbar">
                <div className="results-info">
                  <span>{filteredCourses.length} courses found</span>
                </div>
                
                <div className="toolbar-controls">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Highest Rated</option>
                    <option value="students">Most Students</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  
                  <div className="view-toggle">
                    <button
                      className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid size={20} />
                    </button>
                    <button
                      className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <List size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={`courses-grid ${viewMode}`}>
                {filteredCourses.map(course => (
                  <div key={course.id} className="course-card">
                    <div className="course-image">
                      <div className={`image-placeholder ${course.image}`}>
                        {course.isPopular && <div className="popular-badge">Popular</div>}
                        {course.isNew && <div className="new-badge">New</div>}
                        {course.company && (
                          <div className="company-badge">
                            <img 
                              src={
                                course.company === 'google' ? googleLogo :
                                course.company === 'microsoft' ? microsoftLogo :
                                course.company === 'amazon' ? amazonLogo :
                                course.company === 'netflix' ? netflixLogo :
                                course.company === 'ibm' ? ibmLogo :
                                course.company === 'stanford' ? stanfordLogo : ''
                              }
                              alt={course.company}
                              className="company-logo"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="course-content">
                      <div className="course-meta">
                        <span className="course-level">{course.level}</span>
                        <div className="course-rating">
                          <Star size={16} fill="#ffd700" color="#ffd700" />
                          <span>{course.rating}</span>
                          <span className="rating-count">({course.studentsCount.toLocaleString()})</span>
                        </div>
                      </div>
                      
                      <h3 className="course-title">{course.title}</h3>
                      <p className="course-description">{course.description}</p>
                      
                      <div className="course-details">
                        <div className="detail-item">
                          <Clock size={16} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="detail-item">
                          <Users size={16} />
                          <span>{course.studentsCount.toLocaleString()} students</span>
                        </div>
                      </div>
                      
                      <div className="course-footer">
                        <div className="course-price">
                          <span className="current-price">₹{course.price}</span>
                          {course.originalPrice && (
                            <span className="original-price">₹{course.originalPrice}</span>
                          )}
                        </div>
                        <Link to={`/course/${course.id}`} className="view-course-btn">
                          View Course
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="no-results">
                  <h3>No courses found</h3>
                  <p>Try adjusting your filters or search terms</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
