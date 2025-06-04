import React, { useEffect, useRef } from "react";

interface CircleInteractionProps {
  color: string;
  title: string;
  className?: string;
}

export const CircleInteraction: React.FC<CircleInteractionProps> = ({
  color,
  title,
  className = "",
}) => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = circle.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      const maxDistance = 200;
      const scale = Math.max(1, 1.2 - distance / maxDistance);

      if (distance < maxDistance) {
        circle.style.transform = `scale(${scale})`;
      } else {
        circle.style.transform = "scale(1)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[368px] pb-[68px]">
        <div
          ref={circleRef}
          className={`w-full aspect-square rounded-full transition-transform duration-300 ${className}`}
          style={{ backgroundColor: color }}
        />
      </div>
      <div className="text-black text-[22px] font-bold font-['Cascadia_Code'] text-center -mt-[34px] z-10">
        {title}
      </div>
    </div>
  );
};
