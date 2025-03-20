import { Project, Experience, Certification, Education, Reference, About } from './types';

export const about: About = {
  description: [
    "Étudiant en GMSI (Gestionnaire en Maintenance et Support Informatique) en alternance, passionné par l’informatique et les nouvelles technologies. Je développe mes compétences en maintenance IT, administration Linux et gestion de serveurs à travers mon expérience professionnelle et mes projets personnels.",
    "Curieux, adaptable et rigoureux, j'aime relever des défis techniques et partager mes connaissances en équipe.",
    "💡 Passionné de jeux vidéo (FPS, RTS), j'applique les valeurs de stratégie et de collaboration à mon travail.",
    "📬 Ouvert aux échanges sur l'IT et les innovations technologiques."
  ],
  skills: [
    "Cloud & Backup",
    "Windows",
    "Linux",
    "Déploiement",
    "Maintenance",
    "Résolution de problèmes",
    "Travail d'équipe",
    "Communication"
  ],
  hobbies: [
    {
      name: "Jeux en ligne",
      description: "J'apprécie les jeux en ligne pour leur aspect stratégique, collaboratif et compétitif."
    },
    {
      name: "Lecture",
      description: "La lecture me permet d'élargir mes connaissances et de stimuler ma curiosité."
    },
    {
      name: "Psychologie",
      description: "La psychologie m'intéresse pour mieux comprendre les interactions humaines et la prise de décision."
    }
  ]
};

export const projects: Project[] = [
  {
    name: "Nom",
    description: "Description",
    technologies: ["Techno 1", "Techno 2", "Techno 3", "Techno 4", "Techno 5"],
    link: "https://www.linkedin.com/in/quentin-laguenani/",
    features: [
      "Fonctionnalité 1",
      "Fonctionnalité 2",
      "Fonctionnalité 3",
      "Fonctionnalité 4",
      "Fonctionnalité 5"
    ],
    challenges: [
      "Défi 1",
      "Défi 2",
      "Défi 3",
      "Défi 4"
    ],
    images: [
      "./images/projet/taco1.jpg",
      "./images/projet/taco2.jpg",
      "./images/projet/taco3.jpg"
    ]
  },
  {
    name: "Nom 2",
    description: "Description 2",
    technologies: ["Techno 1", "Techno 2", "Techno 3", "Techno 4", "Techno 5"],
    link: "https://www.linkedin.com/in/quentin-laguenani/",
    features: [
      "Fonctionnalité 1",
      "Fonctionnalité 2",
      "Fonctionnalité 3",
      "Fonctionnalité 4",
      "Fonctionnalité 5"
    ],
    challenges: [
      "Défi 1",
      "Défi 2",
      "Défi 3",
      "Défi 4"
    ],
    images: [
      "./images/projet/taco1.jpg",
      "./images/projet/taco2.jpg",
      "./images/projet/taco3.jpg"
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "Watsoft",
    position: "Technicien Support",
    period: "06/2023 - Actuellement",
    description: [
      "Je vomis mes tripes",
      "Je me fais enculer par Oleg",
      "Je casse les couilles à mon manager"
    ]
  },
  {
    company: "Agence Web EEnov",
    position: "Stagiaire technicien système et réseaux",
    period: "03/2023 - 04/2023",
    description: [
      "1",
      "2",
      "3"
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: "Wasabi Technical Certification",
    issuer: "Wasabi",
    date: "2025",
    link: "https://certifications.allbound.eu/wasabi/61ae5afb-2d5d-46ee-ae6e-c700cd59ccd9",
    logo: "./images/certif/wasabi.png"
  }
];

export const education: Education[] = [
  {
    institution: "Ecole CESI",
    degree: "GMSI",
    period: "2023",
    description: "Gestionnaire en Maintenance et Support Informatique"
  },
  {
    institution: "Université Bordeaux Montaigne",
    degree: "DAEU option littéraire",
    period: "2020",
    description: "Diplôme d'Accès aux Etudes Universitaires"
  },
  {
    institution: "Lycée Bel Orme",
    degree: "Bac Pro",
    period: "2018",
    description: "Assistant Soins et Services à la Personne"
  } 
];

export const references: Reference[] = [
  {
    name: "Logan BOVET",
    position: "Responsable Support Technique",
    company: "Watsoft",
    quote: "OSKOUR",
    linkedIn: "https://www.linkedin.com/in/logan-bovet/"
  },
  {
    name: "Dany Bouteiller",
    position: "Responsable Support Technique (précédemment)",
    company: "Watsoft",
    quote: "Putain enfin je suis libre, plus besoin de gérer ce mec qui rote toute la journée",
    linkedIn: "https://www.linkedin.com/in/dany-bouteiller/"
  }
];