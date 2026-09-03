import '@angular/compiler';
import { describe, expect, it } from 'vitest';
import { ContactComponent } from './contact';

describe('ContactComponent', () => {
  it('should be defined', () => {
    expect(typeof ContactComponent).toBe('function');
  });
});
