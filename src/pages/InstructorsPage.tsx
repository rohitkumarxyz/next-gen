import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Users, 
  Award, 
  Linkedin, 
  Twitter, 
  Globe,
  Search,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { courses } from '../data/courses';
import './InstructorsPage.css';

interface Instructor {
  id: string;
  name: string;
  title: string;
  image: string;
  experience: string;
  bio: string;
  rating: number;
  studentsCount: number;
  coursesCount: number;
  specializations: string[];
  education: string;
  company: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  achievements: string[];
  teachingStyle: string;
}

const instructors: Instructor[] = [
  {
    id: 'sarah-johnson',
    name: 'Rohit Sir',
    title: 'Senior Full Stack Developer',
    image: 'rohitsir',
    experience: '8+ years at Google, Microsoft',
    bio: 'Sarah is a passionate full-stack developer with over 8 years of experience building scalable web applications. She has worked at top tech companies including Google and Microsoft, where she led development teams and mentored junior developers.',
    rating: 4.9,
    studentsCount: 15420,
    coursesCount: 12,
    specializations: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    education: 'MS Computer Science, Stanford University',
    company: 'Google',
    social: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
      website: 'https://sarahjohnson.dev'
    },
    achievements: [
      'Google Developer Expert',
      'Microsoft MVP',
      'Authored 3 technical books',
      'Speaker at 50+ conferences'
    ],
    teachingStyle: 'Hands-on, project-based learning with real-world applications'
  },
  {
    id: 'michael-chen',
    name: 'Mohit Sir',
    title: 'Data Science Lead at Netflix',
    image: 'mohit-sir',
    experience: '10+ years in ML/AI',
    bio: 'Dr. Chen is a leading data scientist and machine learning expert with over 10 years of experience in the field. He currently leads the data science team at Netflix, where he works on recommendation systems and content optimization.',
    rating: 4.8,
    studentsCount: 12850,
    coursesCount: 8,
    specializations: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch'],
    education: 'PhD in Machine Learning, MIT',
    company: 'Netflix',
    social: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      twitter: 'https://twitter.com/michaelchen',
      website: 'https://michaelchen.ai'
    },
    achievements: [
      'Netflix Research Award',
      'Published 20+ research papers',
      'Kaggle Grandmaster',
      'TEDx Speaker'
    ],
    teachingStyle: 'Research-driven approach with practical industry applications'
  },
  {
    id: 'alex-rodriguez',
    name: 'Rajesh Sir',
    title: 'Chief Security Officer',
    image: 'rajesh-sir',
    experience: '12+ years in cybersecurity',
    bio: 'Alex is a cybersecurity expert with over 12 years of experience protecting organizations from cyber threats. He has worked with Fortune 500 companies and government agencies, developing security strategies and incident response protocols.',
    rating: 4.7,
    studentsCount: 9850,
    coursesCount: 6,
    specializations: ['Ethical Hacking', 'Penetration Testing', 'Incident Response', 'Security Architecture'],
    education: 'MS Cybersecurity, Carnegie Mellon',
    company: 'Cybersecurity Solutions Inc.',
    social: {
      linkedin: 'https://linkedin.com/in/alexrodriguez',
      website: 'https://alexrodriguez.security'
    },
    achievements: [
      'CISSP Certified',
      'CEH Certified',
      'Security+ Certified',
      'Black Hat Speaker'
    ],
    teachingStyle: 'Real-world scenarios and hands-on security labs'
  },
  {
    id: 'emily-watson',
    name: 'Manoj Sir',
    title: 'AWS Solutions Architect',
    image: 'manoj-sir',
    experience: '7+ years at Amazon Web Services',
    bio: 'Emily is a cloud architecture expert with over 7 years of experience at Amazon Web Services. She specializes in designing scalable, cost-effective cloud solutions and has helped hundreds of companies migrate to the cloud.',
    rating: 4.6,
    studentsCount: 11200,
    coursesCount: 10,
    specializations: ['AWS', 'Cloud Architecture', 'DevOps', 'Kubernetes', 'Terraform'],
    education: 'BS Computer Engineering, UC Berkeley',
    company: 'Amazon Web Services',
    social: {
      linkedin: 'https://linkedin.com/in/emilywatson',
      twitter: 'https://twitter.com/emilywatson'
    },
    achievements: [
      'AWS Solutions Architect Professional',
      'AWS DevOps Engineer Professional',
      'Kubernetes Certified Administrator',
      'Cloud Native Computing Foundation Member'
    ],
    teachingStyle: 'Cloud-first approach with practical deployment scenarios'
  },
  {
    id: 'david-kim',
    name: 'Rohit Sir',
    title: 'Senior Mobile Developer',
    image: 'rohitsir',
    experience: '6+ years at Facebook, Uber',
    bio: 'David is a mobile development expert with over 6 years of experience building cross-platform applications. He has worked at top tech companies including Facebook and Uber, where he developed mobile apps used by millions of users.',
    rating: 4.5,
    studentsCount: 8750,
    coursesCount: 7,
    specializations: ['React Native', 'iOS Development', 'Android Development', 'Flutter', 'Mobile UX'],
    education: 'BS Computer Science, University of Washington',
    company: 'Uber',
    social: {
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim'
    },
    achievements: [
      'React Native Core Contributor',
      'App Store Featured Apps',
      'Mobile Development Conference Speaker',
      'Open Source Contributor'
    ],
    teachingStyle: 'Cross-platform development with focus on user experience'
  },
  {
    id: 'lisa-zhang',
    name: 'Mohit Sir',
    title: 'Blockchain Engineer',
    image: 'mohit-sir',
    experience: '5+ years in DeFi protocols',
    bio: 'Lisa is a blockchain and Web3 expert with over 5 years of experience in decentralized finance protocols. She has contributed to several DeFi projects and is passionate about the future of decentralized applications.',
    rating: 4.7,
    studentsCount: 6500,
    coursesCount: 5,
    specializations: ['Solidity', 'Ethereum', 'DeFi', 'Web3', 'Smart Contracts'],
    education: 'MS Computer Science, ETH Zurich',
    company: 'DeFi Protocol Labs',
    social: {
      linkedin: 'https://linkedin.com/in/lisazhang',
      twitter: 'https://twitter.com/lisazhang',
      website: 'https://lisazhang.eth'
    },
    achievements: [
      'Ethereum Foundation Grantee',
      'DeFi Protocol Co-founder',
      'Blockchain Research Contributor',
      'Web3 Conference Speaker'
    ],
    teachingStyle: 'Decentralized learning with hands-on smart contract development'
  }
  ,
  {
    id: 'rohit-kumar',
    name: 'Rohit Kumar',
    title: 'Lead Full Stack Engineer',
    image: 'rohit-kumar',
    experience: '7+ years building SaaS platforms in India',
    bio: 'Rohit is a pragmatic full-stack engineer focused on scalable systems, developer experience, and production-ready architectures. He has led engineering teams at fast-growing startups and mentors developers on building robust products.',
    rating: 4.8,
    studentsCount: 7200,
    coursesCount: 5,
    specializations: ['React', 'Node.js', 'TypeScript', 'AWS', 'Microservices'],
    education: 'B.Tech, IIT Delhi',
    company: 'Futurebulls Technologies Pvt. Ltd.',
    social: {
      linkedin: 'https://linkedin.com/in/rohitkumar',
      website: 'https://rohit.tech'
    },
    achievements: [
      'Built scalable SaaS used by 100k+ users',
      'Speaker at local tech meetups',
      'Open-source contributor'
    ],
    teachingStyle: 'Practical, example-driven courses focused on shipping production-ready code'
  }
];

const InstructorsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const specializations = ['All', 'Web Development', 'Data Science', 'Cybersecurity', 'Cloud Computing', 'Mobile Development', 'Blockchain'];

  const filteredInstructors = instructors.filter(instructor => {
    const matchesSearch = instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSpecialization = selectedSpecialization === 'All' ||
                                 instructor.specializations.some(spec => spec.toLowerCase().includes(selectedSpecialization.toLowerCase()));

    return matchesSearch && matchesSpecialization;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'students':
        return b.studentsCount - a.studentsCount;
      case 'courses':
        return b.coursesCount - a.coursesCount;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="instructors-page">
      <div className="instructors-header">
        <div className="container">
          <h1>Meet Our Expert Instructors</h1>
          <p>Learn from industry professionals with real-world experience</p>
          
          <div className="search-filters">
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filters">
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="filter-select"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="rating">Sort by Rating</option>
                <option value="students">Sort by Students</option>
                <option value="courses">Sort by Courses</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="instructors-content">
        <div className="container">
          <div className="instructors-grid">
            {filteredInstructors.map(instructor => (
              <div key={instructor.id} className="instructor-card">
                <div className="instructor-header">
                  <div className="instructor-avatar">
                    <div className={`avatar-placeholder ${instructor.image}`}>
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  <div className="instructor-info">
                    <h3 className="instructor-name">{instructor.name}</h3>
                    <p className="instructor-title">{instructor.title}</p>
                    <p className="instructor-company">{instructor.company}</p>
                  </div>
                </div>

                <div className="instructor-stats">
                  <div className="stat">
                    <Star size={16} fill="#ffd700" color="#ffd700" />
                    <span>{instructor.rating}</span>
                  </div>
                  <div className="stat">
                    <Users size={16} />
                    <span>{instructor.studentsCount.toLocaleString()}</span>
                  </div>
                  <div className="stat">
                    <GraduationCap size={16} />
                    <span>{instructor.coursesCount}</span>
                  </div>
                </div>

                <p className="instructor-bio">{instructor.bio}</p>

                <div className="instructor-specializations">
                  <h4>Specializations</h4>
                  <div className="specialization-tags">
                    {instructor.specializations.map(spec => (
                      <span key={spec} className="specialization-tag">{spec}</span>
                    ))}
                  </div>
                </div>

                <div className="instructor-details">
                  <div className="detail-item">
                    <Briefcase size={16} />
                    <span>{instructor.experience}</span>
                  </div>
                  <div className="detail-item">
                    <Award size={16} />
                    <span>{instructor.education}</span>
                  </div>
                </div>

                <div className="instructor-achievements">
                  <h4>Key Achievements</h4>
                  <ul>
                    {instructor.achievements.slice(0, 3).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="instructor-social">
                  {instructor.social.linkedin && (
                    <a href={instructor.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {instructor.social.twitter && (
                    <a href={instructor.social.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter size={20} />
                    </a>
                  )}
                  {instructor.social.website && (
                    <a href={instructor.social.website} target="_blank" rel="noopener noreferrer">
                      <Globe size={20} />
                    </a>
                  )}
                </div>

                <div className="instructor-courses">
                  <h4>Courses by {instructor.name.split(' ')[0]}</h4>
                  <div className="instructor-course-list">
                    {courses.filter(course => course.instructor.name === instructor.name).map(course => (
                      <Link key={course.id} to={`/course/${course.id}`} className="instructor-course-item">
                        <span className="course-title">{course.title}</span>
                        <span className="course-rating">
                          <Star size={14} fill="#ffd700" color="#ffd700" />
                          {course.rating}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsPage;
