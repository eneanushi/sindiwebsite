import React, { useState, useEffect, useRef, useCallback } from 'react';
import './LazyImage.css';

interface LazyImageProps {
  src: string;
  alt?: string;
  className?: string;
  onLoad?: () => void;
  category?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt = '',
  className = '',
  onLoad,
  category
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer to detect when image enters viewport
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before entering viewport
        threshold: 0
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Simulate loading progress for better UX
  useEffect(() => {
    if (isInView && !isLoaded) {
      setLoadProgress(0);
      
      // Simulate progress that accelerates then slows down
      let progress = 0;
      progressIntervalRef.current = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 90) {
          progress = 90; // Cap at 90% until actual load completes
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
          }
        }
        setLoadProgress(Math.min(progress, 90));
      }, 100);
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isInView, isLoaded]);

  const handleImageLoad = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    setLoadProgress(100);
    
    // Small delay to show 100% before transitioning
    setTimeout(() => {
      setIsLoaded(true);
      onLoad?.();
    }, 150);
  }, [onLoad]);

  const handleImageError = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    setLoadProgress(100);
    setIsLoaded(true);
  }, []);

  const circumference = 2 * Math.PI * 20; // radius = 20
  const strokeDashoffset = circumference - (loadProgress / 100) * circumference;

  return (
    <div ref={containerRef} className={`lazy-image-container ${className}`}>
      {/* Loading placeholder */}
      <div className={`lazy-image-placeholder ${isLoaded ? 'hidden' : ''}`}>
        <div className="loading-circle-container">
          <svg className="loading-circle" viewBox="0 0 50 50">
            {/* Background circle */}
            <circle
              className="loading-circle-bg"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="3"
            />
            {/* Progress circle */}
            <circle
              className="loading-circle-progress"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset
              }}
            />
          </svg>
          <span className="loading-percentage">{Math.round(loadProgress)}%</span>
        </div>
      </div>

      {/* Actual image - only render when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
        />
      )}

      {/* Category label */}
      {category && isLoaded && (
        <div className="lazy-image-category-label">
          {category}
        </div>
      )}
    </div>
  );
};

export default LazyImage;
