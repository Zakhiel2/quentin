import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#f7768e]/90 text-white py-2 px-4 flex items-center justify-between rounded-lg shadow-lg z-50 max-w-3xl w-[95%] text-sm">
      <AlertCircle size={24} className="flex-shrink-0 mr-3" />
      <div className="flex-1 text-center pr-4">
        Je suis à la recherche active d'une entreprise pour mon alternance 2026. N'hésitez pas à me contacter : 
        <a 
          href="mailto:tacoxlamidi@gmail.com" 
          className="text-white hover:text-[#24283b] transition-colors ml-1 font-semibold"
        >
          tacoxlamidi@gmail.com
        </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-white hover:text-[#24283b] transition-colors"
        aria-label="Fermer la bannière"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Banner;