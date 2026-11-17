export function average(scores) {
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  return total / scores.length;
}

export function dropLowest(scores) {
  const lowest = Math.min(...scores);
  const index = scores.indexOf(lowest);
  return scores.filter((score, i) => i !== index);
}

export function isValidScore(score) {
  return Number.isFinite(score) && score >= 0 && score <= 100;
}
