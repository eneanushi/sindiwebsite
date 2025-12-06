import React, { useEffect, useRef, useState, useCallback } from 'react';
import './About.css';

// Custom hook for count-up animation
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }
  }, [startOnView]);

  useEffect(() => {
    if (startOnView && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

// Intersection Observer hook for animations
const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.1, ...options });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

const About: React.FC = () => {
  // Animation refs
  const heroRef = useInView();
  const introRef = useInView();
  const skillsRef = useInView();
  const statsRef = useInView();
  const educationRef = useInView();
  const experienceRef = useInView();
  const projectsRef = useInView();
  const technicalRef = useInView();

  // Count-up stats
  const yearsCount = useCountUp(3, 2000);
  const projectsCount = useCountUp(50, 2500);
  const companiesCount = useCountUp(2, 1500);

  // Parallax effect for hero
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Graphic Design', icon: '◆' },
    { name: 'Photography & Media', icon: '◇' },
    { name: 'Drawing', icon: '○' }
  ];

  const technicalSkills = {
    'Design & Editing': ['Adobe Suite', 'Photoshop', 'Illustrator', 'InDesign', 'Lightroom', 'After Effects', 'Premiere Pro', 'Figma', 'Canva', 'Cursor'],
    'Web & UI/UX': ['HTML', 'CSS', 'Layout Design', 'Branding', 'Wireframing', 'Prototyping'],
    'Creative': ['Typography', 'Color Theory', 'Composition'],
    'Artistic': ['Drawing', 'Charcoal', 'Painting', 'Sculpting', 'Photography'],
    'Tools': ['Microsoft Office', 'Google Workspace'],
    'Soft Skills': ['Problem-Solving', 'Attention to Detail', 'Communication', 'Time Management']
  };

  const education = [
    {
      school: 'Bunker Hill Community College',
      degree: 'A.S. in Visual Design',
      details: '4.0 GPA • Dean\'s List',
      period: 'Expected 12/2026',
      current: true
    },
    {
      school: 'Tirana Business University (TBU)',
      degree: 'Business Law',
      details: 'Completed two years of coursework in legal and business principles',
      period: 'Albania',
      current: false
    }
  ];

  const experience = [
    {
      title: 'Student Ambassador',
      company: 'Bunker Hill Community College',
      period: '02/2025 – Present',
      points: [
        'Designed posters and promotional materials using Figma and Adobe Illustrator',
        'Guided 100+ new students, explaining campus resources and admissions',
        'Led 5+ tours on academics, student life, and services',
        'Strengthened leadership, communication, and public speaking skills'
      ]
    },
    {
      title: 'Photo & Video Editor',
      company: 'Kristal Photography Studio, Fier, Albania',
      period: '06/2022 – 06/2024',
      points: [
        'Produced 50+ posters and video projects, increasing media engagement',
        'Created branded social media content using Adobe tools',
        'Provided technical support to over 100 clients'
      ]
    }
  ];

  const projects = [
    {
      title: 'International Orientation Day',
      description: 'Posters and flyers viewed by 500+ attendees'
    },
    {
      title: 'Brand & Product Designing',
      description: 'Full magazine layout with structured typography'
    },
    {
      title: 'Portfolio Website',
      description: 'Built with TypeScript + React; used AI tools for productivity'
    }
  ];

  return (
    <div className="about-page-new">
      {/* Hero Section */}
      <section 
        className={`about-hero-section ${heroRef.isInView ? 'visible' : ''}`}
        ref={heroRef.ref}
      >
        <div className="hero-bg-pattern"></div>
        <div className="hero-content-wrapper">
          <div className="hero-image-container">
            <div 
              className="hero-image-parallax"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <img src="/me.jpeg" alt="Sindi Lluka" className="hero-portrait" />
              <div className="image-overlay"></div>
            </div>
            <div className="image-accent-frame"></div>
          </div>
          
          <div className="hero-text-content">
            <div className="name-label">
              <span className="label-line"></span>
              <span className="label-text">Visual Designer</span>
            </div>
            <h1 className="hero-name-title">
              <span className="name-line">Sindi</span>
              <span className="name-line accent">Lluka</span>
            </h1>
            <p className="hero-tagline">
              Visual Design student at Bunker Hill Community College with a strong focus on creating clear, meaningful, and effective visual solutions.
            </p>
          </div>
        </div>

        {/* Floating Skills Badges */}
        <div className="floating-skills">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="skill-badge"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className={`stats-section ${statsRef.isInView ? 'visible' : ''}`}
        ref={statsRef.ref}
      >
        <div className="stats-container">
          <div className="stat-card" ref={yearsCount.ref}>
            <div className="stat-number">{yearsCount.count}+</div>
            <div className="stat-divider"></div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-card" ref={projectsCount.ref}>
            <div className="stat-number">{projectsCount.count}+</div>
            <div className="stat-divider"></div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card" ref={companiesCount.ref}>
            <div className="stat-number">{companiesCount.count}</div>
            <div className="stat-divider"></div>
            <div className="stat-label">Companies Worked For</div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section 
        className={`intro-section ${introRef.isInView ? 'visible' : ''}`}
        ref={introRef.ref}
      >
        <div className="intro-container">
          <div className="section-label">
            <span className="label-number">01</span>
            <span className="label-title">About</span>
          </div>
          <div className="intro-content">
            <p className="intro-text">
              Sindi has completed <span className="highlight">50+ digital design projects</span> across product design, branding, and promotional media, supported by strong skills in <span className="highlight">Adobe Creative Suite, Figma, HTML, and CSS</span>. Her experience as a Student Ambassador and former Photo/Video Editor has strengthened her ability to communicate visually, lead creative initiatives, and collaborate with diverse teams.
            </p>
            <p className="intro-text">
              With a growing interest in modern web tools like <span className="highlight">React and TypeScript</span>, and a background in Business Law that sharpens her critical thinking, Sindi is driven to produce thoughtful, high-impact design work across digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section 
        className={`education-section ${educationRef.isInView ? 'visible' : ''}`}
        ref={educationRef.ref}
      >
        <div className="education-container">
          <div className="section-label">
            <span className="label-number">02</span>
            <span className="label-title">Education</span>
          </div>
          <div className="education-cards">
            {education.map((edu, index) => (
              <div 
                key={edu.school}
                className={`education-card ${edu.current ? 'current' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {edu.current && <div className="current-badge">Current</div>}
                <h3 className="edu-school">{edu.school}</h3>
                <h4 className="edu-degree">{edu.degree}</h4>
                <p className="edu-details">{edu.details}</p>
                <span className="edu-period">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        className={`experience-section ${experienceRef.isInView ? 'visible' : ''}`}
        ref={experienceRef.ref}
      >
        <div className="experience-container">
          <div className="section-label">
            <span className="label-number">03</span>
            <span className="label-title">Experience</span>
          </div>
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div 
                key={exp.title}
                className="experience-item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="experience-content">
                  <div className="exp-header">
                    <h3 className="exp-title">{exp.title}</h3>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <h4 className="exp-company">{exp.company}</h4>
                  <ul className="exp-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        className={`projects-section ${projectsRef.isInView ? 'visible' : ''}`}
        ref={projectsRef.ref}
      >
        <div className="projects-container">
          <div className="section-label">
            <span className="label-number">04</span>
            <span className="label-title">Notable Projects</span>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section 
        className={`technical-section ${technicalRef.isInView ? 'visible' : ''}`}
        ref={technicalRef.ref}
      >
        <div className="technical-container">
          <div className="section-label">
            <span className="label-number">05</span>
            <span className="label-title">Technical Skills</span>
          </div>
          <div className="skills-categories">
            {Object.entries(technicalSkills).map(([category, items], catIndex) => (
              <div 
                key={category}
                className="skill-category"
                style={{ animationDelay: `${catIndex * 0.1}s` }}
              >
                <h3 className="category-title">{category}</h3>
                <div className="skills-chips">
                  {items.map((skill, index) => (
                    <span 
                      key={skill}
                      className="skill-chip"
                      style={{ animationDelay: `${(catIndex * 0.1) + (index * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
