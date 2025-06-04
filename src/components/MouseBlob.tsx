import React, { useEffect, useRef } from "react";

interface MouseBlobProps {
  color?: string;
}

export const MouseBlob: React.FC<MouseBlobProps> = ({ color = "#000" }) => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    let animationFrameId: number;

    const updateBlobPosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      animationFrameId = requestAnimationFrame(() => {
        blob.style.transform = `translate(${clientX - 20}px, ${clientY - 20}px)`;
      });
    };

    window.addEventListener("mousemove", updateBlobPosition);

    return () => {
      window.removeEventListener("mousemove", updateBlobPosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="pointer-events-none fixed top-0 left-0 w-10 h-10 rounded-full bg-black mix-blend-difference z-50 transition-transform duration-100 ease-out"
      style={{ backgroundColor: color }}
    />
  );
};
