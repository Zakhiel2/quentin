import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Terminal as TerminalIcon, X, Maximize2, Minus, FileText } from 'lucide-react';
import { projects, experiences, certifications, education, references, about } from '../data';
import ProjectModal from './ProjectModal';
import { Project } from '../types';
import DraggableWindow from './DraggableWindow';

interface TerminalProps {
  onClose: () => void;
  onMinimize: () => void;
  initialCommand?: string;
  isActive: boolean;
  onFocus: () => void;
  id: string;
}

const Terminal: React.FC<TerminalProps> = ({ 
  onClose, 
  onMinimize, 
  initialCommand,
  isActive,
  onFocus,
  id 
}) => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<JSX.Element[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  const commands = {
    help: () => (
      <div className="mb-2">
        <p className="text-[#9ece6a] mb-2">Commandes disponibles:</p>
        <p className="text-[#a9b1d6]">moi - 📝 En savoir plus sur moi</p>
        <p className="text-[#a9b1d6]">projets - 🚀 Explorer mes réalisations</p>
        <p className="text-[#a9b1d6]">experiences - 💼 Découvrir mon parcours pro</p>
        <p className="text-[#a9b1d6]">education - 📚 Voir mon parcours scolaire</p>
        <p className="text-[#a9b1d6]">certifications - 🎓 Consulter mes qualifications</p>
        <p className="text-[#a9b1d6]">references - 🏅 Lire les recommandations</p>
        <p className="text-[#a9b1d6]">clear - 🧹 Effacer le terminal</p>
        <p className="text-[#a9b1d6]">help - ❓ Afficher la liste des commandes</p>
      </div>
    ),
    moi: () => (
      <div className="mb-4 border-l-2 border-[#bb9af7] pl-4 bg-[#24283b] p-4 rounded">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQETXiPwX3LF4w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703254516823?e=1747872000&v=beta&t=LhX57rQNpzq3b2bhJNzK8kLoPH-WtiVzMbUlgTY4fDg"
                alt="Profile"
                className="relative w-32 h-32 rounded-lg object-cover"
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
          
          <div className="flex-1">
            <h3 className="text-[#e0af68] font-bold font-mono mb-4">À propos de moi</h3>
            <div className="text-[#a9b1d6] font-mono space-y-2">
              {about.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-[#9ece6a] font-bold font-mono mb-3">Compétences</h4>
          <div className="flex flex-wrap gap-2">
            {about.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[#1a1b26] rounded text-[#7aa2f7] text-xs font-mono border border-[#414868]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-[#f7768e] font-bold font-mono mb-3">Centres d'intérêt</h4>
          <div className="space-y-3">
            {about.hobbies.map((hobby, index) => (
              <div key={index} className="bg-[#1a1b26] rounded p-3 border border-[#414868]">
                <h5 className="text-[#e0af68] font-mono mb-1">{hobby.name}</h5>
                <p className="text-[#a9b1d6] text-sm font-mono">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    projets: () => (
      <div className="mb-4">
        {projects.map((project, index) => (
          <div key={index} className="mb-4 border-l-2 border-[#7aa2f7] pl-4 bg-[#24283b] p-4 rounded">
            <h3 className="text-[#e0af68] font-bold font-mono">{project.name}</h3>
            <p className="text-[#a9b1d6] mt-1 font-mono">{project.description}</p>
            <p className="text-[#7aa2f7] mt-2 font-mono">Technologies: {project.technologies.join(', ')}</p>
            <button
              onClick={() => setSelectedProject(project)}
              className="text-[#bb9af7] hover:text-[#7aa2f7] transition-colors mt-2 cursor-pointer font-mono flex items-center gap-2"
            >
              <span>Voir le Projet</span>
              <span className="text-lg">→</span>
            </button>
          </div>
        ))}
      </div>
    ),
    experiences: () => (
      <div className="mb-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4 border-l-2 border-[#7aa2f7] pl-4 bg-[#24283b] p-4 rounded">
            <h3 className="text-[#e0af68] font-bold font-mono">{exp.position}</h3>
            <p className="text-[#9ece6a] font-mono">{exp.company} | {exp.period}</p>
            <ul className="list-none text-[#a9b1d6] mt-2 font-mono space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex items-baseline gap-2">
                  <span className="text-[#7aa2f7] text-lg leading-none">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
    certifications: () => (
      <div className="mb-4">
        {certifications.map((cert, index) => (
          <div key={index} className="mb-4 border-l-2 border-[#bb9af7] pl-4 bg-[#24283b] p-4 rounded flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <img src={cert.logo} alt={cert.name} className="w-full h-full object-cover" />
            </div>
            <div className="font-mono">
              <h3 className="text-[#e0af68] font-bold">{cert.name}</h3>
              <p className="text-[#9ece6a]">{cert.issuer} | {cert.date}</p>
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#7aa2f7] hover:text-[#bb9af7] transition-colors inline-flex items-center gap-2 mt-1"
                >
                  <span>Vérifier</span>
                  <span className="text-lg">→</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
    education: () => (
      <div className="mb-4">
        {education.map((edu, index) => (
          <div key={index} className="mb-4 border-l-2 border-[#e0af68] pl-4 bg-[#24283b] p-4 rounded">
            <h3 className="text-[#e0af68] font-bold font-mono">{edu.degree}</h3>
            <p className="text-[#9ece6a] font-mono">{edu.institution} | {edu.period}</p>
            <p className="text-[#a9b1d6] mt-1 font-mono">{edu.description}</p>
          </div>
        ))}
      </div>
    ),
    references: () => (
      <div className="mb-4">
        {references.map((ref, index) => (
          <div key={index} className="mb-4 border-l-2 border-[#f7768e] pl-4 bg-[#24283b] p-4 rounded">
            <h3 className="text-[#e0af68] font-bold font-mono">{ref.name}</h3>
            <p className="text-[#9ece6a] font-mono">{ref.position} à {ref.company}</p>
            <p className="text-[#a9b1d6] mt-2 font-mono italic">"{ref.quote}"</p>
            {ref.linkedIn && (
              <a 
                href={ref.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-[#1a1b26] text-[#7aa2f7] rounded-md transition-colors font-mono border border-[#414868] hover:border-[#7aa2f7]"
              >
                <span>Voir sur LinkedIn</span>
                <span className="text-lg">→</span>
              </a>
            )}
          </div>
        ))}
      </div>
    ),
    clear: () => {
      setOutput([]);
      return null;
    }
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const commandFn = commands[trimmedCmd as keyof typeof commands];
    
    if (cmd !== '') {
      setOutput(prev => [
        ...prev,
        <div key={prev.length} className="mb-2 font-mono">
          <span className="text-[#9ece6a]">quentin@portfolio</span>
          <span className="text-[#a9b1d6]">:</span>
          <span className="text-[#7aa2f7]">~$</span>
          <span className="text-[#a9b1d6]"> {cmd}</span>
        </div>,
        <div key={prev.length + 1}>
          {commandFn ? commandFn() : <p className="text-[#f7768e] font-mono">Commande non trouvée. Tapez 'help' pour voir les commandes disponibles.</p>}
        </div>
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    setOutput([commands.help()]);
    if (initialCommand) {
      handleCommand(initialCommand);
    }
  }, [initialCommand]);

  return (
    <DraggableWindow 
      className="w-[95vw] md:w-[85vw] lg:w-[75vw] xl:w-[65vw] max-w-5xl mx-auto"
      isMaximized={isMaximized}
      isActive={isActive}
      onFocus={onFocus}
      id={id}
    >
      <div className="backdrop-blur-sm h-full">
        <div className={`bg-[#1a1b26]/90 rounded-lg shadow-xl border ${
          isActive ? 'border-[#7aa2f7]' : 'border-[#414868]'
        } h-full transition-colors duration-200`}>
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
                <TerminalIcon size={14} />
                <span className="text-sm">quentin@portfolio:~</span>
              </div>
            </div>
          </div>
          
          <div className={`${isMaximized ? 'h-[calc(100vh-40px)]' : 'h-[75vh]'} overflow-y-auto p-4 no-drag`}>
            <div className="mb-4">
              <TypeAnimation
                sequence={[
                  'Bienvenue sur mon site portfolio !\nTapez "help" pour voir les commandes disponibles.',
                  1000,
                ]}
                wrapper="div"
                cursor={false}
                className="text-[#9ece6a]"
              />
            </div>
            
            {output}
            
            <form onSubmit={handleSubmit} className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <span className="text-[#9ece6a]">quentin@portfolio</span>
                <span className="text-[#a9b1d6]">:</span>
                <span className="text-[#7aa2f7]">~$</span>
              </div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[#a9b1d6] min-w-[200px]"
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </DraggableWindow>
  );
};

export default Terminal;
