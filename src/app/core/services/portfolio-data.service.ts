import { Injectable } from '@angular/core';
import { BlogPost, CertificationItem, ExperienceItem, Profile, ProjectItem, SkillCategory } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly profile: Profile = {
    name: 'Nikheel Talwade',
    title: 'Senior Software Engineer',
    location: 'India',
    introduction:
      'I design and build scalable Angular applications with a strong focus on product quality, accessibility, and high-performance user experiences.',
    summary:
      'I am a software engineer with 3.5+ years of experience building modern web applications using Angular, TypeScrip and cloud-native tooling.',
    email: 'nikheeltalwade.sde@gmail.com',
    phone: '+91 95912 41878',
    socials: [
      { name: 'GitHub', href: 'https://github.com', label: 'Visit GitHub profile' },
      { name: 'LinkedIn', href: 'https://linkedin.com', label: 'Visit LinkedIn profile' },
      { name: 'Email', href: 'mailto:nikheeltalwade.sde@gmail.com', label: 'Send an email' }
    ],
    profileImages: [
      'assets/profile-picture.jpg',
      'assets/profile-picture1.jpg',
      'assets/profile-picture2.jpg',
      'assets/profile-picture3.jpg'
    ]
  };

  readonly highlights: string[] = [
    'Angular 21 Specialist',
    'Accessible, Test-Driven UI',
    'Performance Optimized Delivery'
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', level: 95, description: 'Signals, standalone components, router, animations' },
        { name: 'TypeScript', level: 90, description: 'Strict typing and maintainable architecture' },
        { name: 'RxJS', level: 85, description: 'Reactive patterns and state orchestration' },
        { name: 'HTML & CSS', level: 92, description: 'Semantic markup and polished interfaces' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git & GitHub', level: 92, description: 'Version control and collaborative delivery' },
        { name: 'VS Code', level: 90, description: 'Productive development workflow' },
        { name: 'GitHub Copilot', level: 88, description: 'Accelerated implementation and refactoring' }
      ]
    }
  ];

  readonly experience: ExperienceItem[] = [
    {
      company: 'LTIMindtree (LTM)',
      role: 'Senior Software Engineer',
      duration: 'Feb 2026 - Present',
      summary: 'Delivered MCA offline filing solutions for the Ministry of Corporate Affairs with a strong focus on business requirements, reactive forms, and client-aligned delivery.',
      responsibilities: [
        'Analyzed business requirements and user stories to translate them into technical solutions that supported end-user goals.',
        'Implemented reactive forms with validation and reusable common components across the application.',
        'Worked on UI bug fixes and enhancements while collaborating with backend teams, UI/UX designers, and stakeholders.'
      ],
      technologies: ['Angular', 'Reactive Forms', 'TypeScript', 'HTML5', 'CSS3', 'REST APIs']
    },
    {
      company: 'Leadwinner Corp',
      role: 'Angular Developer',
      duration: 'Jun 2022 - Jun 2025',
      summary: 'Built government-focused financial and case management platforms with scalable Angular modules, interactive dashboards, and secure integrations.',
      responsibilities: [
        'Designed and developed user-facing modules for fund tracking and state-level scheme management applications.',
        'Built interactive dashboards and reports for financial visibility and operational monitoring.',
        'Implemented component-based architecture, routing, reusable UI components, and REST API integrations.',
        'Contributed to E-CASE workflows and collaborated with domain experts and backend teams to align application behavior with business rules.'
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Power BI']
    },
    {
      company: 'Tech-Mahindra Ltd',
      role: 'Associate Customer Support',
      duration: 'Oct 2021 - Apr 2022',
      summary: 'Verified Aadhaar application documentation with high accuracy and ensured compliance with UIDAI standards.',
      responsibilities: [
        'Reviewed and validated Aadhaar application documents with 99.8% accuracy.',
        'Approved valid submissions and rejected mismatches to prevent fraudulent applications.'
      ],
      technologies: ['Customer Support', 'Document Verification', 'Compliance']
    }
  ];

  readonly projects: ProjectItem[] = [
    {
      title: 'LTIMindtree - MCA Offline System',
      description: 'Built the MCA Offline System for the Ministry of Corporate Affairs to support offline form preparation, validation, and online upload workflows for company filings.',
      technologies: ['Angular', 'Reactive Forms', 'TypeScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
      metrics: ['Offline form workflow', 'Compliance-driven UI']
    },
    {
      title: 'Leadwinner Corp - Square Up',
      description: 'Developed Square Up, a government fund tracking platform for transparent monitoring, reporting, and financial visibility across departments.',
      technologies: ['Angular', 'TypeScript', 'REST APIs', 'Power BI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
      metrics: ['Real-time dashboards', 'Government financial workflows']
    },
    {
      title: 'Leadwinner Corp - SCPAR',
      description: 'Implemented a state-level fund management system for scheme implementation, district administration, fund allocation, approvals, and payment tracking.',
      technologies: ['Angular', 'TypeScript', 'REST APIs', 'Role-based UI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
      metrics: ['Role-based workflows', 'District-level operations']
    },
    {
      title: 'Leadwinner Corp - E-CASE',
      description: 'Engineered E-CASE, a digital case management solution for district courts to modernize case filing, tracking, notice distribution, and judicial workflows.',
      technologies: ['Angular', 'Reactive Forms', 'TypeScript', 'UI Modules'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      metrics: ['Case workflow automation', 'Judicial process support']
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Built a responsive portfolio website using Angular 17+, standalone components, signals, and SCSS to showcase professional experience, skills, and projects.',
      technologies: ['Angular 21+', 'Standalone Components', 'Signals', 'SCSS', 'GitHub Copilot'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      metrics: ['Modern responsive UI', 'Performance optimized']
    }
  ];

  readonly certifications: CertificationItem[] = [
    {
      title: 'Angular Advanced Development',
      organization: 'Angular Academy',
      issued: 'May 2024',
      skills: ['Signals', 'SSR', 'Performance'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'Accessibility Specialist',
      organization: 'W3C',
      issued: 'October 2023',
      skills: ['WCAG', 'Keyboard Navigation', 'ARIA'],
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80'
    }
  ];

  readonly blogPosts: BlogPost[] = [
    {
      title: 'Designing accessible Angular experiences',
      excerpt: 'Practical guidance for building inclusive interfaces that feel polished and fast.',
      published: 'June 2024',
      readTime: '5 min read',
      link: 'https://example.com/blog/accessibility'
    },
    {
      title: 'Signals in Angular 21: What changed',
      excerpt: 'A concise overview of modern state management patterns for scaling product teams.',
      published: 'April 2024',
      readTime: '4 min read',
      link: 'https://example.com/blog/signals'
    }
  ];
}
