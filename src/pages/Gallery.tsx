import React, { useState, useMemo, useCallback } from 'react';
import Masonry from '../components/Masonry';
import { galleryData } from '../data/galleryData';
import './Gallery.css';

const CATEGORIES = ['all', 'BHCC', 'buildings', 'drawings'] as const;

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryData;
    }
    return galleryData.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
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
            >
              {cat === 'all' ? 'All' : cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <Masonry
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
  );
};

export default Gallery;
