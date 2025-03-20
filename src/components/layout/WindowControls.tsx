import React from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';

interface WindowControlsProps {
  onClose: () => void;
  onMinimize: () => void;
}

/**
 * Boutons de contrôle des fenêtres
 * Affiche les boutons fermer, minimiser et maximiser
 * @param props - Propriétés du composant
 */
const WindowControls: React.FC<WindowControlsProps> = ({ onClose, onMinimize }) => {
  return (
    <div className="flex space-x-1.5 no-drag">
      <button
        onClick={onClose}
        className="w-3 h-3 rounded-full bg-[#f7768e] hover:bg-red-400 transition-colors flex items-center justify-center"
        title="Fermer"
      >
        <X size={8} className="text-[#1a1b26]" />
      </button>
      <button
        onClick={onMinimize}
        className="w-3 h-3 rounded-full bg-[#e0af68] hover:bg-[#e0af68]/80 transition-colors flex items-center justify-center"
        title="Minimiser"
      >
        <Minus size={8} className="text-[#1a1b26]" />
      </button>
      <button 
        className="w-3 h-3 rounded-full bg-[#9ece6a] hover:bg-[#9ece6a]/80 transition-colors flex items-center justify-center"
        title="Maximiser"
      >
        <Maximize2 size={8} className="text-[#1a1b26]" />
      </button>
    </div>
  );
};

export default WindowControls;