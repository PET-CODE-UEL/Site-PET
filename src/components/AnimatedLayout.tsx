import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransitions.css';

interface AnimatedLayoutProps {
  children: React.ReactNode;
  animationType?: 'slide' | 'fade' | 'scale' | 'slideRight' | 'slideLeft';
  staggerChildren?: boolean;
}

const AnimatedLayout: React.FC<AnimatedLayoutProps> = ({ 
  children, 
  animationType = 'slide',
  staggerChildren = false 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Start exit animation
    setIsExiting(true);
    setIsVisible(false);
    
    // After a short delay, show the new content
    const timer = setTimeout(() => {
      setIsExiting(false);
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const getAnimationClass = () => {
    if (isExiting) return 'route-exit';
    if (!isVisible) return 'route-exit';
    
    switch (animationType) {
      case 'fade':
        return 'scale-fade-in';
      case 'scale':
        return 'scale-fade-in';
      case 'slideRight':
        return 'fade-slide-right';
      case 'slideLeft':
        return 'fade-slide-left';
      default:
        return 'route-enter';
    }
  };

  return (
    <div 
      className={`animated-route ${getAnimationClass()} ${staggerChildren ? 'stagger-children' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedLayout;
