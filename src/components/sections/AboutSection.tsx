import React from 'react';
import { About } from '../../types';
import { FileText, Code, User, Heart } from 'lucide-react';

interface AboutSectionProps {
  data: About;
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      <div className="bg-[#24283b] rounded-lg p-6 border border-[#414868]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <img 
                src="./images/quentin.jpg"
                alt="Profile"
                className="relative w-40 h-40 rounded-lg object-cover"
              />
            </div>
            <a
              href="./CV_Quentin_Laguenani.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1b26] text-[#7aa2f7] rounded-lg transition-all border border-[#414868] hover:border-[#7aa2f7] hover:scale-105 text-sm"
            >
              <FileText size={16} />
              <span>Voir mon CV</span>
            </a>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 text-[#e0af68] mb-2">
              <User size={18} />
              <h3 className="text-lg">À propos de moi</h3>
            </div>
            <div className="space-y-4 text-[#a9b1d6]">
              {data.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-sm md:text-base">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#24283b] rounded-lg p-6 border border-[#414868]">
        <div className="flex items-center gap-2 text-[#9ece6a] mb-4">
          <Code size={18} />
          <h3 className="text-lg">Compétences</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#1a1b26] rounded-lg text-[#7aa2f7] text-sm border border-[#414868] hover:border-[#7aa2f7] transition-all hover:scale-105 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-[#24283b] rounded-lg p-6 border border-[#414868]">
        <div className="flex items-center gap-2 text-[#f7768e] mb-4">
          <Heart size={18} />
          <h3 className="text-lg">Centres d'intérêt</h3>
        </div>
        <div className="grid gap-3">
          {data.hobbies.map((hobby, index) => (
            <div 
              key={index}
              className="bg-[#1a1b26] rounded-lg p-4 border border-[#414868] hover:border-[#f7768e] transition-all group"
            >
              <h4 className="text-[#e0af68] text-base mb-2 group-hover:text-[#f7768e] transition-colors">
                {hobby.name}
              </h4>
              <p className="text-[#a9b1d6] text-sm leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;