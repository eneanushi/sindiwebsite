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
      link: '/projects?category=graphic-design',
      text: 'Graphic Design',
      image: '/coverproject1.png'
    },
    {
      link: '/projects?category=photography-media',
      text: 'Photography & Media',
      image: '/coverproject1.png'
    },
    {
      link: '/projects?category=drawings',
      text: 'Drawings',
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
            texts={['Graphic Design • Photography & Media • Drawings •']}
            velocity={100}
            className="custom-scroll-text"
          />
          <div className="hero-footer">
            <a href="/about" className="get-in-touch">
              Learn more →
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

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <img src="/me.jpeg" alt="Sindi Lluka" className="about-image" />
          </div>
          <div className="about-content">
            <div className="about-main">
              <h2 className="about-name">Sindi Lluka</h2>
              <p className="about-description">
                is a Visual Design student at Bunker Hill Community College with a strong focus on creating clear, meaningful, and effective visual solutions.
              </p>
              <div className="about-skills">
                <span>// Graphic Design</span>
                <span>// Photography & Media</span>
                <span>// Drawing</span>
              </div>
              <p className="about-background">
                She has completed 50+ digital design projects across product design, branding, and promotional media, supported by strong skills in Adobe Creative Suite, Figma, HTML, and CSS. Her experience as a Student Ambassador and former Photo/Video Editor has strengthened her ability to communicate visually, lead creative initiatives, and collaborate with diverse teams. With a growing interest in modern web tools like React and TypeScript, and a background in Business Law that sharpens her critical thinking, Sindi is driven to produce thoughtful, high-impact design work across digital platforms.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-line"></div>
                <div className="stat-content">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years of experience</span>
                </div>
                <div className="stat-line"></div>
              </div>
              <div className="stat-item">
                <div className="stat-line"></div>
                <div className="stat-content">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects completed</span>
                </div>
                <div className="stat-line"></div>
              </div>
              <div className="stat-item">
                <div className="stat-line"></div>
                <div className="stat-content">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Companies worked for</span>
                </div>
                <div className="stat-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="selected-works" 
        className="selected-works-section"
      >
        <div className="container">
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-menu-wrapper" style={{ height: '350px', position: 'relative' }}>
          <FlowingMenu items={projectCategories} />
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Tools</h2>
          <div className="skills-grid">
            <div className="skill-card skill-card-figma">
              <div className="skill-logo">
                <img src="/figmalogo.png" alt="Figma" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">Figma</h3>
              <p className="skill-description">UI/UX Design</p>
            </div>
            
            <div className="skill-card skill-card-adobe">
              <div className="skill-logo">
                <img src="/adobeilogo.png" alt="Adobe Illustrator" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">Adobe Illustrator</h3>
              <p className="skill-description">Vector Graphics</p>
            </div>
            
            <div className="skill-card skill-card-photoshop">
              <div className="skill-logo">
                <img src="/photoshoplogo.png" alt="Photoshop" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">Photoshop</h3>
              <p className="skill-description">Photo Editing</p>
            </div>
            
            <div className="skill-card skill-card-aftereffects">
              <div className="skill-logo">
                <img src="/aftereffects.png" alt="After Effects" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">After Effects</h3>
              <p className="skill-description">Motion Graphics</p>
            </div>
            
            <div className="skill-card skill-card-indesign">
              <div className="skill-logo">
                <img src="/indesignlogo.png" alt="InDesign" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">InDesign</h3>
              <p className="skill-description">Layout Design</p>
            </div>
            
            <div className="skill-card skill-card-premiere">
              <div className="skill-logo">
                <img src="/premierpro.png" alt="Premiere Pro" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">Premiere Pro</h3>
              <p className="skill-description">Video Editing</p>
            </div>
            
            <div className="skill-card skill-card-cursor">
              <div className="skill-logo">
                <img src="/cursorlogo.png" alt="Cursor" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">Cursor</h3>
              <p className="skill-description">Code Editor</p>
            </div>
            
            <div className="skill-card skill-card-express">
              <div className="skill-logo">
                <img src="/expresslogo.png" alt="Adobe Express" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">Adobe Express</h3>
              <p className="skill-description">Quick Design</p>
            </div>
            
            <div className="skill-card skill-card-typography">
              <div className="skill-logo">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="12" fill="url(#typography-gradient)"/>
                  <defs>
                    <linearGradient id="typography-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D4AF37"/>
                      <stop offset="1" stopColor="#F5D76E"/>
                    </linearGradient>
                  </defs>
                  <text x="24" y="32" fontSize="28" fontWeight="700" fill="white" textAnchor="middle" fontFamily="serif">Aa</text>
                </svg>
              </div>
              <h3 className="skill-name">Typography</h3>
              <p className="skill-description">Type Design</p>
            </div>
            
            <div className="skill-card skill-card-capcut">
              <div className="skill-logo">
                <img src="/capcut.png" alt="CapCut" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">CapCut</h3>
              <p className="skill-description">Video Editing</p>
            </div>
            
            <div className="skill-card skill-card-canva">
              <div className="skill-logo">
                <img src="/canva.png" alt="Canva" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">Canva</h3>
              <p className="skill-description">Graphic Design</p>
            </div>
            
            <div className="skill-card skill-card-lightroom">
              <div className="skill-logo">
                <img src="/lightroomlogo.png" alt="Lightroom" className="skill-logo-img" />
              </div>
              <h3 className="skill-name">Lightroom</h3>
              <p className="skill-description">Photo Editing</p>
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

