import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage';
import CoursesPage from './pages/CoursesPage';
import InstructorsPage from './pages/InstructorsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';
import DisclaimerPage from './pages/DisclaimerPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/1" element={<BlogPost1 />} />
            <Route path="/blog/2" element={<BlogPost2 />} />
            <Route path="/blog/3" element={<BlogPost3 />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;