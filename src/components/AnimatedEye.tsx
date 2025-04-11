import React, { useState, useEffect, useRef } from 'react';

export interface AnimatedEyeProps {
  size?: number;
  pupilSize?: number;
  className?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const AnimatedEye: React.FC<AnimatedEyeProps> = ({ 
  size = 100, 
  pupilSize = 40,
  className = "",
  top,
  left,
  right,
  bottom
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (eyeRef.current) {
      const eyeRect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const deltaX = mousePosition.x - eyeCenterX;
      const deltaY = mousePosition.y - eyeCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      const maxDistance = (size - pupilSize) / 2 - 5;
      const limitedDistance = Math.min(distance, maxDistance);
      
      const angle = Math.atan2(deltaY, deltaX);
      const pupilX = Math.cos(angle) * limitedDistance;
      const pupilY = Math.sin(angle) * limitedDistance;

      setPupilPosition({ x: pupilX, y: pupilY });
    }
  }, [mousePosition, size, pupilSize]);

  return (
    <div 
      ref={eyeRef}
      className={`relative bg-white rounded-full flex items-center justify-center ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        transform: `translate(${left || '0'}, ${top || '0'})`,
        marginTop: bottom ? `calc(100% - ${bottom})` : undefined,
        marginLeft: right ? `calc(100% - ${right})` : undefined
      }}
    >
      <div
        className="bg-black rounded-full transition-transform duration-100 ease-out"
        style={{
          width: `${pupilSize}px`,
          height: `${pupilSize}px`,
          transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
        }}
      />
    </div>
  );
};

export default AnimatedEye;