import React from 'react';
import { Terminal as TerminalIcon, FileText, Briefcase, Linkedin, User } from 'lucide-react';

interface DesktopIconsProps {
  onOpenTerminal: () => void;
  onCommand: (command: string) => void;
  activeModals: { [key: string]: boolean };
  isTerminalOpen: boolean;
}

const DesktopIcon: React.FC<{
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
}> = ({ icon, label, onClick, href, isActive }) => {
  const baseClasses = "flex flex-col items-center gap-2 group p-2 rounded transition-all z-20";
  const activeClasses = isActive ? "bg-[#414868]/30" : "hover:bg-[#414868]/30";
  const combinedClasses = `${baseClasses} ${activeClasses}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#24283b] rounded-lg border border-[#414868] group-hover:border-[#7aa2f7] group-hover:scale-105 transition-all">
          {icon}
        </div>
        <span className="text-xs md:text-sm text-[#a9b1d6] bg-[#1a1b26]/80 px-2 py-1 rounded max-w-[96px] truncate">
          {label}
        </span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={combinedClasses}
    >
      <div className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-[#24283b] rounded-lg border transition-all ${
        isActive ? 'border-[#7aa2f7]' : 'border-[#414868] group-hover:border-[#7aa2f7] group-hover:scale-105'
      }`}>
        {icon}
      </div>
      <span className="text-xs md:text-sm text-[#a9b1d6] bg-[#1a1b26]/80 px-2 py-1 rounded max-w-[96px] truncate">
        {label}
      </span>
    </button>
  );
};

const DesktopIcons: React.FC<DesktopIconsProps> = ({ onOpenTerminal, onCommand, activeModals, isTerminalOpen }) => {
  return (
    <div className="fixed top-12 left-4 grid grid-cols-2 sm:grid-cols-1 gap-4 pt-4 z-10">
      <DesktopIcon
        icon={<TerminalIcon size={28} className="text-[#7aa2f7]" />}
        label="Terminal"
        onClick={onOpenTerminal}
        isActive={isTerminalOpen}
      />
      <DesktopIcon
        icon={<User size={28} className="text-[#bb9af7]" />}
        label="À propos"
        onClick={() => onCommand('about')}
        isActive={activeModals['about']}
      />
      <DesktopIcon
        icon={<Briefcase size={28} className="text-[#e0af68]" />}
        label="CV"
        onClick={() => onCommand('cv')}
        isActive={activeModals['cv']}
      />
      <DesktopIcon
        icon={<FileText size={28} className="text-[#bb9af7]" />}
        label="Projets"
        onClick={() => onCommand('projets')}
        isActive={activeModals['projets']}
      />
      <DesktopIcon
        icon={<Linkedin size={28} className="text-[#7aa2f7]" />}
        label="LinkedIn"
        href="https://www.linkedin.com/in/quentin-laguenani/"
      />
    </div>
  );
};

export default DesktopIcons;