import React, { useEffect, useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    // Set a timeout to show the quote after the typing animation ends (3 seconds)
    const timer = setTimeout(() => {
      setShowQuote(true);
    }); // Match this duration with the animation duration

    // Set a timeout to show the link after the quote and author animations end (5 seconds)
    const linkTimer = setTimeout(() => {
      setShowLink(true);
    }, 1000); // Duration for quote and author animation plus additional delay

    return () => {
      clearTimeout(timer);
      clearTimeout(linkTimer);
    };
  }, []);

  return (
    <div className="landing-container">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="typing-animation">Mechanical Engineering</h1>
        {showQuote && (
          <>
            <p className="quote">
              "Engineers turn dreams into reality, through innovation, design, and the relentless pursuit of perfection."
            </p>
            <p className="author">— James Dyson</p>
          </>
        )}
        {showLink && (
          <a href="/projects" className="project-link">
            <span className="arrow">&#8594;</span> {/* Right arrow character */}
            <span className="link-text">View Projects</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default LandingPage;