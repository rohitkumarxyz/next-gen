import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPost3: React.FC = () => {
  return (
    <div className="blog-article container">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <h1>How to Build a Professional Developer Portfolio</h1>
      <p className="article-meta">By Rohit Kumar • Feb 10, 2024 • 7 min read</p>
      <p>
        A well-crafted portfolio is essential for developers who want to present their skills professionally.
        This article walks through selecting projects, writing clear case studies, showcasing results, optimizing
        for performance and accessibility, and tips for hosting and promoting your portfolio.
      </p>
      <p>This article is intentionally concise but practical — ideal for developers preparing to apply for roles.</p>
    </div>
  );
};

export default BlogPost3;
