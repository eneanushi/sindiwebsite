import React, { useState, useMemo, useCallback, useRef } from 'react';
import Masonry from '../components/Masonry';
import { galleryData, GalleryImage } from '../data/galleryData';
import './Gallery.css';

const CATEGORIES = ['all', 'BHCC', 'buildings', 'drawings'] as const;

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryData;
    }
    return galleryData.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  const handleCategoryChange = useCallback((category: string) => {
    if (category === selectedCategory || isTransitioning) return;
    
    // Clear any existing transition timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    // Brief transition animation
    setIsTransitioning(true);
    
    // Faster transition for snappier feel
    transitionTimeoutRef.current = setTimeout(() => {
      setSelectedCategory(category);
      // Quick fade back in
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 100);
  }, [selectedCategory, isTransitioning]);

  const handleImageClick = useCallback((item: GalleryImage) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <div className="category-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
              disabled={isTransitioning}
            >
              {cat === 'all' ? 'All' : cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className={`gallery-content ${isTransitioning ? 'transitioning' : 'visible'}`}>
        <Masonry
          key={selectedCategory} // Force remount for clean animation
          items={filteredItems}
          ease="power3.out"
          duration={0.3}
          stagger={0.02}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={false}
          colorShiftOnHover={false}
          onImageClick={handleImageClick}
        />
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox-overlay" onClick={closeLightbox}>
          <div className="gallery-lightbox" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div className="lightbox-image-container">
              <img 
                src={selectedImage.img} 
                alt={selectedImage.category || 'Gallery image'}
                className="lightbox-image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
