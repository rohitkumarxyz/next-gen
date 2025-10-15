export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  university: string;
  image: string;
  company?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  studentsCount: number;
  instructor: {
    name: string;
    title: string;
    image: string;
    experience: string;
  };
  features: string[];
  curriculum: {
    module: string;
    lessons: number;
    duration: string;
  }[];
  requirements: string[];
  whatYouWillLearn: string[];
  certificate: boolean;
  language: string;
  startDate: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const courses: Course[] = [
  {
    id: 'full-stack-web-development',
    title: 'Full Stack Web Development Bootcamp',
    description: 'Master modern web development with React, Node.js, and cloud deployment',
    longDescription: 'This comprehensive bootcamp covers everything from frontend frameworks to backend development, database management, and cloud deployment. You\'ll build real-world projects and gain hands-on experience with industry-standard tools.',
    duration: '6 Months',
    level: 'Intermediate',
    category: 'Web Development',
    university: 'NextGenCampus',
    image: 'complete-web-dev',
    company: 'google',
    price: 2999,
    originalPrice: 4999,
    rating: 4.8,
    studentsCount: 15420,
    instructor: {
      name: 'Rohit Sir',
      title: 'Senior Full Stack Developer',
      image: 'rohitsir',
      experience: '8+ years at Google, Microsoft'
    },
    features: [
      'Live coding sessions',
      'Real-world projects',
      'Career guidance',
      'Certificate of completion',
      'Lifetime access'
    ],
    curriculum: [
      { module: 'HTML5 & CSS3 Fundamentals', lessons: 12, duration: '2 weeks' },
      { module: 'JavaScript ES6+', lessons: 18, duration: '3 weeks' },
      { module: 'React.js Development', lessons: 24, duration: '4 weeks' },
      { module: 'Node.js & Express', lessons: 20, duration: '3 weeks' },
      { module: 'Database Design & MongoDB', lessons: 16, duration: '2 weeks' },
      { module: 'Cloud Deployment & DevOps', lessons: 14, duration: '2 weeks' }
    ],
    requirements: [
      'Basic computer skills',
      'No prior programming experience required',
      'Dedication to learn and practice'
    ],
    whatYouWillLearn: [
      'Build responsive web applications',
      'Create RESTful APIs',
      'Implement authentication and security',
      'Deploy applications to the cloud',
      'Work with databases and data modeling',
      'Use version control with Git'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-02-15',
    isPopular: true
  },
  {
    id: 'data-science-machine-learning',
    title: 'Data Science & Machine Learning Mastery',
    description: 'Learn data analysis, machine learning algorithms, and AI implementation',
    longDescription: 'Dive deep into data science and machine learning with hands-on projects using Python, TensorFlow, and real datasets. Learn to build predictive models and deploy ML solutions.',
    duration: '8 Months',
    level: 'Advanced',
    category: 'Data Science',
    university: 'NextGenCampus',
    image: 'ai-course',
    company: 'netflix',
    price: 3999,
    originalPrice: 5999,
    rating: 4.9,
    studentsCount: 12850,
    instructor: {
      name: 'Mohit Sir',
      title: 'Data Science Lead at Netflix',
      image: 'mohit-sir',
      experience: '10+ years in ML/AI'
    },
    features: [
      'Industry datasets',
      'ML model deployment',
      'Portfolio projects',
      'Job placement assistance',
      '1-on-1 mentoring'
    ],
    curriculum: [
      { module: 'Python for Data Science', lessons: 15, duration: '3 weeks' },
      { module: 'Statistics & Probability', lessons: 20, duration: '4 weeks' },
      { module: 'Data Visualization', lessons: 12, duration: '2 weeks' },
      { module: 'Machine Learning Algorithms', lessons: 25, duration: '5 weeks' },
      { module: 'Deep Learning & Neural Networks', lessons: 18, duration: '4 weeks' },
      { module: 'MLOps & Model Deployment', lessons: 16, duration: '3 weeks' }
    ],
    requirements: [
      'Basic programming knowledge',
      'High school mathematics',
      'Analytical thinking skills'
    ],
    whatYouWillLearn: [
      'Analyze and visualize data',
      'Build machine learning models',
      'Implement deep learning solutions',
      'Deploy ML models to production',
      'Work with big data tools',
      'Create data-driven insights'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-02-20',
    isPopular: true
  },
  {
    id: 'cybersecurity-expert',
    title: 'Cybersecurity Expert Certification',
    description: 'Master cybersecurity fundamentals and advanced threat protection',
    longDescription: 'Comprehensive cybersecurity training covering network security, ethical hacking, incident response, and compliance. Prepare for industry certifications like CISSP and CEH.',
    duration: '5 Months',
    level: 'Intermediate',
    category: 'Cybersecurity',
    university: 'NextGenCampus',
    image: 'computer-networking',
    company: 'ibm',
    price: 3499,
    originalPrice: 4999,
    rating: 4.7,
    studentsCount: 9850,
    instructor: {
      name: 'Rajesh Sir',
      title: 'Chief Security Officer',
      image: 'rajesh-sir',
      experience: '12+ years in cybersecurity'
    },
    features: [
      'Hands-on labs',
      'Certification prep',
      'Industry tools training',
      'Penetration testing',
      'Security audit projects'
    ],
    curriculum: [
      { module: 'Network Security Fundamentals', lessons: 14, duration: '3 weeks' },
      { module: 'Ethical Hacking & Penetration Testing', lessons: 20, duration: '4 weeks' },
      { module: 'Incident Response & Forensics', lessons: 16, duration: '3 weeks' },
      { module: 'Security Compliance & Governance', lessons: 12, duration: '2 weeks' },
      { module: 'Advanced Threat Protection', lessons: 18, duration: '3 weeks' }
    ],
    requirements: [
      'Basic IT knowledge',
      'Understanding of networks',
      'Problem-solving skills'
    ],
    whatYouWillLearn: [
      'Identify and mitigate security threats',
      'Perform penetration testing',
      'Implement security policies',
      'Respond to security incidents',
      'Conduct security audits',
      'Protect against advanced attacks'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-02-25',
    isNew: true
  },
  {
    id: 'cloud-architecture-aws',
    title: 'AWS Cloud Architecture & DevOps',
    description: 'Design and deploy scalable cloud solutions on AWS',
    longDescription: 'Learn to architect, deploy, and manage applications on AWS. Master DevOps practices, containerization, and infrastructure as code.',
    duration: '4 Months',
    level: 'Intermediate',
    category: 'Cloud Computing',
    university: 'NextGenCampus',
    image: 'amazon',
    company: 'amazon',
    price: 2799,
    originalPrice: 3999,
    rating: 4.6,
    studentsCount: 11200,
    instructor: {
      name: 'Manoj Sir',
      title: 'AWS Solutions Architect',
      image: 'manoj-sir',
      experience: '7+ years at Amazon Web Services'
    },
    features: [
      'AWS hands-on labs',
      'Real cloud projects',
      'DevOps automation',
      'Container orchestration',
      'Infrastructure as Code'
    ],
    curriculum: [
      { module: 'AWS Fundamentals', lessons: 16, duration: '3 weeks' },
      { module: 'Compute & Storage Services', lessons: 14, duration: '2 weeks' },
      { module: 'Networking & Security', lessons: 18, duration: '3 weeks' },
      { module: 'DevOps & CI/CD', lessons: 20, duration: '4 weeks' },
      { module: 'Container & Serverless', lessons: 16, duration: '3 weeks' }
    ],
    requirements: [
      'Basic Linux knowledge',
      'Understanding of networking',
      'Programming experience helpful'
    ],
    whatYouWillLearn: [
      'Design scalable cloud architectures',
      'Deploy applications on AWS',
      'Implement DevOps practices',
      'Use containerization technologies',
      'Automate infrastructure deployment',
      'Monitor and optimize cloud resources'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-03-01'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile apps for iOS and Android',
    longDescription: 'Learn to create native mobile applications using React Native. Build apps that work seamlessly on both iOS and Android platforms.',
    duration: '5 Months',
    level: 'Intermediate',
    category: 'Mobile Development',
    university: 'NextGenCampus',
    image: 'advance-web-dev',
    company: 'microsoft',
    price: 2499,
    originalPrice: 3499,
    rating: 4.5,
    studentsCount: 8750,
    instructor: {
      name: 'Rohit Sir',
      title: 'Senior Mobile Developer',
      image: 'rohitsir',
      experience: '6+ years at Facebook, Uber'
    },
    features: [
      'Cross-platform development',
      'App store deployment',
      'Performance optimization',
      'Native module integration',
      'Real app projects'
    ],
    curriculum: [
      { module: 'React Native Fundamentals', lessons: 15, duration: '3 weeks' },
      { module: 'Navigation & State Management', lessons: 12, duration: '2 weeks' },
      { module: 'APIs & Data Management', lessons: 16, duration: '3 weeks' },
      { module: 'Native Features & Modules', lessons: 14, duration: '2 weeks' },
      { module: 'Testing & Deployment', lessons: 10, duration: '2 weeks' }
    ],
    requirements: [
      'JavaScript knowledge',
      'React basics helpful',
      'Mobile development interest'
    ],
    whatYouWillLearn: [
      'Build cross-platform mobile apps',
      'Implement navigation and state management',
      'Integrate with APIs and databases',
      'Use native device features',
      'Deploy to app stores',
      'Optimize app performance'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-03-05'
  },
  {
    id: 'blockchain-development',
    title: 'Blockchain & Web3 Development',
    description: 'Master blockchain technology and build decentralized applications',
    longDescription: 'Learn blockchain fundamentals, smart contracts, and Web3 development. Build DApps and understand DeFi protocols.',
    duration: '6 Months',
    level: 'Advanced',
    category: 'Blockchain',
    university: 'NextGenCampus',
    image: 'advance-programming-fundamentals',
    company: 'stanford',
    price: 3299,
    originalPrice: 4499,
    rating: 4.7,
    studentsCount: 6500,
    instructor: {
      name: 'Mohit Sir',
      title: 'Blockchain Engineer',
      image: 'mohit-sir',
      experience: '5+ years in DeFi protocols'
    },
    features: [
      'Smart contract development',
      'DeFi protocol building',
      'NFT marketplace creation',
      'Web3 integration',
      'Blockchain security'
    ],
    curriculum: [
      { module: 'Blockchain Fundamentals', lessons: 12, duration: '2 weeks' },
      { module: 'Ethereum & Smart Contracts', lessons: 20, duration: '4 weeks' },
      { module: 'Solidity Programming', lessons: 18, duration: '3 weeks' },
      { module: 'DeFi & DApp Development', lessons: 16, duration: '3 weeks' },
      { module: 'Web3 Frontend Integration', lessons: 14, duration: '2 weeks' }
    ],
    requirements: [
      'JavaScript/TypeScript knowledge',
      'Understanding of cryptography',
      'Interest in decentralized systems'
    ],
    whatYouWillLearn: [
      'Understand blockchain technology',
      'Write smart contracts in Solidity',
      'Build decentralized applications',
      'Integrate Web3 frontends',
      'Work with DeFi protocols',
      'Implement blockchain security'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-03-10',
    isNew: true
  },
  // Additional Web Development Courses
  {
    id: 'react-advanced',
    title: 'Advanced React Development',
    description: 'Master advanced React patterns, hooks, and performance optimization',
    longDescription: 'Dive deep into advanced React concepts including custom hooks, context API, performance optimization, and testing strategies.',
    duration: '4 Months',
    level: 'Advanced',
    category: 'Web Development',
    university: 'NextGenCampus',
    image: 'advance-web-dev',
    price: 2199,
    originalPrice: 2999,
    rating: 4.6,
    studentsCount: 8750,
    instructor: {
      name: 'Rohit Sir',
      title: 'Senior Full Stack Developer',
      image: 'rohitsir',
      experience: '8+ years at Google, Microsoft'
    },
    features: [
      'Advanced React patterns',
      'Performance optimization',
      'Testing strategies',
      'State management',
      'Custom hooks development'
    ],
    curriculum: [
      { module: 'Advanced Hooks & Context', lessons: 15, duration: '3 weeks' },
      { module: 'Performance Optimization', lessons: 12, duration: '2 weeks' },
      { module: 'Testing & Debugging', lessons: 10, duration: '2 weeks' },
      { module: 'State Management Patterns', lessons: 14, duration: '3 weeks' }
    ],
    requirements: [
      'Intermediate React knowledge',
      'JavaScript ES6+ understanding',
      'Basic testing concepts'
    ],
    whatYouWillLearn: [
      'Master advanced React patterns',
      'Optimize React performance',
      'Implement comprehensive testing',
      'Build scalable state management',
      'Create custom hooks',
      'Debug complex React applications'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-03-15'
  },
  {
    id: 'nodejs-backend',
    title: 'Node.js Backend Development',
    description: 'Build scalable server-side applications with Node.js and Express',
    longDescription: 'Learn to build robust backend applications using Node.js, Express, databases, and modern development practices.',
    duration: '5 Months',
    level: 'Intermediate',
    category: 'Web Development',
    university: 'NextGenCampus',
    image: 'complete-web-dev',
    price: 2499,
    originalPrice: 3499,
    rating: 4.5,
    studentsCount: 7200,
    instructor: {
      name: 'Rohit Sir',
      title: 'Senior Mobile Developer',
      image: 'rohitsir',
      experience: '6+ years at Facebook, Uber'
    },
    features: [
      'RESTful API development',
      'Database integration',
      'Authentication & security',
      'Microservices architecture',
      'Deployment strategies'
    ],
    curriculum: [
      { module: 'Node.js Fundamentals', lessons: 16, duration: '3 weeks' },
      { module: 'Express.js Framework', lessons: 18, duration: '3 weeks' },
      { module: 'Database Integration', lessons: 14, duration: '2 weeks' },
      { module: 'Authentication & Security', lessons: 12, duration: '2 weeks' },
      { module: 'Deployment & DevOps', lessons: 10, duration: '2 weeks' }
    ],
    requirements: [
      'JavaScript fundamentals',
      'Basic understanding of APIs',
      'Command line familiarity'
    ],
    whatYouWillLearn: [
      'Build RESTful APIs',
      'Integrate with databases',
      'Implement authentication',
      'Handle security concerns',
      'Deploy applications',
      'Work with microservices'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-03-20'
  },
  // Additional Data Science Courses
  {
    id: 'python-data-analysis',
    title: 'Python for Data Analysis',
    description: 'Master data manipulation and analysis with Python and pandas',
    longDescription: 'Learn to analyze and manipulate data using Python, pandas, NumPy, and visualization libraries for data-driven insights.',
    duration: '3 Months',
    level: 'Beginner',
    category: 'Data Science',
    university: 'NextGenCampus',
    image: 'ai-course',
    price: 1799,
    originalPrice: 2499,
    rating: 4.4,
    studentsCount: 11200,
    instructor: {
      name: 'Mohit Sir',
      title: 'Data Science Lead at Netflix',
      image: 'mohit-sir',
      experience: '10+ years in ML/AI'
    },
    features: [
      'Data manipulation with pandas',
      'Statistical analysis',
      'Data visualization',
      'Real-world datasets',
      'Jupyter notebooks'
    ],
    curriculum: [
      { module: 'Python Basics for Data', lessons: 12, duration: '2 weeks' },
      { module: 'Pandas DataFrames', lessons: 16, duration: '3 weeks' },
      { module: 'Data Visualization', lessons: 14, duration: '2 weeks' },
      { module: 'Statistical Analysis', lessons: 10, duration: '2 weeks' }
    ],
    requirements: [
      'Basic Python knowledge',
      'High school mathematics',
      'Interest in data analysis'
    ],
    whatYouWillLearn: [
      'Manipulate data with pandas',
      'Create data visualizations',
      'Perform statistical analysis',
      'Work with real datasets',
      'Use Jupyter notebooks',
      'Clean and prepare data'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-03-25'
  },
  {
    id: 'deep-learning-tensorflow',
    title: 'Deep Learning with TensorFlow',
    description: 'Build neural networks and deep learning models with TensorFlow',
    longDescription: 'Master deep learning concepts and build advanced neural networks using TensorFlow and Keras for real-world applications.',
    duration: '7 Months',
    level: 'Advanced',
    category: 'Data Science',
    university: 'NextGenCampus',
    image: 'ai-course',
    price: 3799,
    originalPrice: 4999,
    rating: 4.8,
    studentsCount: 5600,
    instructor: {
      name: 'Mohit Sir',
      title: 'Data Science Lead at Netflix',
      image: 'mohit-sir',
      experience: '10+ years in ML/AI'
    },
    features: [
      'Neural network architecture',
      'TensorFlow & Keras',
      'Computer vision',
      'Natural language processing',
      'Model deployment'
    ],
    curriculum: [
      { module: 'Neural Network Basics', lessons: 15, duration: '3 weeks' },
      { module: 'TensorFlow Fundamentals', lessons: 18, duration: '3 weeks' },
      { module: 'Computer Vision', lessons: 16, duration: '3 weeks' },
      { module: 'NLP with Deep Learning', lessons: 14, duration: '3 weeks' },
      { module: 'Model Deployment', lessons: 12, duration: '2 weeks' }
    ],
    requirements: [
      'Python programming',
      'Machine learning basics',
      'Linear algebra knowledge'
    ],
    whatYouWillLearn: [
      'Build neural networks',
      'Use TensorFlow effectively',
      'Implement computer vision',
      'Work with NLP models',
      'Deploy deep learning models',
      'Optimize model performance'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-04-01'
  },
  // Additional Cybersecurity Courses
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking & Penetration Testing',
    description: 'Learn ethical hacking techniques and penetration testing methodologies',
    longDescription: 'Master ethical hacking skills, penetration testing, vulnerability assessment, and security auditing techniques.',
    duration: '4 Months',
    level: 'Intermediate',
    category: 'Cybersecurity',
    university: 'NextGenCampus',
    image: 'computer-networking',
    price: 2899,
    originalPrice: 3999,
    rating: 4.6,
    studentsCount: 8200,
    instructor: {
      name: 'Rajesh Sir',
      title: 'Chief Security Officer',
      image: 'rajesh-sir',
      experience: '12+ years in cybersecurity'
    },
    features: [
      'Penetration testing',
      'Vulnerability assessment',
      'Network security',
      'Web application security',
      'Security tools mastery'
    ],
    curriculum: [
      { module: 'Hacking Fundamentals', lessons: 14, duration: '3 weeks' },
      { module: 'Network Penetration', lessons: 16, duration: '3 weeks' },
      { module: 'Web App Security', lessons: 12, duration: '2 weeks' },
      { module: 'Security Tools', lessons: 10, duration: '2 weeks' }
    ],
    requirements: [
      'Basic networking knowledge',
      'Linux command line',
      'Understanding of security concepts'
    ],
    whatYouWillLearn: [
      'Perform penetration tests',
      'Identify vulnerabilities',
      'Use security tools',
      'Secure network infrastructure',
      'Test web applications',
      'Document security findings'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-04-05'
  },
  {
    id: 'security-compliance',
    title: 'Security Compliance & Governance',
    description: 'Master security frameworks, compliance standards, and governance',
    longDescription: 'Learn about security frameworks like ISO 27001, SOC 2, GDPR compliance, and security governance best practices.',
    duration: '3 Months',
    level: 'Intermediate',
    category: 'Cybersecurity',
    university: 'NextGenCampus',
    image: 'computer-networking',
    price: 2299,
    originalPrice: 3199,
    rating: 4.3,
    studentsCount: 6800,
    instructor: {
      name: 'Rajesh Sir',
      title: 'Chief Security Officer',
      image: 'rajesh-sir',
      experience: '12+ years in cybersecurity'
    },
    features: [
      'ISO 27001 framework',
      'SOC 2 compliance',
      'GDPR requirements',
      'Risk management',
      'Security policies'
    ],
    curriculum: [
      { module: 'Security Frameworks', lessons: 12, duration: '2 weeks' },
      { module: 'Compliance Standards', lessons: 14, duration: '3 weeks' },
      { module: 'Risk Management', lessons: 10, duration: '2 weeks' },
      { module: 'Governance Practices', lessons: 8, duration: '2 weeks' }
    ],
    requirements: [
      'Basic security knowledge',
      'Understanding of regulations',
      'Business process knowledge'
    ],
    whatYouWillLearn: [
      'Implement security frameworks',
      'Ensure compliance',
      'Manage security risks',
      'Develop security policies',
      'Conduct security audits',
      'Build governance programs'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-04-10'
  },
  // Additional Cloud Computing Courses
  {
    id: 'azure-cloud',
    title: 'Microsoft Azure Cloud Solutions',
    description: 'Master Microsoft Azure cloud services and solutions',
    longDescription: 'Learn to design, deploy, and manage applications on Microsoft Azure cloud platform with hands-on projects.',
    duration: '5 Months',
    level: 'Intermediate',
    category: 'Cloud Computing',
    university: 'NextGenCampus',
    image: 'microsoft',
    price: 2699,
    originalPrice: 3699,
    rating: 4.4,
    studentsCount: 7800,
    instructor: {
      name: 'Manoj Sir',
      title: 'AWS Solutions Architect',
      image: 'manoj-sir',
      experience: '7+ years at Amazon Web Services'
    },
    features: [
      'Azure services mastery',
      'Cloud architecture design',
      'DevOps integration',
      'Cost optimization',
      'Security best practices'
    ],
    curriculum: [
      { module: 'Azure Fundamentals', lessons: 16, duration: '3 weeks' },
      { module: 'Compute & Storage', lessons: 14, duration: '2 weeks' },
      { module: 'Networking & Security', lessons: 12, duration: '2 weeks' },
      { module: 'DevOps & Monitoring', lessons: 10, duration: '2 weeks' }
    ],
    requirements: [
      'Basic cloud concepts',
      'Understanding of networking',
      'Command line experience'
    ],
    whatYouWillLearn: [
      'Design Azure solutions',
      'Deploy cloud applications',
      'Implement security measures',
      'Optimize cloud costs',
      'Use Azure DevOps',
      'Monitor cloud resources'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-04-15'
  },
  {
    id: 'kubernetes-orchestration',
    title: 'Kubernetes Container Orchestration',
    description: 'Master container orchestration with Kubernetes',
    longDescription: 'Learn to deploy, manage, and scale containerized applications using Kubernetes in production environments.',
    duration: '4 Months',
    level: 'Advanced',
    category: 'Cloud Computing',
    university: 'NextGenCampus',
    image: 'amazon',
    price: 2999,
    originalPrice: 4199,
    rating: 4.7,
    studentsCount: 6400,
    instructor: {
      name: 'Manoj Sir',
      title: 'AWS Solutions Architect',
      image: 'manoj-sir',
      experience: '7+ years at Amazon Web Services'
    },
    features: [
      'Container orchestration',
      'Kubernetes architecture',
      'Service mesh',
      'Monitoring & logging',
      'Production deployment'
    ],
    curriculum: [
      { module: 'Kubernetes Basics', lessons: 15, duration: '3 weeks' },
      { module: 'Advanced Concepts', lessons: 18, duration: '3 weeks' },
      { module: 'Service Mesh', lessons: 12, duration: '2 weeks' },
      { module: 'Production Practices', lessons: 14, duration: '3 weeks' }
    ],
    requirements: [
      'Docker knowledge',
      'Linux administration',
      'Networking basics'
    ],
    whatYouWillLearn: [
      'Deploy Kubernetes clusters',
      'Manage containerized apps',
      'Implement service mesh',
      'Monitor applications',
      'Scale applications',
      'Handle production workloads'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-04-20'
  },
  // Additional Mobile Development Courses
  {
    id: 'ios-swift',
    title: 'iOS Development with Swift',
    description: 'Build native iOS applications with Swift and SwiftUI',
    longDescription: 'Learn to create beautiful, native iOS applications using Swift programming language and SwiftUI framework.',
    duration: '6 Months',
    level: 'Intermediate',
    category: 'Mobile Development',
    university: 'NextGenCampus',
    image: 'advance-web-dev',
    price: 2799,
    originalPrice: 3799,
    rating: 4.5,
    studentsCount: 7200,
    instructor: {
      name: 'Rohit Sir',
      title: 'Senior Mobile Developer',
      image: 'rohitsir',
      experience: '6+ years at Facebook, Uber'
    },
    features: [
      'Swift programming',
      'SwiftUI framework',
      'iOS app architecture',
      'App Store deployment',
      'Core Data integration'
    ],
    curriculum: [
      { module: 'Swift Fundamentals', lessons: 16, duration: '3 weeks' },
      { module: 'SwiftUI Development', lessons: 18, duration: '3 weeks' },
      { module: 'iOS Architecture', lessons: 14, duration: '2 weeks' },
      { module: 'App Store Deployment', lessons: 12, duration: '2 weeks' }
    ],
    requirements: [
      'Basic programming knowledge',
      'macOS development environment',
      'Understanding of mobile concepts'
    ],
    whatYouWillLearn: [
      'Program in Swift',
      'Build SwiftUI interfaces',
      'Design iOS architecture',
      'Integrate with APIs',
      'Deploy to App Store',
      'Handle user data'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-04-25'
  },
  {
    id: 'android-kotlin',
    title: 'Android Development with Kotlin',
    description: 'Create native Android apps with Kotlin and Jetpack Compose',
    longDescription: 'Master Android development using Kotlin programming language and modern Jetpack Compose for building beautiful UIs.',
    duration: '6 Months',
    level: 'Intermediate',
    category: 'Mobile Development',
    university: 'NextGenCampus',
    image: 'advance-web-dev',
    price: 2699,
    originalPrice: 3699,
    rating: 4.4,
    studentsCount: 8900,
    instructor: {
      name: 'Rohit Sir',
      title: 'Senior Mobile Developer',
      image: 'rohitsir',
      experience: '6+ years at Facebook, Uber'
    },
    features: [
      'Kotlin programming',
      'Jetpack Compose',
      'Android architecture',
      'Google Play deployment',
      'Material Design'
    ],
    curriculum: [
      { module: 'Kotlin Basics', lessons: 14, duration: '3 weeks' },
      { module: 'Jetpack Compose', lessons: 16, duration: '3 weeks' },
      { module: 'Android Architecture', lessons: 12, duration: '2 weeks' },
      { module: 'Play Store Deployment', lessons: 10, duration: '2 weeks' }
    ],
    requirements: [
      'Basic programming knowledge',
      'Android Studio setup',
      'Understanding of mobile development'
    ],
    whatYouWillLearn: [
      'Program in Kotlin',
      'Build Compose UIs',
      'Design Android architecture',
      'Integrate with services',
      'Deploy to Play Store',
      'Follow Material Design'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-05-01'
  },
  // Additional Blockchain Courses
  {
    id: 'ethereum-development',
    title: 'Ethereum Smart Contract Development',
    description: 'Build and deploy smart contracts on Ethereum blockchain',
    longDescription: 'Learn to develop, test, and deploy smart contracts on Ethereum using Solidity and development tools.',
    duration: '4 Months',
    level: 'Intermediate',
    category: 'Blockchain',
    university: 'NextGenCampus',
    image: 'advance-programming-fundamentals',
    price: 2499,
    originalPrice: 3499,
    rating: 4.6,
    studentsCount: 5800,
    instructor: {
      name: 'Mohit Sir',
      title: 'Blockchain Engineer',
      image: 'mohit-sir',
      experience: '5+ years in DeFi protocols'
    },
    features: [
      'Solidity programming',
      'Smart contract testing',
      'DeFi protocols',
      'Gas optimization',
      'Security best practices'
    ],
    curriculum: [
      { module: 'Solidity Programming', lessons: 16, duration: '3 weeks' },
      { module: 'Smart Contract Testing', lessons: 12, duration: '2 weeks' },
      { module: 'DeFi Development', lessons: 14, duration: '3 weeks' },
      { module: 'Security & Optimization', lessons: 10, duration: '2 weeks' }
    ],
    requirements: [
      'JavaScript knowledge',
      'Understanding of blockchain',
      'Basic cryptography concepts'
    ],
    whatYouWillLearn: [
      'Write Solidity contracts',
      'Test smart contracts',
      'Build DeFi protocols',
      'Optimize gas usage',
      'Implement security measures',
      'Deploy to Ethereum'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-05-05'
  },
  {
    id: 'nft-development',
    title: 'NFT Development & Marketplace Creation',
    description: 'Create NFT collections and build NFT marketplaces',
    longDescription: 'Learn to create NFT collections, build NFT marketplaces, and understand the NFT ecosystem and business models.',
    duration: '3 Months',
    level: 'Intermediate',
    category: 'Blockchain',
    university: 'NextGenCampus',
    image: 'advance-programming-fundamentals',
    price: 1999,
    originalPrice: 2799,
    rating: 4.3,
    studentsCount: 4200,
    instructor: {
      name: 'Mohit Sir',
      title: 'Blockchain Engineer',
      image: 'mohit-sir',
      experience: '5+ years in DeFi protocols'
    },
    features: [
      'NFT creation',
      'Marketplace development',
      'IPFS integration',
      'Metadata standards',
      'Business models'
    ],
    curriculum: [
      { module: 'NFT Standards', lessons: 10, duration: '2 weeks' },
      { module: 'NFT Creation', lessons: 12, duration: '2 weeks' },
      { module: 'Marketplace Development', lessons: 14, duration: '3 weeks' },
      { module: 'Business Models', lessons: 8, duration: '2 weeks' }
    ],
    requirements: [
      'Basic blockchain knowledge',
      'JavaScript/TypeScript',
      'Understanding of NFTs'
    ],
    whatYouWillLearn: [
      'Create NFT collections',
      'Build NFT marketplaces',
      'Integrate with IPFS',
      'Implement metadata standards',
      'Design business models',
      'Deploy NFT projects'
    ],
    certificate: true,
    language: 'English',
    startDate: '2024-05-10'
  }
];

export const categories = [
  'All Courses',
  'Web Development',
  'Data Science',
  'Cybersecurity',
  'Cloud Computing',
  'Mobile Development',
  'Blockchain',
  'AI & Machine Learning',
  'DevOps',
  'UI/UX Design'
];
