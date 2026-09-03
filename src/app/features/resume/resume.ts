import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="card resume-card">
      <app-section-header eyebrow="Resume" title="Professional snapshot" description="A concise preview of experience, capabilities, and recent achievements." />
      <div class="resume-content">
        <h3>{{ profile.name }}</h3>
        <p>{{ profile.title }}</p>
        <p>{{ profile.summary }}</p>
        <div class="actions">
          <a class="btn btn-primary" href="/assets/nikheel_talwade.pdf" download>Download Resume</a>
          <button class="btn btn-secondary" type="button" (click)="printResume()">Print Resume</button>
        </div>
      </div>
    </section>
  `,
  styles: `
    .resume-card { padding: 2rem; }
    .resume-content { display: grid; gap: 0.8rem; }
    .btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.8rem 1.1rem; border-radius: 999px; border: 0; font-weight: 700; cursor: pointer; text-decoration: none; }
    .btn-primary { background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: white; }
    .btn-secondary { border: 1px solid var(--border-color); color: var(--text-primary); background: var(--surface-2); }
    .actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem; }
  `
})
export class ResumeComponent implements OnInit {
  readonly portfolioData = inject(PortfolioDataService);
  readonly seo = inject(SeoService);

  protected readonly profile = this.portfolioData.profile;

  ngOnInit(): void {
    this.seo.updatePage({
      title: 'Resume',
      description: 'Open Nikheel Talwade’s resume preview and download options.'
    });
  }

  printResume(): void {
    window.print();
  }
}
