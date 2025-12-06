import React, { useState, useMemo, useCallback, useRef } from 'react';
import Masonry from '../components/Masonry';
import { galleryData } from '../data/galleryData';
import './Gallery.css';

const CATEGORIES = ['all', 'BHCC', 'buildings', 'drawings'] as const;

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryData;
    }
    return galleryData.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  const handleCategoryChange = useCallback((category: string) => {
    if (category === selectedCategory) return;
    
    // Clear any existing transition timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    // Brief transition animation
    setIsTransitioning(true);
    
    // Small delay to allow exit animation
    transitionTimeoutRef.current = setTimeout(() => {
      setSelectedCategory(category);
      // Allow enter animation to complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  }, [selectedCategory]);

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
        />
      </div>
    </div>
  );
};

export default Gallery;
