import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollVelocity from '../components/ScrollVelocity';
import FlowingMenu from '../components/FlowingMenu';
import './Home.css';

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('selected-works');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const projectCategories = [
    {
      link: '/projects?category=ui-ux',
      text: 'UI/UX',
      image: '/coverproject1.png'
    },
    {
      link: '/projects?category=graphic-design',
      text: 'Graphic Design',
      image: '/coverproject1.png'
    },
    {
      link: '/projects?category=branding',
      text: 'Branding',
      image: '/coverproject1.png'
    },
    {
      link: '/projects?category=photography',
      text: 'Photography',
      image: '/coverproject1.png'
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
        <button className="scroll-down-button" onClick={scrollToNextSection} aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </section>

      {/* Projects Section */}
      <section 
        id="selected-works" 
        className="selected-works-section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/background14.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <h2 className="section-title">Work</h2>
        </div>
        <div className="projects-menu-wrapper" style={{ height: '600px', position: 'relative' }}>
          <FlowingMenu items={projectCategories} />
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

