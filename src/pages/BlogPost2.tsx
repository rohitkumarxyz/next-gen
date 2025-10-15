import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

const BlogPost2: React.FC = () => {
  return (
    <div className="blog-article container">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <h1>Getting Started with Machine Learning</h1>
      <p className="article-meta">By Dr. Michael Chen • Jan 12, 2024 • 8 min read</p>
      <p>
        Machine learning can seem intimidating at first. This friendly guide walks you through the basics,
        data preparation, model selection, and how to train a simple model using common tools and libraries.
      </p>
      <p>This is a demo blog post so the Read More links from the Blog page work end-to-end.</p>
    </div>
  );
};

export default BlogPost2;
