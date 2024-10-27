// home.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = ({ isAuthenticated, onSignOut }) => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header>
        <h1>Aruj@Deakin</h1>
        <input type="text" placeholder="Search" className="search-bar" width={100}/>
        <div className="button-container">
          <button className="post-button" onClick={() => navigate('/post')}>Post</button>
          {isAuthenticated ? (
            <button className="sign-out-button" onClick={onSignOut}>Sign Out</button>
          ) : (
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>
          )}
        </div>
      </header>

      {/* New Content Section */}
      <main className="content">
        <section className="welcome-section">
          <h2>Welcome to Aruj@Deakin!</h2>
          <p>
            Explore the latest discussions, share your thoughts, and connect with like-minded people at Deakin University. We’re glad to have you here!
          </p>
        </section>

        <section className="featured-posts">
          <h3>Featured Posts</h3>
          <div className="posts-container">
            {/* Replace these with actual post data in the future */}
            <div className="post">
              <h4>Getting Started with Your Deakin Journey</h4>
              <p>Discover the essential resources to make the most of your time at Deakin...</p>
            </div>
            <div className="post">
              <h4>Top 10 Study Spots Around Campus</h4>
              <p>Explore the most popular study spots that students recommend for productivity...</p>
            </div>
            <div className="post">
              <h4>Tips for Balancing Studies and Social Life</h4>
              <p>Learn how to manage your time effectively and enjoy both academics and leisure...</p>
            </div>
          </div>
        </section>

        <section className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => navigate('/events')}>Upcoming Events</li>
            <li onClick={() => navigate('/resources')}>Student Resources</li>
            <li onClick={() => navigate('/community')}>Join the Community</li>
            <li onClick={() => navigate('/support')}>Support & Help</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;
