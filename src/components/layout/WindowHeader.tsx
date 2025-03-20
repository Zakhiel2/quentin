import React from 'react';
import WindowControls from './WindowControls';

interface WindowHeaderProps {
  title: string;
  icon: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
}

/**
 * En-tête de fenêtre
 * Affiche la barre de titre avec les contrôles et l'icône
 * @param props - Propriétés du composant
 */
const WindowHeader: React.FC<WindowHeaderProps> = ({
  title,
  icon,
  onClose,
  onMinimize
}) => {
  return (
    <div className="flex items-center justify-between bg-[#24283b] rounded-t-lg px-4 py-2 border-b border-[#414868] cursor-grab">
      <div className="flex items-center gap-2">
        <WindowControls onClose={onClose} onMinimize={onMinimize} />
        <div className="flex items-center gap-2 ml-3 text-[#a9b1d6]">
          {icon}
          <span className="text-sm md:text-base font-mono">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default WindowHeader;