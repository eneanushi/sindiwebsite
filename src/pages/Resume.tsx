import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // This would typically download a PDF file
    // For now, we'll create a placeholder
    alert('PDF download functionality will be implemented when the resume PDF is ready.');
  };

  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-header">
          <h1 className="page-title">Resume</h1>
          <button className="download-button" onClick={handleDownload}>
            Download PDF
          </button>
        </div>

        <div className="resume-content">
          <div className="resume-sidebar">
            <div className="sidebar-section">
              <div className="sidebar-icon">🎓</div>
              <h3>Education</h3>
            </div>
            <div className="sidebar-section">
              <div className="sidebar-icon">🛠️</div>
              <h3>Skills</h3>
            </div>
            <div className="sidebar-section">
              <div className="sidebar-icon">💼</div>
              <h3>Experience</h3>
            </div>
          </div>

          <div className="resume-main">
            {/* Education Section */}
            <section className="resume-section">
              <h2 className="section-heading">Education</h2>
              <div className="resume-item">
                <div className="item-header">
                  <h3>Visual Design Major</h3>
                  <span className="item-date">2024 - 2026</span>
                </div>
                <p className="item-location">University Name</p>
                <p className="item-description">
                  Pursuing advanced studies in visual design with focus on editorial design, 
                  typography, and brand identity. Coursework includes design theory, digital 
                  media, and professional practice.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section className="resume-section">
              <h2 className="section-heading">Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Design Tools</h4>
                  <ul>
                    <li>Figma</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe InDesign</li>
                    <li>After Effects</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Design Disciplines</h4>
                  <ul>
                    <li>Editorial Design</li>
                    <li>Typography</li>
                    <li>Brand Identity</li>
                    <li>Motion Graphics</li>
                    <li>UI/UX Design</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Additional</h4>
                  <ul>
                    <li>Photo Editing</li>
                    <li>Video Editing</li>
                    <li>Print Design</li>
                    <li>Digital Design</li>
                    <li>Prototyping</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="resume-section">
              <h2 className="section-heading">Experience</h2>
              
              <div className="resume-item">
                <div className="item-header">
                  <h3>Visual Design Student</h3>
                  <span className="item-date">2024 - Present</span>
                </div>
                <p className="item-location">University</p>
                <p className="item-description">
                  Currently pursuing advanced studies in visual design. Working on various 
                  projects including editorial design, brand identity, and motion graphics. 
                  Participating in exhibitions and collaborative projects.
                </p>
                <ul className="item-list">
                  <li>Created visual identities for cultural events and exhibitions</li>
                  <li>Designed promotional materials including posters and digital content</li>
                  <li>Collaborated on interdisciplinary design projects</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="item-header">
                  <h3>Photo/Video Editor</h3>
                  <span className="item-date">2022 - 2024</span>
                </div>
                <p className="item-location">Freelance / Various Clients</p>
                <p className="item-description">
                  Provided professional photo and video editing services for various clients. 
                  Specialized in post-production, color grading, and visual storytelling.
                </p>
                <ul className="item-list">
                  <li>Edited and enhanced photographs for commercial and artistic purposes</li>
                  <li>Created video content with attention to pacing and visual flow</li>
                  <li>Maintained consistent visual quality across projects</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="item-header">
                  <h3>Design Collaborations</h3>
                  <span className="item-date">2024</span>
                </div>
                <p className="item-location">Various Projects</p>
                <p className="item-description">
                  Collaborated on design projects including exhibition visual identities, 
                  event posters, and promotional materials for cultural centers.
                </p>
              </div>
            </section>

            {/* Additional Section */}
            <section className="resume-section">
              <h2 className="section-heading">Exhibitions & Events</h2>
              <div className="resume-item">
                <p className="item-description">
                  Participated in design exhibitions and created visual materials for various 
                  cultural events and center activities. Work has been featured in student 
                  showcases and collaborative exhibitions.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;



