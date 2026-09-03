import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="card">
      <app-section-header eyebrow="Certifications" title="Credentials and learning" description="Proof of continuous growth in modern engineering, accessibility, and product quality." />
      <div class="cert-grid">
        @for (certification of certifications; track certification.title) {
          <article class="cert-card">
            <img [src]="certification.image" [alt]="certification.title" loading="lazy" decoding="async" />
            <div class="cert-content">
              <h3>{{ certification.title }}</h3>
              <p class="org">{{ certification.organization }}</p>
              <p>{{ certification.issued }}</p>
              <div class="tags">
                @for (skill of certification.skills; track skill) {
                  <span>{{ skill }}</span>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .cert-grid { display: grid; gap: 1rem; grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cert-card { background: var(--surface-2); border: 1px solid var(--border-color); border-radius: 1.25rem; overflow: hidden; }
    img { width: 100%; height: 200px; object-fit: cover; display: block; }
    .cert-content { padding: 1rem; display: grid; gap: 0.5rem; }
    .org { color: var(--accent-secondary); font-weight: 700; }
    .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.3rem; }
    .tags span { background: color-mix(in srgb, var(--accent-primary) 15%, transparent); color: var(--accent-primary); padding: 0.35rem 0.65rem; border-radius: 999px; font-size: 0.82rem; }
    @media (max-width: 900px) { .cert-grid { grid-template-columns: 1fr; } }
  `
})
export class CertificationsComponent implements OnInit {
  readonly portfolioData = inject(PortfolioDataService);
  readonly seo = inject(SeoService);

  protected readonly certifications = this.portfolioData.certifications;

  ngOnInit(): void {
    this.seo.updatePage({
      title: 'Certifications',
      description: 'See Nikheel Talwade’s professional certifications and areas of continued learning.'
    });
  }
}
