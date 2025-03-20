import React, { useState, useRef, useEffect } from 'react';

interface DraggableWindowProps {
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  onDragStart?: () => void;
  className?: string;
  isMaximized?: boolean;
  isActive?: boolean;
  onFocus?: () => void;
  id?: string;
}

const DraggableWindow: React.FC<DraggableWindowProps> = ({ 
  children, 
  initialPosition = { x: 0, y: 0 },
  onDragStart,
  className = "",
  isMaximized = false,
  isActive = false,
  onFocus,
  id
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const previousPosition = useRef({ x: 0, y: 0 });

  // Calculate initial centered position
  const [position, setPosition] = useState(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const topBarHeight = 32;
    
    // Use approximate initial dimensions for first render
    const approxWidth = 800;
    const approxHeight = 600;
    
    const centerX = Math.max(0, (windowWidth - approxWidth) / 2);
    const centerY = Math.max(topBarHeight, (windowHeight - approxHeight) / 2);
    
    previousPosition.current = { x: centerX, y: centerY };
    return { x: centerX, y: centerY };
  });

  useEffect(() => {
    if (!isMaximized) {
      const updatePosition = () => {
        if (!dragRef.current) return;
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const elementWidth = dragRef.current.offsetWidth;
        const elementHeight = dragRef.current.offsetHeight;
        const topBarHeight = 32;
        
        const centerX = Math.max(0, (windowWidth - elementWidth) / 2);
        const centerY = Math.max(topBarHeight, (windowHeight - elementHeight) / 2);
        
        setPosition({ x: centerX, y: centerY });
        previousPosition.current = { x: centerX, y: centerY };
      };

      updatePosition();
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
    }
  }, [isMaximized]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!dragRef.current || isMaximized) return;

    const targetElement = e.target as HTMLElement;
    if (targetElement.closest('.no-drag')) return;

    setIsDragging(true);
    onDragStart?.();
    onFocus?.();

    const rect = dragRef.current.getBoundingClientRect();
    offsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !dragRef.current || isMaximized) return;

    const topBarHeight = 32;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const elementWidth = dragRef.current.offsetWidth;
    const elementHeight = dragRef.current.offsetHeight;

    let newX = e.clientX - offsetRef.current.x;
    let newY = e.clientY - offsetRef.current.y;

    // Constrain to window bounds
    newX = Math.max(0, Math.min(newX, windowWidth - elementWidth));
    newY = Math.max(topBarHeight, Math.min(newY, windowHeight - elementHeight));

    setPosition({ x: newX, y: newY });
    previousPosition.current = { x: newX, y: newY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={dragRef}
      className={`fixed ${isMaximized ? 'inset-0 mt-8' : className}`}
      style={{
        transform: isMaximized ? 'none' : `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'default',
        transition: isDragging ? 'none' : 'all 0.2s',
        zIndex: isActive ? 40 : 30,
        visibility: (!isMaximized && position.x === 0 && position.y === 0) ? 'hidden' : 'visible'
      }}
      onMouseDown={handleMouseDown}
      onClick={() => onFocus?.()}
    >
      {children}
    </div>
  );
};

export default DraggableWindow;