import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  readonly theme = signal<'dark' | 'light'>('dark');
  readonly isDark = computed(() => this.theme() === 'dark');

  constructor() {
    const storage = this.document.defaultView?.localStorage;
    const savedTheme = storage?.getItem('portfolio-theme') as 'dark' | 'light' | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.theme.set(savedTheme);
    }

    effect(() => {
      const resolvedTheme = this.theme();
      this.document.documentElement.setAttribute('data-theme', resolvedTheme);
      this.document.documentElement.setAttribute('data-bs-theme', resolvedTheme);
      storage?.setItem('portfolio-theme', resolvedTheme);
    });
  }

  toggleTheme(): void {
    this.theme.update((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }
}
