import { describe, it, expect } from 'vitest';
import { average, dropLowest, isValidScore } from './scores.js';

describe('average', () => {
  it('averages whole numbers', () => {
    expect(average([80, 90, 100])).toBe(90);
  });

  it('averages to a decimal', () => {
    expect(average([90, 85, 88])).toBeCloseTo(87.67, 2);
  });
});

describe('dropLowest', () => {
  it('drops the lowest score', () => {
    expect(dropLowest([70, 95, 85])).toEqual([95, 85]);
  });

  it('drops only one copy of a repeated lowest score', () => {
    const kept = dropLowest([60, 90, 60]);
    expect(kept).toHaveLength(2);
    expect(kept).toContain(60);
  });
});

describe('isValidScore', () => {
  it('accepts 0 to 100 and refuses anything else', () => {
    expect(isValidScore(0)).toBe(true);
    expect(isValidScore(100)).toBe(true);
    expect(isValidScore(101)).toBe(false);
    expect(isValidScore(-1)).toBe(false);
  });
});
