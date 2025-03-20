import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Terminal, Folder, Code, Cpu, Minus, Maximize2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const previousImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className="bg-[#1a1b26] rounded-lg w-full max-w-4xl border border-[#414868] shadow-2xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-[#24283b] rounded-t-lg px-4 py-2 border-b border-[#414868]">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#f7768e] hover:bg-red-400 transition-colors flex items-center justify-center"
              >
                <X size={8} className="text-[#1a1b26]" />
              </button>
              <button className="w-3 h-3 rounded-full bg-[#e0af68] hover:bg-[#e0af68]/80 transition-colors flex items-center justify-center">
                <Minus size={8} className="text-[#1a1b26]" />
              </button>
              <button className="w-3 h-3 rounded-full bg-[#9ece6a] hover:bg-[#9ece6a]/80 transition-colors flex items-center justify-center">
                <Maximize2 size={8} className="text-[#1a1b26]" />
              </button>
            </div>
            <div className="flex items-center gap-2 ml-3 text-[#a9b1d6]">
              <Terminal size={14} />
              <span className="text-sm font-mono">project@{project.name.toLowerCase().replace(/\s+/g, '-')}:~</span>
            </div>
          </div>
        </div>
        
        <div className="max-h-[80vh] overflow-y-auto">
          {project.images && project.images.length > 0 && (
            <div className="relative h-[300px] md:h-[400px] group border-b border-[#414868]">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#1a1b26]/80 p-2 rounded text-[#a9b1d6] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#414868]"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1a1b26]/80 p-2 rounded text-[#a9b1d6] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#414868]"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-[#1a1b26]/80 px-2 py-1.5 rounded">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-[#7aa2f7]' : 'bg-[#565f89] hover:bg-[#a9b1d6]'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="p-6 space-y-6">
            <div className="bg-[#24283b] rounded p-4 border border-[#414868]">
              <div className="flex items-center gap-2 text-[#7aa2f7] mb-3">
                <Terminal size={18} />
                <h3 className="font-mono text-lg">Description</h3>
              </div>
              <p className="text-[#a9b1d6] leading-relaxed font-mono">{project.description}</p>
            </div>
            
            <div className="bg-[#24283b] rounded p-4 border border-[#414868]">
              <div className="flex items-center gap-2 text-[#9ece6a] mb-3">
                <Code size={18} />
                <h3 className="font-mono text-lg">Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-[#1a1b26] rounded text-[#7aa2f7] text-sm font-mono border border-[#414868] hover:border-[#7aa2f7] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.features && (
              <div className="bg-[#24283b] rounded p-4 border border-[#414868]">
                <div className="flex items-center gap-2 text-[#e0af68] mb-3">
                  <Folder size={18} />
                  <h3 className="font-mono text-lg">Fonctionnalités</h3>
                </div>
                <ul className="grid gap-2 text-[#a9b1d6] font-mono">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-baseline gap-2">
                      <span className="text-[#9ece6a] text-lg leading-none">•</span>
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.challenges && (
              <div className="bg-[#24283b] rounded p-4 border border-[#414868]">
                <div className="flex items-center gap-2 text-[#f7768e] mb-3">
                  <Cpu size={18} />
                  <h3 className="font-mono text-lg">Défis Techniques</h3>
                </div>
                <ul className="grid gap-2 text-[#a9b1d6] font-mono">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-baseline gap-2">
                      <span className="text-[#f7768e] text-lg leading-none">•</span>
                      <span className="flex-1">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.link && (
              <div className="bg-[#24283b] rounded p-4 border border-[#414868]">
                <div className="flex items-center gap-2 text-[#bb9af7] mb-3">
                  <Github size={18} />
                  <h3 className="font-mono text-lg">Liens du Projet</h3>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#7aa2f7] hover:text-[#bb9af7] transition-colors bg-[#1a1b26] px-4 py-2 rounded font-mono border border-[#414868] hover:border-[#bb9af7]"
                  >
                    <span>Voir le code source</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;