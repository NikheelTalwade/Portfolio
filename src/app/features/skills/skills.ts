import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SeoService } from '../../core/services/seo.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { SkillBarComponent } from '../../shared/components/skill-bar/skill-bar';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent, SkillBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent implements OnInit {
  readonly portfolioData = inject(PortfolioDataService);
  readonly seo = inject(SeoService);

  protected readonly skillCategories = this.portfolioData.skillCategories;

  ngOnInit(): void {
    this.seo.updatePage({
      title: 'Skills',
      description: 'Explore Nikheel Talwade’s technical skills across frontend, backend, and modern engineering tools.'
    });
  }
}
