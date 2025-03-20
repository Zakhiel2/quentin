import React from 'react';
import { Reference } from '../../types';

interface ReferencesSectionProps {
  data: Reference[];
}

const ReferencesSection: React.FC<ReferencesSectionProps> = ({ data }) => {
  return (
    <div className="grid gap-6">
      {data.map((ref, index) => (
        <div key={index} className="bg-[#24283b] rounded-lg p-4 border border-[#414868]">
          <h3 className="text-[#e0af68] text-base md:text-lg mb-1">{ref.name}</h3>
          <p className="text-[#9ece6a] text-xs md:text-sm mb-3">{ref.position} à {ref.company}</p>
          <p className="text-[#a9b1d6] text-sm md:text-base italic mb-3">"{ref.quote}"</p>
          {ref.linkedIn && (
            <a
              href={ref.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1b26] text-[#7aa2f7] rounded-lg transition-colors border border-[#414868] hover:border-[#7aa2f7] text-xs md:text-sm"
            >
              Voir sur LinkedIn
              <span className="text-base">→</span>
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReferencesSection;