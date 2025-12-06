import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Masonry from '../components/Masonry';
import { galleryData } from '../data/galleryData';
import './Gallery.css';

const CATEGORIES = ['all', 'BHCC', 'buildings', 'drawings'] as const;

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryData;
    }
    return galleryData.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  const totalImages = filteredItems.length;

  useEffect(() => {
    setIsLoading(true);
    setImagesLoaded(0);
    setLoadingProgress(0);

    const imagePromises = filteredItems.map((item, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => {
            const newCount = prev + 1;
            setLoadingProgress((newCount / totalImages) * 100);
            return newCount;
          });
          resolve();
        };
        img.onerror = () => {
          setImagesLoaded(prev => {
            const newCount = prev + 1;
            setLoadingProgress((newCount / totalImages) * 100);
            return newCount;
          });
          resolve();
        };
        img.src = item.img;
      });
    });

    Promise.all(imagePromises).then(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    });
  }, [filteredItems, totalImages]);

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

      {isLoading && (
        <div className="loading-container">
          <div className="loading-bar-wrapper">
            <div className="loading-bar" style={{ width: `${loadingProgress}%` }} />
          </div>
          <div className="loading-text">
            Loading {imagesLoaded} / {totalImages} images...
          </div>
        </div>
      )}

      <div className={`gallery-content ${isLoading ? 'loading' : 'loaded'}`}>
        <Masonry
          items={filteredItems}
          ease="power3.out"
          duration={0.3}
          stagger={0.01}
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
