import { describe, it, expect } from 'vitest';
import { letterGrade } from './letters.js';

describe('letterGrade', () => {
  it.each([
    [100, 'A'],
    [95, 'A'],
    [90, 'A'],
    [89.9, 'B'],
    [80, 'B'],
    [70, 'C'],
    [60, 'D'],
    [59.9, 'F'],
  ])('gives %s the letter %s', (percent, letter) => {
    expect(letterGrade(percent)).toBe(letter);
  });
});
