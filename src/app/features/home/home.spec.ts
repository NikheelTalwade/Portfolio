import '@angular/compiler';
import { describe, expect, it } from 'vitest';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  it('should be defined', () => {
    expect(typeof HomeComponent).toBe('function');
  });
});
