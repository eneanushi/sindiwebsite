import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import { 
  magazineProjects, 
  posterProjects,
  brandingProjects, 
  photographyPreview, 
  drawingsPreview,
  MagazineProject,
  PosterProject,
  BrandingProject
} from '../data/projectsData';
import './Projects.css';

// Intersection Observer hook
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

type MainCategory = 'photography' | 'graphic-design' | 'drawings';
type GraphicSubCategory = 'magazines' | 'posters' | 'branding';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<MainCategory>('graphic-design');
  const [graphicSubCategory, setGraphicSubCategory] = useState<GraphicSubCategory>('branding');
  const [selectedProject, setSelectedProject] = useState<MagazineProject | BrandingProject | null>(null);
  const [selectedPoster, setSelectedPoster] = useState<PosterProject | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animation refs
  const heroRef = useInView();
  const contentRef = useInView();

  const handleCategoryChange = useCallback((category: MainCategory) => {
    if (category === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  }, [activeCategory]);

  const handleSubCategoryChange = useCallback((subCat: GraphicSubCategory) => {
    if (subCat === graphicSubCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setGraphicSubCategory(subCat);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  }, [graphicSubCategory]);

  const openProjectModal = (project: MagazineProject | BrandingProject) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const navigateToGallery = (category: string) => {
    navigate(`/gallery?filter=${category}`);
  };

  // Main category labels (Graphic Design first, then Photography, then Drawings)
  const mainCategories: { id: MainCategory; label: string }[] = [
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'photography', label: 'Photography & Media' },
    { id: 'drawings', label: 'Drawings' },
  ];

  // Graphic design sub-categories
  const graphicSubCategories: { id: GraphicSubCategory; label: string }[] = [
    { id: 'branding', label: 'Product Design & Branding' },
    { id: 'magazines', label: 'Magazines' },
    { id: 'posters', label: 'Posters' },
  ];

  return (
    <div className="projects-page-new">
      {/* Hero Section */}
      <section 
        className={`projects-hero ${heroRef.isInView ? 'visible' : ''}`}
        ref={heroRef.ref}
      >
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-label">
            <span className="label-line"></span>
            <span>Creative Work</span>
          </div>
          <h1 className="hero-title">Projects</h1>
          <p className="hero-subtitle">
            A curated collection of design work spanning graphic design, 
            photography, and artistic illustrations
          </p>
        </div>

        {/* Main Category Navigation */}
        <nav className="category-nav">
          {mainCategories.map((cat) => (
            <button
              key={cat.id}
              className={`category-nav-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              <span className="cat-label">{cat.label}</span>
              <span className="cat-underline"></span>
            </button>
          ))}
        </nav>
      </section>

      {/* Content Section */}
      <section 
        className={`projects-content ${contentRef.isInView ? 'visible' : ''}`}
        ref={contentRef.ref}
      >
        <div className={`content-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
          
          {/* Photography & Media Section */}
          {activeCategory === 'photography' && (
            <div className="section-container photography-section">
              <div className="section-header">
                <div className="section-title-group">
                  <span className="section-number">01</span>
                  <h2 className="section-title">Photography & Media</h2>
                </div>
                <p className="section-description">
                  Capturing moments through the lens — from architectural photography 
                  to event coverage and creative portraits
                </p>
              </div>

              <div className="preview-masonry">
                {photographyPreview.map((item, index) => (
                  <div 
                    key={item.id}
                    className="masonry-item"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      height: `${item.height}px`
                    }}
                  >
                    <LazyImage
                      src={item.img}
                      alt="Photography"
                      className="masonry-image"
                    />
                  </div>
                ))}
              </div>

              <div className="section-cta">
                <button 
                  className="view-all-btn"
                  onClick={() => navigateToGallery('BHCC')}
                >
                  <span>View Full Collection</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Graphic Design Section */}
          {activeCategory === 'graphic-design' && (
            <div className="section-container graphic-design-section">
              {/* Sub-category Navigation */}
              <div className="sub-nav-container">
                <div className="sub-nav">
                  {graphicSubCategories.map((subCat) => (
                    <button
                      key={subCat.id}
                      className={`sub-nav-btn ${graphicSubCategory === subCat.id ? 'active' : ''}`}
                      onClick={() => handleSubCategoryChange(subCat.id)}
                    >
                      {subCat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Magazines Sub-section */}
              {graphicSubCategory === 'magazines' && (
                <div className="subsection magazines-subsection">
                  <div className="section-header">
                    <div className="section-title-group">
                      <span className="section-number">02.2</span>
                      <h2 className="section-title">Magazines</h2>
                    </div>
                    <p className="section-description">
                      Editorial design showcasing layout mastery, typography, and visual storytelling
                    </p>
                  </div>

                  <div className="projects-showcase">
                    {magazineProjects.map((project, index) => (
                      <div 
                        key={project.id}
                        className="project-showcase-card"
                        style={{ animationDelay: `${index * 0.15}s` }}
                      >
                        <div className="showcase-header">
                          <div className="showcase-meta">
                            <span className="project-year">{project.year}</span>
                            <span className="project-type">Magazine</span>
                          </div>
                          <h3 className="showcase-title">{project.title}</h3>
                          <p className="showcase-description">{project.description}</p>
                          <div className="showcase-tools">
                            {project.tools.map((tool) => (
                              <span key={tool} className="tool-chip">{tool}</span>
                            ))}
                          </div>
                        </div>

                        <div className="showcase-gallery">
                          <div className="gallery-grid magazine-grid">
                            {project.images.slice(0, 5).map((img, imgIndex) => (
                              <div 
                                key={imgIndex}
                                className={`gallery-item gallery-item-${imgIndex + 1}`}
                                onClick={() => openProjectModal(project)}
                              >
                                <LazyImage
                                  src={img}
                                  alt={`${project.title} - Page ${imgIndex + 1}`}
                                  className="gallery-image"
                                />
                                <div className="image-overlay">
                                  <span className="page-number">Page {imgIndex + 1}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="showcase-actions">
                          <button 
                            className="action-btn primary"
                            onClick={() => openProjectModal(project)}
                          >
                            <span>View Project</span>
                          </button>
                          <a 
                            href={project.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-btn secondary"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                              <polyline points="14,2 14,8 20,8"/>
                              <line x1="16" y1="13" x2="8" y2="13"/>
                              <line x1="16" y1="17" x2="8" y2="17"/>
                            </svg>
                            <span>View PDF</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Posters Sub-section */}
              {graphicSubCategory === 'posters' && (
                <div className="subsection posters-subsection">
                  <div className="section-header">
                    <div className="section-title-group">
                      <span className="section-number">02.3</span>
                      <h2 className="section-title">Posters</h2>
                    </div>
                    <p className="section-description">
                      Bold visual communication through poster design for events, campaigns, and educational materials
                    </p>
                  </div>

                  <div className="posters-grid">
                    {posterProjects.map((poster, index) => (
                      <div 
                        key={poster.id}
                        className="poster-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => {
                          setSelectedPoster(poster);
                          document.body.style.overflow = 'hidden';
                        }}
                      >
                        <div className="poster-image-wrapper">
                          <LazyImage
                            src={poster.image}
                            alt={poster.title}
                            className="poster-image"
                          />
                          <div className="poster-overlay">
                            <span className="view-poster-btn">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                                <path d="M11 8v6M8 11h6"/>
                              </svg>
                              View Poster
                            </span>
                          </div>
                        </div>
                        <div className="poster-info">
                          <div className="poster-meta">
                            <span className="poster-year">{poster.year}</span>
                          </div>
                          <h3 className="poster-title">{poster.shortTitle}</h3>
                          <p className="poster-description">{poster.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Design & Branding Sub-section */}
              {graphicSubCategory === 'branding' && (
                <div className="subsection branding-subsection">
                  <div className="section-header">
                    <div className="section-title-group">
                      <span className="section-number">02.1</span>
                      <h2 className="section-title">Product Design & Branding</h2>
                    </div>
                    <p className="section-description">
                      Complete brand identities and product packaging that tell compelling stories
                    </p>
                  </div>

                  {/* Side-by-Side Branding Cards */}
                  <div className="branding-dual-showcase">
                    {brandingProjects.map((project, index) => (
                      <div 
                        key={project.id}
                        className={`branding-showcase-card ${project.id}`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {/* Cover Image Background */}
                        <div className="card-bg-images">
                          <div 
                            className="bg-image bg-image-1"
                            style={{ backgroundImage: `url("${encodeURI(project.coverImage)}")` }}
                          />
                        </div>

                        {/* Gradient Overlay */}
                        <div className="card-gradient-overlay"></div>

                        {/* Content */}
                        <div className="card-content">
                          <div className="card-meta">
                            <span className="card-year">{project.year}</span>
                            <span className="card-type">
                              {project.id === 'eja-lounge' ? 'Restaurant Branding' : 'Product Branding'}
                            </span>
                          </div>
                          
                          <h3 className="card-title">{project.title}</h3>
                          
                          <p className="card-description">{project.description}</p>
                          
                          <div className="card-tools">
                            {project.tools.map((tool) => (
                              <span key={tool} className="card-tool">{tool}</span>
                            ))}
                          </div>

                          <div className="card-actions">
                            <button 
                              className="card-btn primary"
                              onClick={() => openProjectModal(project)}
                            >
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <path d="M21 15l-5-5L5 21"/>
                              </svg>
                              <span>View Gallery</span>
                            </button>
                            {project.pdfUrl && (
                              <a 
                                href={project.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-btn secondary"
                              >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                  <polyline points="14 2 14 8 20 8"/>
                                  <line x1="16" y1="13" x2="8" y2="13"/>
                                  <line x1="16" y1="17" x2="8" y2="17"/>
                                </svg>
                                <span>View PDF</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="card-decoration">
                          <div className="deco-line deco-line-1"></div>
                          <div className="deco-line deco-line-2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Drawings Section */}
          {activeCategory === 'drawings' && (
            <div className="section-container drawings-section">
              <div className="section-header">
                <div className="section-title-group">
                  <span className="section-number">03</span>
                  <h2 className="section-title">Drawings</h2>
                </div>
                <p className="section-description">
                  Traditional artwork exploring form, texture, and expression through 
                  charcoal, pencil, and mixed media
                </p>
              </div>

              <div className="preview-masonry drawings-masonry">
                {drawingsPreview.map((item, index) => (
                  <div 
                    key={item.id}
                    className="masonry-item"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      height: `${item.height}px`
                    }}
                  >
                    <LazyImage
                      src={item.img}
                      alt="Drawing"
                      className="masonry-image"
                    />
                  </div>
                ))}
              </div>

              <div className="section-cta">
                <button 
                  className="view-all-btn"
                  onClick={() => navigateToGallery('drawings')}
                >
                  <span>View Full Collection</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <div className="modal-header">
              <div className="modal-meta">
                <span className="modal-year">{selectedProject.year}</span>
                <span className="modal-type">
                  {selectedProject.category === 'magazine' ? 'Magazine' : 'Branding'}
                </span>
              </div>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>
              
              <div className="modal-tools">
                {selectedProject.tools.map((tool) => (
                  <span key={tool} className="modal-tool-chip">{tool}</span>
                ))}
              </div>

              {selectedProject.category === 'magazine' && (
                <a 
                  href={(selectedProject as MagazineProject).pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-pdf-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                  </svg>
                  <span>Open Full PDF</span>
                </a>
              )}
              
              {selectedProject.category === 'branding' && (selectedProject as BrandingProject).pdfUrl && (
                <a 
                  href={(selectedProject as BrandingProject).pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-pdf-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                  </svg>
                  <span>Open Full PDF</span>
                </a>
              )}
            </div>

            <div className="modal-gallery">
              {selectedProject.images.map((img, index) => (
                <div key={index} className="modal-gallery-item">
                  <LazyImage
                    src={img}
                    alt={`${selectedProject.title} - ${index + 1}`}
                    className="modal-image"
                  />
                  <span className="image-label">
                    {selectedProject.category === 'magazine' ? `Page ${index + 1}` : `Image ${index + 1}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Poster Lightbox Modal */}
      {selectedPoster && (
        <div 
          className="poster-modal-overlay" 
          onClick={() => {
            setSelectedPoster(null);
            document.body.style.overflow = 'unset';
          }}
        >
          <div className="poster-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => {
                setSelectedPoster(null);
                document.body.style.overflow = 'unset';
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <div className="poster-modal-content">
              <div className="poster-modal-image">
                <img 
                  src={selectedPoster.image} 
                  alt={selectedPoster.title}
                />
              </div>
              
              <div className="poster-modal-info">
                <div className="poster-modal-meta">
                  <span className="modal-year">{selectedPoster.year}</span>
                  <span className="modal-type">Poster</span>
                </div>
                <h2 className="poster-modal-title">{selectedPoster.shortTitle}</h2>
                <p className="poster-modal-full-title">{selectedPoster.title}</p>
                <p className="poster-modal-description">{selectedPoster.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
