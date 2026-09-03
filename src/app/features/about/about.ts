import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="card about-grid">
      <div>
        <app-section-header eyebrow="About" title="Building thoughtful products" description="A product-minded engineer with a strong engineering backbone and a bias for elegant systems." />
        <p class="body-copy">{{ profile.summary }}</p>
        <p class="body-copy">Over the years, I have helped teams modernize user experiences, improve reliability, and deliver clear product outcomes with a pragmatic and collaborative approach.</p>
      </div>
      <div class="summary-card">
        <h3>Strengths</h3>
        <ul>
          <li>Designing maintainable Angular architectures</li>
          <li>Leading frontend modernization initiatives</li>
          <li>Championing accessibility and inclusive UX</li>
        </ul>
      </div>
    </section>
  `,
  styles: `
    .about-grid { display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 1.5rem; padding: 2rem; }
    .body-copy { color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem; }
    .summary-card { background: var(--surface-2); border: 1px solid var(--border-color); border-radius: 1.25rem; padding: 1.25rem; box-shadow: var(--shadow-soft); }
    .summary-card h3 { margin-top: 0; color: var(--text-primary); }
    .summary-card ul { margin: 0; padding-left: 1rem; color: var(--text-secondary); display: grid; gap: 0.6rem; }
    @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }
  `
})
export class AboutComponent implements OnInit {
  readonly portfolioData = inject(PortfolioDataService);
  readonly seo = inject(SeoService);

  protected readonly profile = this.portfolioData.profile;

  ngOnInit(): void {
    this.seo.updatePage({
      title: 'About',
      description: 'Learn about Nikheel Talwade, his background, strengths, and approach to building modern software products.'
    });
  }
}
