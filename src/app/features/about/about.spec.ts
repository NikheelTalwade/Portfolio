import '@angular/compiler';
import { describe, expect, it } from 'vitest';
import { AboutComponent } from './about';

describe('AboutComponent', () => {
  it('should be defined', () => {
    expect(typeof AboutComponent).toBe('function');
  });
});
