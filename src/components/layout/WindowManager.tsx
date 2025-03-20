import React from 'react';
import { Terminal as TerminalIcon, FileText, Briefcase, User } from 'lucide-react';
import { MinimizedWindow, ModalType } from '../../types';

interface WindowManagerProps {
  openModals: Record<string, boolean>;
  minimizedWindows: MinimizedWindow[];
  handleOpenModal: (modalType: ModalType) => void;
  handleCloseModal: (modalType: ModalType) => void;
  handleMinimizeModal: (modalType: ModalType) => void;
}

/**
 * Gestionnaire de fenêtres
 * Gère l'affichage et l'état des fenêtres modales
 * @param props - Propriétés du composant
 */
const WindowManager: React.FC<WindowManagerProps> = ({
  openModals,
  minimizedWindows,
  handleOpenModal,
  handleCloseModal,
  handleMinimizeModal
}) => {
  // Mapping des icônes pour chaque type de modal
  const modalIcons = {
    projets: <FileText size={14} className="text-[#bb9af7]" />,
    cv: <Briefcase size={14} className="text-[#e0af68]" />,
    about: <User size={14} className="text-[#bb9af7]" />
  };

  // Mapping des titres pour chaque type de modal
  const modalTitles = {
    projets: 'Projets',
    cv: 'CV',
    about: 'À propos'
  };

  return {
    // Fonction pour minimiser une fenêtre
    minimizeWindow: (modalType: ModalType) => {
      handleMinimizeModal(modalType);
      minimizedWindows.push({
        id: modalType,
        title: modalTitles[modalType],
        icon: modalIcons[modalType],
        onRestore: () => handleOpenModal(modalType)
      });
    },

    // Fonction pour restaurer une fenêtre minimisée
    restoreWindow: (windowId: string) => {
      const window = minimizedWindows.find(w => w.id === windowId);
      if (window) {
        handleOpenModal(window.id as ModalType);
        minimizedWindows = minimizedWindows.filter(w => w.id !== windowId);
      }
    }
  };
};

export default WindowManager;