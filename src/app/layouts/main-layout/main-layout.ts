import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" routerLink="/home" aria-label="Go to home page">
          <span class="brand-mark">NT</span>
          <span>Nikheel Talwade</span>
        </a>
        <nav class="nav-links" aria-label="Primary navigation">
          <a routerLink="/home" routerLinkActive="active">Home</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/skills" routerLinkActive="active">Skills</a>
          <a routerLink="/experience" routerLinkActive="active">Experience</a>
          <a routerLink="/projects" routerLinkActive="active">Projects</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </nav>
        <app-theme-toggle></app-theme-toggle>
      </header>

      <main class="content">
        <router-outlet></router-outlet>
      </main>

      <footer class="footer">
        <p>© {{ year }} {{ portfolio.profile.name }}.</p>
      </footer>
    </div>
  `,
  styles: `
    :host { display: block; }
    .app-shell { min-height: 100vh; display: grid; grid-template-rows: auto 1fr auto; background: transparent; color: var(--text-primary); }
    .topbar { position: sticky; top: 0; z-index: 20; display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.25rem; margin: 1rem 1rem 0; border-radius: 1.5rem; backdrop-filter: blur(22px); background: linear-gradient(90deg, color-mix(in srgb, var(--surface-1) 88%, transparent), color-mix(in srgb, var(--surface-2) 82%, transparent)); border: 1px solid var(--border-color); box-shadow: var(--shadow-soft); }
    .brand { display: inline-flex; align-items: center; gap: 0.7rem; font-weight: 700; color: var(--text-primary); text-decoration: none; font-size: 1.02rem; }
    .brand-mark { width: 2.4rem; height: 2.4rem; border-radius: 0.9rem; display: grid; place-items: center; background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: white; font-size: 0.95rem; box-shadow: 0 10px 30px rgba(221, 0, 49, 0.25); }
    .nav-links { display: flex; gap: 0.6rem; flex-wrap: wrap; align-items: center; }
    .nav-links a { color: var(--text-secondary); text-decoration: none; font-weight: 700; padding: 0.6rem 1rem; border-radius: 999px; background: transparent; border: 1px solid transparent; transition: all 0.18s ease; }
    .nav-links a.active, .nav-links a:hover { color: white; background: linear-gradient(135deg, rgba(34,34,34,0.35), rgba(255,255,255,0.02)); border-color: rgba(255,255,255,0.03); box-shadow: 0 6px 20px rgba(0,0,0,0.35); }
    .content { padding: 1.4rem 1.5rem 3rem; max-width: 1200px; width: 100%; margin: 0 auto; }
    .footer { padding: 1.1rem 1.5rem 2rem; color: var(--text-secondary); border-top: 1px solid var(--border-color); max-width: 1200px; width: 100%; margin: 0 auto; text-align: center; }
    @media (max-width: 760px) {
      .topbar { flex-direction: column; align-items: flex-start; gap: 0.8rem; border-radius: 1.2rem; }
      .content { padding: 1rem 1rem 2.5rem; }
      .footer { padding: 1rem 1rem 2rem; text-align: center; }
    }
  `
})
export class MainLayoutComponent {
  readonly portfolio = inject(PortfolioDataService);
  readonly year = new Date().getFullYear();
}
