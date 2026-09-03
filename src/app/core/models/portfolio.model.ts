export interface SocialLink {
  name: string;
  href: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  metrics: string[];
}

export interface CertificationItem {
  title: string;
  organization: string;
  issued: string;
  skills: string[];
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  published: string;
  readTime: string;
  link: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  introduction: string;
  summary: string;
  email: string;
  phone: string;
  socials: SocialLink[];
  profileImages: string[];
}
