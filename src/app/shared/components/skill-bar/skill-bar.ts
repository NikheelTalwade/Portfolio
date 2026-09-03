import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="progress-bar" role="progressbar" [attr.aria-label]="label() + ' proficiency'" [attr.aria-valuenow]="level()" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-fill"></div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .progress-bar {
      width: 100%;
      height: 0.7rem;
      background: color-mix(in srgb, var(--accent-primary) 15%, transparent);
      border-radius: 999px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      width: var(--skill-level);
      background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
      border-radius: inherit;
      transition: width 0.4s ease;
    }
  `
})
export class SkillBarComponent {
  readonly label = input.required<string>();
  readonly level = input.required<number>();

  @HostBinding('style.--skill-level')
  get skillLevel(): string {
    return `${this.level()}%`;
  }
}
