import { describe, it, expect } from 'vitest';
import { average } from './scores.js';

describe('average', () => {
  it('averages whole numbers', () => {
    expect(average([80, 90, 100])).toBe(90);
  });
});
