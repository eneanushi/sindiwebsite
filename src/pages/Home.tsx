import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import { brandingProjects } from '../data/projectsData';
import './Home.css';

// Custom hook for scroll-triggered animations
const useInView = (options = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
};

// Custom hook for parallax effect
const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

// Gallery preview images (curated selection)
const galleryPreview = [
  '/gallery/buildings/IMG_9737 2.jpeg',
  '/gallery/buildings/IMG_3672 2.jpeg',
  '/gallery/drawings/IMG_1664.jpeg',
  '/gallery/buildings/IMG_3401 2.jpeg',
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const scrollY = useParallax();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Section refs for scroll animations
  const heroRef = useInView();
  const aboutRef = useInView();
  const projectsRef = useInView();
  const galleryRef = useInView();
  const skillsRef = useInView();
  const philosophyRef = useInView();

  // Mouse tracking for hero section
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about-snippet');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skills = [
    { name: 'Figma', icon: '/figmalogo.png', category: 'UI/UX Design' },
    { name: 'Illustrator', icon: '/adobeilogo.png', category: 'Vector Graphics' },
    { name: 'Photoshop', icon: '/photoshoplogo.png', category: 'Photo Editing' },
    { name: 'After Effects', icon: '/aftereffects.png', category: 'Motion Graphics' },
    { name: 'InDesign', icon: '/indesignlogo.png', category: 'Layout Design' },
    { name: 'Premiere Pro', icon: '/premierpro.png', category: 'Video Editing' },
    { name: 'Lightroom', icon: '/lightroomlogo.png', category: 'Photo Editing' },
    { name: 'Canva', icon: '/canva.png', category: 'Quick Design' },
  ];

  return (
    <div className="home-page-new" onMouseMove={handleMouseMove}>
      {/* Hero Section */}
      <section 
        className={`hero-section-new ${heroRef.isInView ? 'visible' : ''}`}
        ref={heroRef.ref as React.RefObject<HTMLElement>}
      >
        {/* Animated Background Elements */}
        <div className="hero-bg-elements">
          <div 
            className="bg-orb bg-orb-1"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
          />
          <div 
            className="bg-orb bg-orb-2"
            style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
          />
          <div className="bg-grid" />
        </div>

        <div className="hero-container-new">
          {/* Hero Image */}
          <div 
            className="hero-image-frame"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="image-glow" />
            <img src="/background3.jpeg" alt="Sindi Lluka" className="hero-main-image" />
            <div className="image-overlay-gradient" />
            
            {/* Visual Designer Label - Positioned on image */}
            <div className="hero-role-label">
              <span className="role-line"></span>
              <span className="role-text">Visual Designer</span>
              <span className="role-line"></span>
            </div>
          </div>

          {/* Name Below Image */}
          <h1 className="hero-name-large">
            <span className="name-first">SINDI</span>
            <span className="name-spacer"></span>
            <span className="name-last">LLUKA</span>
          </h1>

          {/* Hero Content Below Name */}
          <div className="hero-content-new">
            {/* Animated Skills Text - Full Width */}
            <div className="skills-flow">
              <div className="skills-track-hero">
                <span className="skill-text">Graphic Design</span>
                <span className="skill-dot">•</span>
                <span className="skill-text">Photography & Media</span>
                <span className="skill-dot">•</span>
                <span className="skill-text">Drawings</span>
                <span className="skill-dot">•</span>
                <span className="skill-text">Graphic Design</span>
                <span className="skill-dot">•</span>
                <span className="skill-text">Photography & Media</span>
                <span className="skill-dot">•</span>
                <span className="skill-text">Drawings</span>
                <span className="skill-dot">•</span>
                <span className="skill-text">Graphic Design</span>
                <span className="skill-dot">•</span>
                <span className="skill-text">Photography & Media</span>
                <span className="skill-dot">•</span>
                <span className="skill-text">Drawings</span>
                <span className="skill-dot">•</span>
              </div>
            </div>

            <div className="hero-cta-group">
              <button 
                className="hero-cta-primary"
                onClick={() => navigate('/projects')}
              >
                <span>View Projects</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button 
                className="hero-cta-secondary"
                onClick={() => navigate('/about')}
              >
                <span>About Me</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section 
        id="about-snippet"
        className={`about-snippet-section ${aboutRef.isInView ? 'visible' : ''}`}
        ref={aboutRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="about-snippet-container">
          <div className="about-snippet-image">
            <div className="image-accent-border" />
            <img src="/me.jpeg" alt="Sindi Lluka" />
          </div>

          <div className="about-snippet-content">
            <div className="snippet-header">
              <span className="snippet-label">About</span>
              <h2 className="snippet-title">
                Creating meaningful visual experiences
              </h2>
            </div>

            <p className="snippet-text">
              Visual Design student at Bunker Hill Community College with a strong focus on 
              creating clear, meaningful, and effective visual solutions. With 50+ completed 
              projects across branding, product design, and promotional media.
            </p>

            <div className="snippet-stats">
              <div className="stat-block">
                <span className="stat-value">3+</span>
                <span className="stat-desc">Years Experience</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-block">
                <span className="stat-value">50+</span>
                <span className="stat-desc">Projects</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-block">
                <span className="stat-value">2</span>
                <span className="stat-desc">Companies</span>
              </div>
            </div>

            {/* Contact Links */}
            <div className="snippet-contact">
              <a 
                href="https://www.linkedin.com/in/sindi-lluka/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-pill linkedin"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:sindi.lluka@bhcc.edu"
                className="contact-pill email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>sindi.lluka@bhcc.edu</span>
              </a>
            </div>

            <button 
              className="snippet-cta"
              onClick={() => navigate('/about')}
            >
              <span>Learn More About Me</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section 
        className={`featured-projects-section ${projectsRef.isInView ? 'visible' : ''}`}
        ref={projectsRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="section-header-new">
          <span className="section-number">01</span>
          <h2 className="section-title-new">Featured Work</h2>
          <p className="section-subtitle">Recent branding and design projects</p>
        </div>

        <div className="featured-projects-grid">
          {brandingProjects.slice(0, 2).map((project, index) => (
            <div 
              key={project.id}
              className="featured-project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => navigate('/projects?category=graphic-design&sub=branding')}
            >
              <div className="project-card-image">
                <LazyImage
                  src={project.coverImage}
                  alt={project.title}
                  className="project-cover"
                />
                <div className="project-card-overlay">
                  <span className="view-project-btn">View Project</span>
                </div>
              </div>
              <div className="project-card-info">
                <span className="project-year">{project.year}</span>
                <h3 className="project-name">{project.title}</h3>
                <div className="project-tools">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta-container">
          <button 
            className="projects-view-all"
            onClick={() => navigate('/projects')}
          >
            <span>Explore All Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section 
        className={`gallery-preview-section ${galleryRef.isInView ? 'visible' : ''}`}
        ref={galleryRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="section-header-new">
          <span className="section-number">02</span>
          <h2 className="section-title-new">Gallery Highlights</h2>
          <p className="section-subtitle">Photography, architecture, and drawings</p>
        </div>

        <div className="gallery-preview-grid">
          {galleryPreview.map((img, index) => (
            <div 
              key={index}
              className={`gallery-preview-item item-${index + 1}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate('/gallery')}
            >
              <LazyImage
                src={img}
                alt={`Gallery preview ${index + 1}`}
                className="gallery-preview-image"
              />
              <div className="gallery-item-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                  <path d="M11 8v6M8 11h6"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta-container">
          <button 
            className="gallery-view-all"
            onClick={() => navigate('/gallery')}
          >
            <span>View Full Gallery</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        className={`skills-section-new ${skillsRef.isInView ? 'visible' : ''}`}
        ref={skillsRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="section-header-new">
          <span className="section-number">03</span>
          <h2 className="section-title-new">Tools & Skills</h2>
          <p className="section-subtitle">Technologies I work with daily</p>
        </div>

        <div className="skills-marquee">
          <div className="skills-track">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={skill.name} className="skill-icon" />
                </div>
                <div className="skill-info">
                  <span className="skill-name-new">{skill.name}</span>
                  <span className="skill-category">{skill.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section 
        className={`philosophy-section-new ${philosophyRef.isInView ? 'visible' : ''}`}
        ref={philosophyRef.ref as React.RefObject<HTMLElement>}
      >
        <div className="philosophy-content">
          <div className="philosophy-quote-mark">"</div>
          <blockquote className="philosophy-quote">
            Design is not just about aesthetics—it's about creating meaningful connections 
            between ideas and audiences. Every visual solution should tell a story, 
            solve a problem, and inspire action.
          </blockquote>
          <div className="philosophy-author">
            <span className="author-line" />
            <span className="author-name">Sindi Lluka</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
