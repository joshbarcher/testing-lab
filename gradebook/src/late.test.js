import { describe, it, expect } from 'vitest';
import { latePenalty } from './late.js';

describe('latePenalty', () => {
  it('takes nothing off work that is on time', () => {
    expect(latePenalty(80, 0)).toBe(80);
  });

  it('takes a share off for each day late', () => {
    expect(latePenalty(80, 2)).toBe(64);
  });

  it('takes off half for work that is five or more days late', () => {
    expect(latePenalty(80, 5)).toBe(40);
  });

  it('never takes off more than half', () => {
    expect(latePenalty(80, 20)).toBe(40);
  });
});
