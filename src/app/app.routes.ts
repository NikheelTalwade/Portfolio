import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
import { resumeGuard } from './core/guards/resume.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./features/home/home').then((m) => m.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about').then((m) => m.AboutComponent)
      },
      {
        path: 'skills',
        loadComponent: () => import('./features/skills/skills').then((m) => m.SkillsComponent)
      },
      {
        path: 'experience',
        loadComponent: () => import('./features/experience/experience').then((m) => m.ExperienceComponent)
      },
      {
        path: 'projects',
        loadComponent: () => import('./features/projects/projects').then((m) => m.ProjectsComponent)
      },
      {
        path: 'certifications',
        loadComponent: () => import('./features/certifications/certifications').then((m) => m.CertificationsComponent)
      },
      {
        path: 'resume',
        loadComponent: () => import('./features/resume/resume').then((m) => m.ResumeComponent),
        canActivate: [resumeGuard]
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then((m) => m.ContactComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
