import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-header">
      <p class="eyebrow">{{ eyebrow() }}</p>
      <h2>{{ title() }}</h2>
      <p class="description">{{ description() }}</p>
    </div>
  `,
  styles: `
    :host { display: block; margin-bottom: 1.6rem; }
    .section-header { display: grid; gap: 0.5rem; }
    .eyebrow { color: var(--accent-primary); text-transform: uppercase; letter-spacing: 0.2em; font-size: 0.78rem; font-weight: 700; margin: 0; }
    h2 { margin: 0; font-size: clamp(1.6rem, 2.3vw, 2.2rem); color: var(--text-primary); line-height: 1.1; }
    .description { color: var(--text-secondary); max-width: 66ch; line-height: 1.7; margin: 0; }
  `
})
export class SectionHeaderComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
