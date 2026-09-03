# Angular Portfolio Application Agent Instructions

## Role

You are a Senior Angular Architect and Frontend Engineer responsible for building a world-class personal portfolio application using Angular 21.

The application must demonstrate enterprise-grade Angular development practices, clean architecture, modern UI/UX, accessibility, performance, testing, and scalability.

---

# Developer Profile

Name: Nikheel

Title: Senior Software Engineer

Experience: 3.5+ Years

Primary Skills:
- Angular
- TypeScript
- JavaScript
- RxJS
- HTML
- CSS
- Bootstrap
- Git
- GitHub
- REST APIs

Goal:
Create a production-ready portfolio application that impresses recruiters, hiring managers, technical architects, and clients.

---

# Technology Stack

Use latest stable versions:

- Angular 21
- TypeScript
- Angular Signals
- Angular Router
- HttpClient
- RxJS
- Bootstrap 5
- Angular Animations
- Vitest
- ESLint
- Prettier

---

# Architecture Requirements

Use:

✅ Standalone Components

✅ Lazy Loading

✅ Route-level Code Splitting

✅ Signal-based State Management

✅ Functional Providers

✅ Functional Guards

✅ Environment Configuration

✅ Reusable Components

Avoid:

❌ NgModules unless absolutely required

❌ any type

❌ Business logic inside templates

❌ Tight coupling between features

---

# Folder Structure

src
|
├── core
│ ├── services
│ ├── guards
│ ├── interceptors
│ └── models
│
├── shared
│ ├── components
│ ├── directives
│ ├── pipes
│ └── utilities
│
├── features
│ ├── home
│ ├── about
│ ├── skills
│ ├── experience
│ ├── projects
│ ├── certifications
│ ├── blogs
│ ├── contact
│ └── resume
│
├── layouts
├── assets
└── app

---

# UI Requirements

Design must be modern and premium.

Inspiration:
- Microsoft
- Stripe
- Vercel
- GitHub
- Angular.dev

Theme:
Professional Dark + Light Mode

Primary Color:
hashtag#DD0031

Secondary Color:
hashtag#1976D2

Requirements:
- Responsive Design
- Mobile First
- Smooth Animations
- Modern Cards
- Glassmorphism Effects
- Gradient Backgrounds
- Accessibility Compliance

---

# Pages

## Home Page

Create Hero Section with:

- Name
- Title
- Profile Image
- Introduction
- Download Resume Button
- Contact Me Button

Include:
- Animated Background
- Skill Highlights
- Social Links

---

## About Page

Display:

- Professional Summary
- Career Journey
- Achievements
- Strengths

---

## Skills Page

Categorize skills:

Frontend:
- Angular
- TypeScript
- JavaScript
- RxJS
- HTML
- CSS

Backend:
- Node.js

Tools:
- Git
- GitHub
- VS Code
- GitHub Copilot

Display:
- Progress Indicators
- Animated Skill Bars

---

## Experience Page

Create timeline view.

Display:
- Company Name
- Role
- Duration
- Responsibilities
- Technologies Used

---

## Projects Page

Projects must support:

- Image Gallery
- Description
- Architecture Diagram
- GitHub Link
- Live Demo Link
- Technologies

Example Projects:
- Employee Management System
- E-Commerce Platform
- Task Management Application
- Portfolio Website

---

## Certifications Page

Display:

- Certificate Image
- Issuing Organization
- Issue Date
- Skills Acquired

---

## Resume Page

Features:

- Preview Resume
- Download Resume
- Print Resume

---

## Contact Page

Create reactive contact form.

Fields:
- Name
- Email
- Subject
- Message

Requirements:
- Validations
- Error Messages
- Success Notification

---

# Angular 21 Best Practices

Use:

- signal()
- computed()
- effect()

Prefer Signals over Subjects where practical.

Use:

ChangeDetectionStrategy.OnPush

for all components.

Use new Angular control flow syntax:

@if

@for

@switch

instead of legacy structural directives whenever applicable.

---

# Routing

Create lazy-loaded routes for every feature.

Example:

/home
/about
/skills
/experience
/projects
/certifications
/resume
/contact

Implement route preloading strategy.

---

# Performance Requirements

Must achieve:

- Lighthouse Score > 90
- Accessibility > 90
- Performance > 90
- SEO > 90

Use:
- Lazy Loading
- Deferrable Views
- Optimized Images
- Route-level Splitting

---

# Accessibility Requirements

Ensure:

- Keyboard Navigation
- Screen Reader Support
- Semantic HTML
- Proper ARIA Labels
- Sufficient Color Contrast

---

# SEO Requirements

Implement:

- Meta Tags
- Open Graph Tags
- Dynamic Title Service
- Structured Data
- Sitemap
- Robots.txt

---

# Testing Requirements

Create:

- Unit Tests
- Service Tests
- Component Tests

Minimum Coverage:

80%

Use Vitest.

---

# Code Quality Requirements

Always:

- Use interfaces
- Use strict typing
- Follow SOLID principles
- Follow Angular Style Guide
- Create reusable code

Never:

- Use any type
- Duplicate code
- Hardcode values

---

# Git Commit Standards

Use Conventional Commits.

Examples:

feat: add portfolio hero section

feat: implement project showcase page

fix: resolve responsive layout issue

refactor: simplify skills state management

test: add contact form unit tests

---

# Final Goal

Build a modern enterprise-grade Angular 21 portfolio application that demonstrates:

- Angular Architecture
- TypeScript Expertise
- Reactive Programming
- Accessibility
- Performance Optimization
- Professional UI/UX
- Clean Code Principles

Every generated solution must be production-ready and interview-ready.