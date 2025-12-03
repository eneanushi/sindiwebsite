import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import './Home.css';

// Component to load and display the 3D model
const Model: React.FC = () => {
  const { scene } = useGLTF('/model.glb');
  return <primitive object={scene} scale={1.4} />;
};

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sculptureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sculptureRef.current) {
        const rect = sculptureRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (x - centerX) / 20;
        const moveY = (y - centerY) / 20;
        
        sculptureRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('selected-works');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        {/* Additional 3D Background Shapes */}
        <div className="bg-shape-1"></div>
        <div className="bg-shape-2"></div>
        <div className="bg-shape-3"></div>
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-name">ENEA NUSHI</h1>
            <p className="hero-subtitle">Visual Design Student & Creative Builder</p>
            <p className="hero-tagline">Clear. Meaningful. Aesthetic Visual Solutions.</p>
            <button className="hero-button" onClick={scrollToProjects}>
              Explore My Work
            </button>
          </div>
          <div className="hero-right">
            <div className="sculpture-wrapper">
              <div className="sculpture-glow"></div>
              <div className="sculpture-placeholder" ref={sculptureRef}>
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -5]} intensity={0.5} />
                    <Model />
                    <OrbitControls
                      enableZoom={false}
                      enablePan={false}
                      autoRotate
                      autoRotateSpeed={1}
                    />
                    <Environment preset="sunset" />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="selected-works" className="selected-works-section">
        <div className="container">
          <h2 className="section-title">Selected Works</h2>
          <div className="works-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="work-card">
                <div className="work-image">
                  <div className="work-placeholder">
                    <span>Project {item}</span>
                  </div>
                </div>
                <div className="work-overlay">
                  <h3>Project Title {item}</h3>
                  <p>Brief description of the project</p>
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

