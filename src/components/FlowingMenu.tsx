import React from 'react';
import { gsap } from 'gsap';

import './FlowingMenu.css';

interface MenuItemProps {
  link: string;
  text: string;
  image?: string;
  images?: string[];
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="menu-wrap">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem 
            key={idx} 
            link={item.link}
            text={item.text}
            image={item.image}
            images={item.images}
          />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image, images }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  // Use images array if provided, otherwise fall back to single image
  const imageList = React.useMemo(() => {
    if (images && Array.isArray(images) && images.length > 0) {
      return images.filter(img => img && img.trim() !== '');
    }
    if (image) {
      return [image];
    }
    return [];
  }, [images, image]);

  const animationDefaults: gsap.TweenVars = { duration: 0.6, ease: 'expo' };

  const distMetric = (x: number, y: number, x2: number, y2: number): number => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number): 'top' | 'bottom' => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current || !linkRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });

    tl.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0)
      .to(linkRef.current, { opacity: 0 }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current || !linkRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });

    tl.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to(linkRef.current, { opacity: 1 }, 0);
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    if (imageList.length === 0) {
      return Array.from({ length: 8 }).map((_, idx) => (
        <React.Fragment key={idx}>
          <span>{text}</span>
          <div className="marquee__img" />
        </React.Fragment>
      ));
    }
    
    return Array.from({ length: 8 }).map((_, idx) => {
      // Cycle through images if multiple are provided
      const imageIndex = idx % imageList.length;
      const currentImage = imageList[imageIndex];
      
      // Special positioning for specific images to show content better
      const isGraphicEx2 = currentImage && currentImage.includes('graphicex2.png');
      const isPhotographyEx2 = currentImage && currentImage.includes('photographyex2.jpeg');
      
      let backgroundPosition = 'center center';
      if (isGraphicEx2) {
        backgroundPosition = 'center 26%';
      } else if (isPhotographyEx2) {
        backgroundPosition = 'center 70%';
      }
      
      return (
        <React.Fragment key={idx}>
          <span>{text}</span>
          <div 
            className="marquee__img" 
            style={{ 
              backgroundImage: currentImage ? `url(${currentImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: backgroundPosition,
              backgroundRepeat: 'no-repeat'
            }} 
          />
        </React.Fragment>
      );
    });
  }, [text, imageList]);

  return (
    <div className="menu__item" ref={itemRef}>
      <a 
        ref={linkRef}
        className="menu__item-link" 
        href={link} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
