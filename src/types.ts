export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  features?: string[];
  challenges?: string[];
  images?: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  logo: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Reference {
  name: string;
  position: string;
  company: string;
  quote: string;
  linkedIn?: string;
}

export interface About {
  description: string[];
  skills: string[];
  hobbies: {
    name: string;
    description: string;
  }[];
}

export interface MinimizedWindow {
  id: string;
  title: string;
  icon: React.ReactNode;
  onRestore: () => void;
}

export type ModalType = 'projets' | 'cv' | 'about';

export interface WindowProps {
  title: string;
  icon: React.ReactNode;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  isMaximized: boolean;
  children: React.ReactNode;
  className?: string;
}