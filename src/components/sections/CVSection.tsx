import React from 'react';
import { Experience, Certification, Education, Reference } from '../../types';

interface CVSectionProps {
  experiences: Experience[];
  certifications: Certification[];
  education: Education[];
  references: Reference[];
}

const CVSection: React.FC<CVSectionProps> = ({ experiences, certifications, education, references }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-[#e0af68] text-base md:text-lg mb-4 border-b border-[#414868] pb-2">Expérience</h2>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#24283b] rounded-lg p-4 border border-[#414868]">
              <h3 className="text-[#e0af68] text-sm md:text-base mb-1">{exp.position}</h3>
              <p className="text-[#9ece6a] text-xs md:text-sm mb-2">{exp.company} | {exp.period}</p>
              <ul className="space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-baseline gap-2 text-[#a9b1d6] text-xs md:text-sm">
                    <span className="text-[#7aa2f7] text-base">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[#e0af68] text-base md:text-lg mb-4 border-b border-[#414868] pb-2">Formation</h2>
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-[#24283b] rounded-lg p-4 border border-[#414868]">
              <h3 className="text-[#e0af68] text-sm md:text-base mb-1">{edu.degree}</h3>
              <p className="text-[#9ece6a] text-xs md:text-sm mb-2">{edu.institution} | {edu.period}</p>
              <p className="text-[#a9b1d6] text-xs md:text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[#e0af68] text-base md:text-lg mb-4 border-b border-[#414868] pb-2">Certifications</h2>
        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-[#24283b] rounded-lg p-4 border border-[#414868] flex items-center gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img src={cert.logo} alt={cert.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-[#e0af68] text-sm md:text-base mb-1">{cert.name}</h3>
                <p className="text-[#9ece6a] text-xs md:text-sm mb-2">{cert.issuer} | {cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#7aa2f7] hover:text-[#bb9af7] transition-colors text-xs md:text-sm"
                  >
                    Vérifier
                    <span className="text-base">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-[#e0af68] text-base md:text-lg mb-4 border-b border-[#414868] pb-2">Références</h2>
        <div className="grid gap-6">
          {references.map((ref, index) => (
            <div key={index} className="bg-[#24283b] rounded-lg p-4 border border-[#414868]">
              <h3 className="text-[#e0af68] text-sm md:text-base mb-1">{ref.name}</h3>
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
      </div>
    </div>
  );
};

export default CVSection;