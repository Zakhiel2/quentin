import { useState, useEffect, RefObject } from 'react';

interface Position {
  x: number;
  y: number;
}

/**
 * Hook personnalisé pour gérer le positionnement des fenêtres
 * Calcule la position centrée et gère le redimensionnement
 * @param ref - Référence à l'élément de la fenêtre
 * @returns Position actuelle et fonction de mise à jour
 */
const useWindowPosition = (ref: RefObject<HTMLElement>) => {
  const [position, setPosition] = useState<Position>(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const topBarHeight = 32;
    
    // Dimensions approximatives initiales
    const approxWidth = 800;
    const approxHeight = 600;
    
    const centerX = Math.max(0, (windowWidth - approxWidth) / 2);
    const centerY = Math.max(topBarHeight, (windowHeight - approxHeight) / 2);
    
    return { x: centerX, y: centerY };
  });

  useEffect(() => {
    const updatePosition = () => {
      if (!ref.current) return;
      
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const elementWidth = ref.current.offsetWidth;
      const elementHeight = ref.current.offsetHeight;
      const topBarHeight = 32;
      
      const centerX = Math.max(0, (windowWidth - elementWidth) / 2);
      const centerY = Math.max(topBarHeight, (windowHeight - elementHeight) / 2);
      
      setPosition({ x: centerX, y: centerY });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [ref]);

  return { position, setPosition };
};

export default useWindowPosition;