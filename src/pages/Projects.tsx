import React, { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tools: string[];
  credits: string;
  role: string;
  images: string[];
  pdfUrl?: string;
  isPdf?: boolean;
  coverImage?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Malësia Tea',
      description: 'Featured design project presentation',
      problem: 'Creating a comprehensive design solution that addresses client needs.',
      solution: 'Developed a complete design approach with careful attention to detail and user experience.',
      tools: ['Design', 'Visual Communication', 'Creative Direction'],
      credits: 'Sindi Lluka',
      role: 'Designer',
      images: [],
      pdfUrl: '/project1.pdf',
      isPdf: true,
      coverImage: '/coverproject1.png'
    },
    {
      id: 2,
      title: 'Editorial Design System',
      description: 'A comprehensive design system for a literary magazine',
      problem: 'The publication needed a cohesive visual identity that could work across print and digital platforms.',
      solution: 'Created a flexible design system with custom typography, color palette, and layout guidelines that maintain consistency while allowing for creative expression.',
      tools: ['Figma', 'Adobe InDesign', 'Typography'],
      credits: 'Client: Literary Magazine',
      role: 'Lead Designer',
      images: ['image1', 'image2', 'image3']
    },
    {
      id: 3,
      title: 'Brand Identity Package',
      description: 'Complete brand identity for a cultural center',
      problem: 'The center lacked a unified visual presence across all touchpoints.',
      solution: 'Developed a complete brand identity including logo, color system, typography, and application guidelines for print and digital media.',
      tools: ['Adobe Illustrator', 'Figma', 'Photoshop'],
      credits: 'Client: Cultural Center',
      role: 'Visual Designer',
      images: ['image1', 'image2', 'image3']
    },
    {
      id: 4,
      title: 'Motion Graphics Series',
      description: 'Animated promotional videos for events',
      problem: 'Static promotional materials were not engaging the target audience effectively.',
      solution: 'Created a series of motion graphics that combined typography, illustration, and animation to create dynamic, memorable promotional content.',
      tools: ['After Effects', 'Illustrator', 'Motion Basics'],
      credits: 'Client: Event Center',
      role: 'Motion Designer',
      images: ['image1', 'image2', 'image3']
    },
    {
      id: 5,
      title: 'Poster Collection',
      description: 'A series of event posters with editorial aesthetic',
      problem: 'Event posters needed to stand out while maintaining a sophisticated, editorial look.',
      solution: 'Designed a collection of posters using bold typography, strategic use of negative space, and a refined color palette that creates visual impact.',
      tools: ['Adobe Illustrator', 'Photoshop', 'Typography'],
      credits: 'Client: Various Events',
      role: 'Graphic Designer',
      images: ['image1', 'image2', 'image3']
    },
    {
      id: 6,
      title: 'Digital Publication Layout',
      description: 'Interactive digital magazine layout',
      problem: 'The publication needed an engaging digital format that preserved the editorial quality of print.',
      solution: 'Designed an interactive layout system that enhances the reading experience with thoughtful typography, spacing, and subtle animations.',
      tools: ['Figma', 'Prototyping', 'Typography'],
      credits: 'Client: Digital Magazine',
      role: 'UI/UX Designer',
      images: ['image1', 'image2', 'image3']
    },
    {
      id: 7,
      title: 'Exhibition Visual Identity',
      description: 'Complete visual identity for an art exhibition',
      problem: 'The exhibition needed a visual identity that complemented the artwork without competing with it.',
      solution: 'Created a minimal, elegant identity system with subtle gold accents and refined typography that enhances the exhibition experience.',
      tools: ['Adobe Illustrator', 'InDesign', 'Typography'],
      credits: 'Client: Art Gallery',
      role: 'Visual Designer',
      images: ['image1', 'image2', 'image3']
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="container">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">A selection of my recent work</p>
        </div>
      </div>

      <div className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => openModal(project)}
              >
                <div className="project-image">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="project-cover-image"
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span>{project.title}</span>
                    </div>
                  )}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-underline"></div>
                </div>
                <div className="project-overlay">
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            {selectedProject.isPdf && selectedProject.pdfUrl ? (
              /* PDF Viewer Layout */
              <div className="pdf-viewer-container">
                <div className="pdf-header">
                  <div className="pdf-title-section">
                    <h2>{selectedProject.title}</h2>
                    <div className="pdf-meta">
                      <span className="pdf-role">{selectedProject.role}</span>
                      <span className="pdf-credits">{selectedProject.credits}</span>
                    </div>
                  </div>
                  <div className="pdf-controls">
                    <a
                      href={selectedProject.pdfUrl}
                      download
                      className="pdf-button download-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 14L6 10H8.5V4H11.5V10H14L10 14Z" fill="currentColor"/>
                        <path d="M4 16H16V18H4V16Z" fill="currentColor"/>
                      </svg>
                      Download PDF
                    </a>
                    <a
                      href={selectedProject.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-button fullscreen-button"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H8V6H6V8H4V4Z" fill="currentColor"/>
                        <path d="M16 4H12V6H14V8H16V4Z" fill="currentColor"/>
                        <path d="M4 16H8V14H6V12H4V16Z" fill="currentColor"/>
                        <path d="M16 16H12V14H14V12H16V16Z" fill="currentColor"/>
                      </svg>
                      Open Full View
                    </a>
                  </div>
                </div>

                <div className="pdf-viewer-wrapper">
                  <iframe
                    src={`${selectedProject.pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                    className="pdf-iframe"
                    title={selectedProject.title}
                  />
                </div>

                <div className="pdf-description">
                  <div className="description-section">
                    <h3>About This Project</h3>
                    <p>{selectedProject.solution}</p>
                  </div>
                  <div className="description-section">
                    <h3>Tools & Skills</h3>
                    <div className="tools-list">
                      {selectedProject.tools.map((tool, index) => (
                        <span key={index} className="tool-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Regular Project Layout */
              <>
                <div className="modal-hero">
                  <div className="modal-hero-image">
                    <div className="modal-placeholder-large">
                      <span>{selectedProject.title}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-body">
                  <div className="modal-header">
                    <h2>{selectedProject.title}</h2>
                    <div className="modal-meta">
                      <span className="modal-role">{selectedProject.role}</span>
                      <span className="modal-credits">{selectedProject.credits}</span>
                    </div>
                  </div>

                  <div className="modal-description">
                    <div className="description-section">
                      <h3>The Problem</h3>
                      <p>{selectedProject.problem}</p>
                    </div>
                    <div className="description-section">
                      <h3>The Solution</h3>
                      <p>{selectedProject.solution}</p>
                    </div>
                    <div className="description-section">
                      <h3>Tools Used</h3>
                      <div className="tools-list">
                        {selectedProject.tools.map((tool, index) => (
                          <span key={index} className="tool-tag">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {selectedProject.images.length > 0 && (
                    <div className="modal-gallery">
                      <h3>Gallery</h3>
                      <div className="gallery-strip">
                        {selectedProject.images.map((img, index) => (
                          <div key={index} className="gallery-item">
                            <div className="gallery-placeholder">
                              <span>Image {index + 1}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

