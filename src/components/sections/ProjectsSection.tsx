import React, { useState } from 'react';
import { Project } from '../../types';
import ProjectModal from '../ProjectModal';

interface ProjectsSectionProps {
  data: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid gap-8">
        {data.map((project, index) => (
          <div key={index} className="bg-[#24283b] rounded-lg p-6 border border-[#414868]">
            <h3 className="text-[#e0af68] text-base md:text-lg mb-3">{project.name}</h3>
            <p className="text-[#a9b1d6] text-sm md:text-base mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-[#1a1b26] rounded text-[#7aa2f7] text-xs md:text-sm border border-[#414868]">
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => setSelectedProject(project)}
              className="inline-flex items-center gap-2 text-[#bb9af7] hover:text-[#7aa2f7] transition-colors text-sm md:text-base"
            >
              Voir le projet
              <span className="text-base">→</span>
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default ProjectsSection;