import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollVelocity from '../components/ScrollVelocity';
import './Home.css';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const featuredWorks = [
    {
      id: 1,
      title: 'Malësia Tea',
      description: 'Featured design project presentation',
      coverImage: '/coverproject1.png'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Coming soon',
      placeholder: true
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Coming soon',
      placeholder: true
    }
  ];


  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-container">
          <div className="hero-image-wrapper">
            <img src="/background3.jpeg" alt="Sindi Lluka" className="hero-image" />
          </div>
          <h1 className="hero-name">SINDI LLUKA</h1>
          <ScrollVelocity
            texts={['UI/UX • Graphic Design • Branding • Photography •']}
            velocity={100}
            className="custom-scroll-text"
          />
          <div className="hero-footer">
            <a href="/contact" className="get-in-touch">
              Get in touch →
            </a>
            <span className="hero-timezone">// Boston EDT (UTC-4)</span>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="selected-works" className="selected-works-section">
        <div className="container">
          <h2 className="section-title">Selected Works</h2>
          <div className="works-grid">
            {featuredWorks.map((work) => (
              <div
                key={work.id}
                className="work-card"
                onClick={() => navigate('/projects')}
                style={{ cursor: 'pointer' }}
              >
                <div className="work-image">
                  {work.coverImage ? (
                    <img
                      src={work.coverImage}
                      alt={work.title}
                      className="work-cover-image"
                    />
                  ) : (
                    <div className="work-placeholder">
                      <span>{work.title}</span>
                    </div>
                  )}
                  {work.id === 1 && (
                    <div className="work-pdf-badge">PDF</div>
                  )}
                </div>
                <div className="work-overlay">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <span className="view-project">View Project →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Tools</h2>
          <div className="skills-row">
            <div className="skill-item">
              <div className="skill-icon">F</div>
              <span>Figma</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">AI</div>
              <span>Adobe Illustrator</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">PS</div>
              <span>Photoshop</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">T</div>
              <span>Typography</span>
            </div>
            <div className="skill-item">
              <div className="skill-icon">M</div>
              <span>Motion Basics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <h2 className="section-title">Design Philosophy</h2>
          <p className="philosophy-text">
            Design is not just about aesthetics—it's about creating meaningful connections 
            between ideas and audiences. I believe in clarity, purpose, and emotional resonance. 
            Every visual solution should tell a story, solve a problem, and inspire action. 
            Through careful attention to typography, color, and composition, I craft experiences 
            that are both beautiful and functional.
          </p>
          <div className="gold-line"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;

