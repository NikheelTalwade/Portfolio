import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent implements OnInit {
  readonly portfolioData = inject(PortfolioDataService);
  readonly seo = inject(SeoService);

  protected readonly experience = this.portfolioData.experience;

  ngOnInit(): void {
    this.seo.updatePage({
      title: 'Experience',
      description: 'Review Nikheel Talwade’s experience and the impact of his work across product engineering teams.'
    });
  }
}
