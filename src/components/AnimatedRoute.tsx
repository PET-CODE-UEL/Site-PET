import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedRouteProps {
  children: React.ReactNode;
}

const AnimatedRoute: React.FC<AnimatedRouteProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset animation on route change
    setIsVisible(false);
    
    // Small delay to allow exit animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div 
      className={`animated-route ${isVisible ? 'route-enter' : 'route-exit'}`}
      style={{
        width: '100%',
        height: '100%',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedRoute;
