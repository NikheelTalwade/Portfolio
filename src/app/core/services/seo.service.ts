import { Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  readonly pageTitle = signal('Nikheel Talwade');

  constructor(private readonly title: Title, private readonly meta: Meta) {}

  updatePage(meta: { title: string; description: string; canonical?: string }): void {
    const fullTitle = `${meta.title} | Nikheel Talwade`;
    this.pageTitle.set(meta.title);
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: meta.description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: meta.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    if (meta.canonical) {
      this.meta.updateTag({ rel: 'canonical', href: meta.canonical });
    }
  }
}
