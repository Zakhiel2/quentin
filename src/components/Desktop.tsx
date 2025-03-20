import React, { useState } from 'react';
import { Terminal as TerminalIcon, FileText, Briefcase, User } from 'lucide-react';
import DesktopIcons from './DesktopIcons';
import Terminal from './Terminal';
import TopBar from './TopBar';
import SectionModal from './SectionModal';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import CVSection from './sections/CVSection';
import { projects, experiences, certifications, education, references, about } from '../data';
import { MinimizedWindow, ModalType } from '../types';

interface OpenModals {
  [key: string]: boolean;
}

const Desktop: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);
  const [openModals, setOpenModals] = useState<OpenModals>({});
  const [minimizedWindows, setMinimizedWindows] = useState<MinimizedWindow[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string>('terminal');

  const handleOpenTerminal = () => {
    setIsTerminalOpen(true);
    setMinimizedWindows(prev => prev.filter(w => w.id !== 'terminal'));
    setActiveWindowId('terminal');
  };

  const handleCloseTerminal = () => {
    setIsTerminalOpen(false);
  };

  const handleMinimizeTerminal = () => {
    setIsTerminalOpen(false);
    setMinimizedWindows(prev => [
      ...prev.filter(w => w.id !== 'terminal'),
      {
        id: 'terminal',
        title: 'Terminal',
        icon: <TerminalIcon size={14} className="text-[#7aa2f7]" />,
        onRestore: handleOpenTerminal
      }
    ]);
  };

  const handleOpenModal = (modalType: ModalType) => {
    setOpenModals(prev => ({
      ...prev,
      [modalType]: true
    }));
    setMinimizedWindows(prev => prev.filter(w => w.id !== modalType));
    setActiveWindowId(modalType);
  };

  const handleCloseModal = (modalType: ModalType) => {
    setOpenModals(prev => {
      const newModals = { ...prev };
      delete newModals[modalType];
      return newModals;
    });
  };

  const handleMinimizeModal = (modalType: ModalType) => {
    setOpenModals(prev => {
      const newModals = { ...prev };
      delete newModals[modalType];
      return newModals;
    });

    const modalIcons = {
      projets: <FileText size={14} className="text-[#bb9af7]" />,
      cv: <Briefcase size={14} className="text-[#e0af68]" />,
      about: <User size={14} className="text-[#bb9af7]" />
    };

    const modalTitles = {
      projets: 'Projets',
      cv: 'CV',
      about: 'À propos'
    };

    setMinimizedWindows(prev => [
      ...prev.filter(w => w.id !== modalType),
      {
        id: modalType,
        title: modalTitles[modalType],
        icon: modalIcons[modalType],
        onRestore: () => handleOpenModal(modalType)
      }
    ]);
  };

  const handleWindowFocus = (windowId: string) => {
    setActiveWindowId(windowId);
  };

  const renderModals = () => {
    return Object.entries(openModals).map(([modalType]) => {
      switch (modalType) {
        case 'about':
          return (
            <SectionModal 
              key={modalType}
              id={modalType}
              title="À propos" 
              icon={<User size={16} className="text-[#bb9af7]" />} 
              onClose={() => handleCloseModal('about')}
              onMinimize={() => handleMinimizeModal('about')}
              isActive={activeWindowId === modalType}
              onFocus={() => handleWindowFocus(modalType)}
            >
              <AboutSection data={about} />
            </SectionModal>
          );
        case 'projets':
          return (
            <SectionModal 
              key={modalType}
              id={modalType}
              title="Projets" 
              icon={<FileText size={16} className="text-[#bb9af7]" />} 
              onClose={() => handleCloseModal('projets')}
              onMinimize={() => handleMinimizeModal('projets')}
              isActive={activeWindowId === modalType}
              onFocus={() => handleWindowFocus(modalType)}
            >
              <ProjectsSection data={projects} />
            </SectionModal>
          );
        case 'cv':
          return (
            <SectionModal 
              key={modalType}
              id={modalType}
              title="CV" 
              icon={<Briefcase size={16} className="text-[#e0af68]" />} 
              onClose={() => handleCloseModal('cv')}
              onMinimize={() => handleMinimizeModal('cv')}
              isActive={activeWindowId === modalType}
              onFocus={() => handleWindowFocus(modalType)}
            >
              <CVSection 
                experiences={experiences}
                certifications={certifications}
                education={education}
                references={references}
              />
            </SectionModal>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div 
      className="min-h-screen text-white font-mono bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: 'url("./images/wallpaper.jpg")',
        backgroundColor: 'rgba(26, 27, 38, 0.95)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <TopBar minimizedWindows={minimizedWindows} />
      <DesktopIcons 
        onOpenTerminal={handleOpenTerminal} 
        onCommand={handleOpenModal}
        activeModals={openModals}
        isTerminalOpen={isTerminalOpen}
      />
      {isTerminalOpen && (
        <Terminal 
          onClose={handleCloseTerminal}
          onMinimize={handleMinimizeTerminal}
          isActive={activeWindowId === 'terminal'}
          onFocus={() => handleWindowFocus('terminal')}
          id="terminal"
        />
      )}
      {renderModals()}
    </div>
  );
};

export default Desktop;