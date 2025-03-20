import React, { useState } from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';
import DraggableWindow from './DraggableWindow';

interface SectionModalProps {
  title: string;
  icon: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  children: React.ReactNode;
  isActive: boolean;
  onFocus: () => void;
  id: string;
}

const SectionModal: React.FC<SectionModalProps> = ({ 
  title, 
  icon, 
  onClose, 
  onMinimize, 
  children,
  isActive,
  onFocus,
  id
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <DraggableWindow 
      className="w-[95vw] md:w-[85vw] lg:w-[75vw] xl:w-[65vw] max-w-5xl mx-auto"
      isMaximized={isMaximized}
      isActive={isActive}
      onFocus={onFocus}
      id={id}
    >
      <div 
        className="bg-[#1a1b26]/90 backdrop-blur-sm rounded-lg border border-[#414868] shadow-2xl transform transition-all h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-[#24283b] rounded-t-lg px-4 py-2 border-b border-[#414868] cursor-grab">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5 no-drag">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#f7768e] hover:bg-red-400 transition-colors flex items-center justify-center"
              >
                <X size={8} className="text-[#1a1b26]" />
              </button>
              <button
                onClick={onMinimize}
                className="w-3 h-3 rounded-full bg-[#e0af68] hover:bg-[#e0af68]/80 transition-colors flex items-center justify-center"
              >
                <Minus size={8} className="text-[#1a1b26]" />
              </button>
              <button 
                onClick={() => setIsMaximized(!isMaximized)}
                className="w-3 h-3 rounded-full bg-[#9ece6a] hover:bg-[#9ece6a]/80 transition-colors flex items-center justify-center"
              >
                <Maximize2 size={8} className="text-[#1a1b26]" />
              </button>
            </div>
            <div className="flex items-center gap-2 ml-3 text-[#a9b1d6]">
              {icon}
              <span className="text-sm md:text-base font-mono">{title}</span>
            </div>
          </div>
        </div>
        
        <div className={`${isMaximized ? 'h-[calc(100vh-40px)]' : 'max-h-[80vh]'} overflow-y-auto p-4 md:p-6 no-drag`}>
          {children}
        </div>
      </div>
    </DraggableWindow>
  );
};

export default SectionModal;