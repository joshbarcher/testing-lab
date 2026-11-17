export function latePenalty(score, daysLate) {
  const percentOff = Math.min(daysLate * 10, 50);
  return score - (score * percentOff) / 100;
}
