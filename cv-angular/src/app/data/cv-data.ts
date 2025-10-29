export interface ContactLink {
  label: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export interface NavItem {
  label: string;
  fragment: string;
}

export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
}

export interface TechnologyBadge {
  label: string;
  tone: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
}

export interface LanguageItem {
  name: string;
}

export interface ProjectItem {
  title: string;
  description: string;
}

export interface ExtraInfoItem {
  label: string;
  value: string;
}

export const profile = {
  name: 'Jose Tanchez',
  headline: 'Full Stack Developer',
  summary:
    'Desarrollador full stack enfocado en soluciones en la nube, migración de datos y aplicaciones web de alto impacto.',
  photo: 'imagenJOSE.webp',
  photoAlt: 'Foto de Jose Tanchez'
};

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    href: 'mailto:jose.tanchez1028@gmail.com',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg',
    ariaLabel: 'Enviar correo a jose.tanchez1028@gmail.com'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Jtanchezz',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    ariaLabel: 'Abrir perfil de GitHub de Jtanchezz'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/josetanchezz/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
    ariaLabel: 'Abrir perfil de LinkedIn de josetanchezz'
  }
];

export const navItems: NavItem[] = [
  { label: 'Tecnologías', fragment: 'tecnologias' },
  { label: 'Lenguajes', fragment: 'lenguajes' },
  { label: 'Proyectos', fragment: 'proyectos' },
  { label: 'Stack Overflow', fragment: 'stackoverflow' },
  { label: 'Soft Skills', fragment: 'softskills' },
  { label: 'Experiencia', fragment: 'experiencia' }
];

export const educationHistory: EducationItem[] = [
  {
    institution: 'Universidad Francisco Marroquín',
    period: '2023-2026',
    degree: 'Licenciatura en Computer Science'
  },
  {
    institution: 'Colegio Decroly Americano',
    period: '2009-2022',
    degree: 'Bachillerato en Ciencias y Letras'
  },
  {
    institution: 'Universidad Francisco Marroquín Madrid',
    period: '2025-2025',
    degree: 'Licenciatura en Computer Science'
  }
];

export const technologies: TechnologyBadge[] = [
  { label: 'HTML', tone: 'primary' },
  { label: 'Docker', tone: 'secondary' },
  { label: 'Git & GitHub', tone: 'success' },
  { label: 'JavaScript', tone: 'warning' },
  { label: 'React', tone: 'info' }
];

export const languages: LanguageItem[] = [
  { name: 'Python' },
  { name: 'C' },
  { name: 'Java' },
  { name: 'SQL' },
  { name: 'NoSQL' }
];

export const projects: ProjectItem[] = [
  {
    title: 'Proyecto - Web App de Microservicios en AWS para Clima, Tráfico y Noticias',
    description:
      'Aplicación web de microservicios desplegada en AWS que permite consultar clima, visualizar tráfico en tiempo real y acceder a noticias globales utilizando servicios como EC2, RDS, Amplify, VPS y S3, con pipelines CI/CD activos.'
  },
  {
    title: 'Proyecto - Migración de Datos y Web App para Gestión Bancaria',
    description:
      'Migración de datos bancarios desde archivos Excel a PostgreSQL en Docker y desarrollo de una aplicación web con vistas separadas para clientes y administradores, construida con React y Python.'
  }
];

export const extraInfo: ExtraInfoItem[] = [
  { label: 'Disponibilidad', value: 'Inmediata' },
  { label: 'Ubicación', value: 'Guatemala' }
];
