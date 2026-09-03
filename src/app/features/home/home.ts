import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero card" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow">Available for impactful product teams</p>
        <h1 id="home-title">{{ profile.name }}</h1>
        <h2>{{ profile.title }}</h2>
        <p class="intro">{{ profile.introduction }}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="assets/nikheel_talwade.pdf" download="Nikheel-Talwade-Resume.pdf">Download Resume</a>
          <a class="btn btn-secondary" routerLink="/contact">Contact Me</a>
        </div>
        <ul class="social-links" aria-label="Social links">
          @for (link of profile.socials; track link.name) {
            <li><a [href]="link.href" [attr.aria-label]="link.label" target="_blank" rel="noreferrer">{{ link.name }}</a></li>
          }
        </ul>
      </div>
      <div class="hero-panel" aria-label="Professional highlights">
        <div class="profile-card">
          <div class="profile-carousel">
            <div class="carousel-images">
              @for (image of profile.profileImages; track image) {
                <img
                  class="profile-image"
                  [src]="image"
                  [alt]="'Portrait of ' + profile.name"
                  [class.active]="currentProfileImage() === image"
                />
              }
            </div>
            <div class="carousel-controls">
              <button type="button" class="carousel-btn" (click)="prevImage()" aria-label="Previous profile photo">‹</button>
              <span class="carousel-indicator">{{ currentImageIndex() + 1 }} / {{ profile.profileImages.length }}</span>
              <button type="button" class="carousel-btn" (click)="nextImage()" aria-label="Next profile photo">›</button>
            </div>
            <div class="carousel-dots">
              @for (image of profile.profileImages; track image) {
                <button
                  type="button"
                  class="carousel-dot"
                  [class.active]="currentProfileImage() === image"
                  (click)="setImage(profile.profileImages.indexOf(image))"
                  [attr.aria-label]="'Show photo ' + (profile.profileImages.indexOf(image) + 1)"
                ></button>
              }
            </div>
          </div>

          <div class="profile-meta">
            <h3>{{ profile.title }}</h3>
            <p>{{ profile.location }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="highlights-title">
      <app-section-header eyebrow="Crafted with care" title="What I bring" description="A balance of technical depth, product thinking, and polished execution." />
      <div class="grid cards">
        @for (item of highlights; track item) {
          <article class="card feature-card">
            <h3>{{ item }}</h3>
            <p>Thoughtful interfaces, performant delivery, and scalable engineering practices.</p>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .hero { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; position: relative; overflow: hidden; align-items: center; animation: fadeInUp 0.6s ease both; }
    .hero::after { content: ''; position: absolute; inset: auto -20% -20% auto; width: 280px; height: 280px; background: radial-gradient(circle, color-mix(in srgb, var(--accent-primary) 20%, transparent) 0%, transparent 70%); pointer-events: none; }
    .hero-copy, .hero-panel { display: flex; flex-direction: column; justify-content: center; }
    .eyebrow { color: var(--accent-primary); text-transform: uppercase; letter-spacing: 0.2em; font-size: 0.8rem; font-weight: 700; }
    h1 { font-size: clamp(2.2rem, 4vw, 3.6rem); margin: 0.4rem 0; color: var(--text-primary); line-height: 1.05; }
    h2 { color: var(--accent-secondary); margin: 0 0 1rem; font-size: 1.2rem; }
    .intro { color: var(--text-secondary); font-size: 1rem; line-height: 1.8; max-width: 60ch; }
    .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin: 1.4rem 0; }
    .btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.8rem 1.1rem; border-radius: 999px; text-decoration: none; font-weight: 700; transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .btn:hover { transform: translateY(-2px); }
    .btn-primary { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: white; box-shadow: 0 10px 25px rgba(221, 0, 49, 0.25); }
    .btn-secondary { border: 1px solid var(--border-color); color: var(--text-primary); background: color-mix(in srgb, var(--surface-2) 88%, transparent); }
    .social-links { list-style: none; padding: 0; display: flex; gap: 1rem; flex-wrap: wrap; margin: 0; }
    .social-links a { color: var(--accent-secondary); text-decoration: none; font-weight: 600; }
    .hero-panel { display: grid; gap: 1rem; }
    .profile-card, .profile-highlights, .feature-card { background: var(--surface-2); border: 1px solid var(--border-color); border-radius: 1.25rem; padding: 1.25rem; box-shadow: var(--shadow-soft); }
    .profile-card { display: grid; gap: 1rem; width: min(100%, 320px); margin: 0 auto; }
    .profile-carousel { display: grid; gap: 0.85rem; }
    .carousel-images { position: relative; }
    .profile-image { width: 100%; aspect-ratio: 3 / 4; border-radius: 1rem; object-fit: cover; margin: 0 auto; display: none; }
    .profile-image.active { display: block; }
    .carousel-controls { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }
    .carousel-indicator { color: var(--text-secondary); font-size: 0.95rem; }
    .carousel-btn { width: 2.5rem; height: 2.5rem; border-radius: 999px; border: 1px solid var(--border-color); background: color-mix(in srgb, var(--surface-1) 85%, transparent); color: var(--text-primary); font-size: 1.25rem; cursor: pointer; transition: all 0.2s ease; }
    .carousel-btn:hover { border-color: var(--accent-primary); color: var(--accent-primary); }
    .carousel-dots { display: flex; justify-content: center; gap: 0.5rem; flex-wrap: wrap; }
    .carousel-dot { width: 0.85rem; height: 0.85rem; border-radius: 50%; border: none; background: color-mix(in srgb, var(--text-secondary) 40%, transparent); cursor: pointer; transition: transform 0.2s ease, background 0.2s ease; }
    .carousel-dot.active { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); transform: scale(1.1); }
    .profile-meta h3 { margin: 0 0 0.25rem; color: var(--text-primary); }
    .profile-meta p { margin: 0; color: var(--text-secondary); }
    .profile-highlights h4 { margin: 0 0 0.7rem; color: var(--text-primary); }
    .highlight-list { margin: 0; padding-left: 1.2rem; color: var(--text-secondary); display: grid; gap: 0.5rem; }
    .cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
    .feature-card { display: grid; gap: 0.6rem; transition: transform 0.2s ease, border-color 0.2s ease; }
    .feature-card:hover { transform: translateY(-4px); border-color: color-mix(in srgb, var(--accent-primary) 30%, var(--border-color)); }
    .feature-card h3 { margin: 0; color: var(--text-primary); }
    .feature-card p { margin: 0; color: var(--text-secondary); line-height: 1.7; }
    @media (max-width: 900px) { .hero { grid-template-columns: 1fr; } .hero-copy, .hero-panel { align-items: center; text-align: center; } .cards { grid-template-columns: 1fr; } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  `
})
export class HomeComponent implements OnInit {
  readonly portfolioData = inject(PortfolioDataService);
  readonly seo = inject(SeoService);

  protected readonly profile = this.portfolioData.profile;
  protected readonly highlights = this.portfolioData.highlights;
  protected readonly currentImageIndex = signal(0);
  protected readonly currentProfileImage = computed(
    () => this.profile.profileImages[this.currentImageIndex()]
  );

  protected prevImage(): void {
    const count = this.profile.profileImages.length;
    this.currentImageIndex.update((index) => (index - 1 + count) % count);
  }

  protected nextImage(): void {
    const count = this.profile.profileImages.length;
    this.currentImageIndex.update((index) => (index + 1) % count);
  }

  protected setImage(index: number): void {
    this.currentImageIndex.set(index);
  }

  ngOnInit(): void {
    this.seo.updatePage({
      title: 'Home',
      description: 'Portfolio home page for Nikheel Talwade, a senior software engineer focused on Angular and product engineering.'
    });
  }
}
