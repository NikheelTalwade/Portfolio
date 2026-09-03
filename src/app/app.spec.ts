import '@angular/compiler';
import { describe, expect, it } from 'vitest';
import { App } from './app';
import { PortfolioDataService } from './core/services/portfolio-data.service';

describe('App', () => {
  it('should create the app', () => {
    const app = new App();
    expect(app).toBeTruthy();
    expect(app.title()).toBe('nikheel-talwade');
  });
});

describe('PortfolioDataService', () => {
  it('should expose the portfolio profile and highlight content', () => {
    const service = new PortfolioDataService();
    expect(service.profile.name).toBe('Nikheel Talwade');
    expect(service.profile.title).toBe('Senior Software Engineer');
    expect(service.highlights).toContain('Angular 21 Specialist');
    expect(service.skillCategories[0].skills[0].name).toBe('Angular');
  });
});
