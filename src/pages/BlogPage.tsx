import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
// import an example thumbnail from assets (Vite will bundle this)
import reactThumb from '../assets/react.svg';

const BlogPage: React.FC = () => {
  const posts = [
    {
      id: '1',
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI-powered tools to new frameworks.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: reactThumb
    },
    {
      id: '2',
      title: 'Getting Started with Machine Learning: A Complete Guide',
      excerpt: 'Learn the fundamentals of machine learning and how to build your first ML model from scratch.',
      author: 'Dr. Michael Chen',
      date: '2024-01-12',
      readTime: '8 min read',
      image: undefined
    },
    {
      id: '3',
      title: 'How to Build a Professional Developer Portfolio',
      excerpt: 'A practical guide to choosing projects, telling your story, and showcasing impact to hiring teams.',
      author: 'Rohit Kumar',
      date: '2024-02-10',
      readTime: '7 min read',
      image: '/src/assets/react.svg'
    }
  ];

  return (
    <div className="blog-page simple">
      <div className="blog-header container">
        <h1>NextGenCampus Blog</h1>
        <p style={{ color: "var(--neutral-600)" }}>Short selection of featured posts — click a post to read it.</p>
      </div>

      <div className="blog-content container">
        <div className="posts-grid simple-grid">
          {posts.map(post => (
            <article key={post.id} className="post-card simple">
              {post.image ? (
                <div className="post-thumb">
                  <img src={post.image} alt={`Thumbnail for ${post.title}`} />
                </div>
              ) : (
                <div className="post-thumb placeholder" aria-hidden>
                  <div className="placeholder-content">No image</div>
                </div>
              )}
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-footer simple-footer">
                <div className="author-info">
                  <span className="post-author">{post.author}</span>
                  <span className="post-meta">{post.date} • {post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`} className="read-more-link">Read More →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
